import { validateEnv } from '../utils/env.js';
import { generateToken } from '../utils/token.js';
import { onPurchaseComplete, onTrialEnd } from '../utils/sync-triggers.js';

function parsePayload(rawBody, contentType) {
  if ((contentType || '').includes('application/json')) {
    return JSON.parse(rawBody);
  }

  const params = new URLSearchParams(rawBody);
  const payload = {};
  for (const [key, value] of params.entries()) {
    payload[key] = value;
  }

  return payload;
}

function normalizeEvent(payload) {
  const eventName = payload.event_type || payload.event || payload.resource_name || 'unknown';
  const email = (payload.email || payload.purchase_email || '').trim().toLowerCase();
  const productId = payload.product_id || payload.product_permalink || payload.product_name || '';
  const sellerId = payload.seller_id || '';
  return { eventName, email, productId, sellerId, payload };
}

function mapPlan(productId) {
  if (!productId) return 'monthly';
  const value = String(productId).toLowerCase();
  if (value.includes('year')) return 'yearly';
  return 'monthly';
}

function hasTrustedSeller(event, env) {
  const expectedSellerId = (env.GUMROAD_SELLER_ID || '').trim();
  if (!expectedSellerId) return true;
  return event.sellerId === expectedSellerId;
}

async function logEvent(db, eventName, payload) {
  const id = generateToken();
  await db.prepare(
    'INSERT INTO gumroad_events (id, event_name, payload, processed) VALUES (?, ?, ?, ?)'
  )
    .bind(id, eventName, JSON.stringify(payload), 0)
    .run();
  return id;
}

async function markProcessed(db, eventId) {
  await db.prepare('UPDATE gumroad_events SET processed = 1, updated_at = CURRENT_TIMESTAMP WHERE id = ?').bind(eventId).run();
}

async function getOrCreateUser(db, email) {
  const existing = await db.prepare('SELECT id FROM users WHERE email = ? LIMIT 1').bind(email).first();
  if (existing) return existing.id;

  const userId = generateToken();
  await db.prepare('INSERT INTO users (id, email, access_level) VALUES (?, ?, ?)')
    .bind(userId, email, 'free')
    .run();

  await db.prepare('INSERT INTO account_preferences (user_id) VALUES (?)').bind(userId).run();
  await db.prepare('INSERT INTO email_preferences (user_id) VALUES (?)').bind(userId).run();

  return userId;
}

async function updateUserAccess(db, email, nextAccessLevel) {
  const userId = await getOrCreateUser(db, email);

  if (nextAccessLevel === 'pro') {
    await db.prepare(
      'UPDATE users SET access_level = ?, pro_expires_at = NULL, updated_at = CURRENT_TIMESTAMP WHERE id = ?'
    )
      .bind('pro', userId)
      .run();
  } else {
    await db.prepare(
      'UPDATE users SET access_level = ?, pro_expires_at = NULL, updated_at = CURRENT_TIMESTAMP WHERE id = ?'
    )
      .bind('free', userId)
      .run();
  }

  return userId;
}

export async function onRequestPost(context) {
  validateEnv(context.env, { requireDb: true });
  const { request, env } = context;
  const db = env.DB;

  try {
    const rawBody = await request.text();
    const contentType = request.headers.get('content-type') || '';
    const payload = parsePayload(rawBody, contentType);
    const event = normalizeEvent(payload);

    if (!hasTrustedSeller(event, env)) {
      return new Response('Unexpected seller_id', { status: 401 });
    }

    if (!event.email) {
      return new Response('Missing email in webhook payload', { status: 400 });
    }

    const eventId = await logEvent(db, event.eventName, payload);

    switch (event.eventName) {
      case 'charge_succeeded':
      case 'subscription_created': {
        await updateUserAccess(db, event.email, 'pro');
        await onPurchaseComplete(event.email, mapPlan(event.productId), env);
        break;
      }
      case 'subscription_updated': {
        // Gumroad sends subscription_updated for both upgrades and downgrades.
        // Only grant pro if the subscription is still active.
        const status = (payload.subscription_status || '').toLowerCase();
        const isActive = !status || status === 'alive' || status === 'active';
        if (isActive) {
          await updateUserAccess(db, event.email, 'pro');
          await onPurchaseComplete(event.email, mapPlan(event.productId), env);
        } else {
          await updateUserAccess(db, event.email, 'free');
          await onTrialEnd(event.email, env);
        }
        break;
      }
      case 'subscription_cancelled':
      case 'refund':
      case 'dispute': {
        await updateUserAccess(db, event.email, 'free');
        await onTrialEnd(event.email, env);
        break;
      }
      default:
        console.log(`Gumroad event logged without access change: ${event.eventName}`);
    }

    await markProcessed(db, eventId);

    return new Response(JSON.stringify({ success: true, event: event.eventName }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing Gumroad webhook:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
