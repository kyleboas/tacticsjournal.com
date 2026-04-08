import { validateEnv } from '../../utils/env.js';

function isAuthorized(request, env) {
  const expected = env.INTERNAL_JOB_KEY;
  if (!expected) return false;
  const header = request.headers.get('Authorization') || '';
  return header === `Bearer ${expected}`;
}

export async function onRequestPost(context) {
  validateEnv(context.env, { requireDb: true });
  const { request, env } = context;

  if (!isAuthorized(request, env)) {
    return new Response('Unauthorized', { status: 401 });
  }

  // Scaffolding phase:
  // - expose a deterministic internal endpoint
  // - return reconciliation counters for future expansion
  // - keep logic safe and idempotent
  const [pendingEvents, proUsers] = await Promise.all([
    env.DB.prepare('SELECT COUNT(*) AS count FROM gumroad_events WHERE processed = 0').first(),
    env.DB.prepare("SELECT COUNT(*) AS count FROM users WHERE access_level = 'pro'").first(),
  ]);

  return new Response(
    JSON.stringify({
      success: true,
      mode: 'scaffolding',
      pending_gumroad_events: Number(pendingEvents?.count || 0),
      pro_users: Number(proUsers?.count || 0),
      next_step: 'Implement external Gumroad API reconciliation once live credentials are available.',
      checked_at: new Date().toISOString(),
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
