import { validateEnv } from '../utils/env.js';
import { generateToken } from '../utils/token.js';
import { onPurchaseComplete, onTrialEnd } from '../utils/sync-triggers.js';

function toHex(buffer) {
  return [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function hmacSha256Hex(secret, payload) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload));
  return toHex(signature);
}

function safeEqual(a = '', b = '') {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

async function verifySignature(request, rawBody, secret) {
  const incoming = request.headers.get('X-Gumroad-Signature') || '';
  if (!incoming) return false;
  const expected = await hmacSha256Hex(secret, rawBody);
  return safeEqual(incoming, expected);
}

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
  return { eventName, email, productId, payload };
}

function mapPlan(productId) {
  if (!productId) return 'monthly';
  const value = String(productId).toLowerCase();
  if (value.includes('year')) return 'yearly';
  return 'monthly';
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
  await db.prepare('UPDATE gumroad_events SET processed = 1 WHERE id = ?').bind(eventId).run();
}

async function updateUserAccess(db, email, nextAccessLevel) {
  const user = await db.prepare('SELECT id FROM users WHERE email = ? LIMIT 1').bind(email).first();
  if (!user) return null;

  if (nextAccessLevel === 'pro') {
    await db.prepare(
      'UPDATE users SET access_level = ?, pro_expires_at = NULL, updated_at = CURRENT_TIMESTAMP WHERE id = ?'
    )
      .bind('pro', user.id)
      .run();
  } else {
    await db.prepare(
      'UPDATE users SET access_level = ?, pro_expires_at = NULL, updated_at = CURRENT_TIMESTAMP WHERE id = ?'
    )
      .bind('free', user.id)
      .run();
  }

  return user.id;
}

export async function onRequestPost(context) {
  validateEnv(context.env, { requireDb: true, requireGumroadSecret: true });
  const { request, env } = context;
  const db = env.DB;

  try {
    const rawBody = await request.text();
    const contentType = request.headers.get('content-type') || '';

    const valid = await verifySignature(request, rawBody, env.GUMROAD_WEBHOOK_SECRET);
    if (!valid) {
      return new Response('Invalid signature', { status: 401 });
    }

    const payload = parsePayload(rawBody, contentType);
    const event = normalizeEvent(payload);

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
