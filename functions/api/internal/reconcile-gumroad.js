import { validateEnv } from '../../utils/env.js';

function isAuthorized(request, env) {
  const expected = env.INTERNAL_JOB_KEY;
  if (!expected) return false;
  const header = request.headers.get('Authorization') || '';
  return header === `Bearer ${expected}`;
}

function getEventEmail(payload) {
  const value = payload?.email || payload?.purchase_email || '';
  return String(value).trim().toLowerCase();
}

function eventGrantsPro(eventName) {
  return eventName === 'charge_succeeded' || eventName === 'subscription_created' || eventName === 'subscription_updated';
}

function eventRevokesPro(eventName) {
  return eventName === 'subscription_cancelled' || eventName === 'refund' || eventName === 'dispute';
}

async function applyAccess(db, email, nextAccess) {
  if (!email) return { updated: false, missingUser: false };

  const user = await db.prepare('SELECT id FROM users WHERE email = ? LIMIT 1').bind(email).first();
  if (!user) return { updated: false, missingUser: true };

  await db.prepare('UPDATE users SET access_level = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?')
    .bind(nextAccess, user.id)
    .run();

  return { updated: true, missingUser: false };
}

export async function onRequestPost(context) {
  validateEnv(context.env, { requireDb: true });
  const { request, env } = context;

  if (!isAuthorized(request, env)) {
    return new Response('Unauthorized', { status: 401 });
  }

  const pendingRows = await env.DB.prepare(
    'SELECT id, event_name, payload FROM gumroad_events WHERE processed = 0 ORDER BY created_at ASC LIMIT 1000'
  ).all();

  const rows = pendingRows?.results || [];

  let processed = 0;
  let upgradedToPro = 0;
  let downgradedToFree = 0;
  let missingUsers = 0;
  let ignoredEvents = 0;

  for (const row of rows) {
    const eventName = row.event_name;

    let payload;
    try {
      payload = JSON.parse(row.payload || '{}');
    } catch {
      payload = {};
    }

    const email = getEventEmail(payload);

    if (eventGrantsPro(eventName)) {
      const result = await applyAccess(env.DB, email, 'pro');
      if (result.updated) upgradedToPro += 1;
      if (result.missingUser) missingUsers += 1;
    } else if (eventRevokesPro(eventName)) {
      const result = await applyAccess(env.DB, email, 'free');
      if (result.updated) downgradedToFree += 1;
      if (result.missingUser) missingUsers += 1;
    } else {
      ignoredEvents += 1;
    }

    await env.DB.prepare('UPDATE gumroad_events SET processed = 1 WHERE id = ?').bind(row.id).run();
    processed += 1;
  }

  const stillPending = await env.DB.prepare('SELECT COUNT(*) AS count FROM gumroad_events WHERE processed = 0').first();

  return new Response(
    JSON.stringify({
      success: true,
      mode: 'active',
      processed,
      upgraded_to_pro: upgradedToPro,
      downgraded_to_free: downgradedToFree,
      missing_users: missingUsers,
      ignored_events: ignoredEvents,
      pending_gumroad_events: Number(stillPending?.count || 0),
      checked_at: new Date().toISOString(),
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
