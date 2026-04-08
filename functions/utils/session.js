import { generateToken } from './token.js';

const COOKIE_NAME = '__session';
const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

export function getSessionCookie(request) {
  const cookieHeader = request.headers.get('Cookie') || '';
  const cookies = cookieHeader.split(';').map((c) => c.trim());
  const sessionCookie = cookies.find((c) => c.startsWith(`${COOKIE_NAME}=`));
  return sessionCookie ? decodeURIComponent(sessionCookie.split('=').slice(1).join('=')) : null;
}

export function setSessionCookie(sessionId, expiresAtMs) {
  return `${COOKIE_NAME}=${encodeURIComponent(sessionId)}; Path=/; HttpOnly; SameSite=Lax; Secure; Expires=${new Date(expiresAtMs).toUTCString()}`;
}

export function clearSessionCookie() {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Secure; Expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

export async function createSession(env, userId, ttlMs = SESSION_TTL_MS) {
  const sessionId = generateToken();
  const expiresAtMs = Date.now() + ttlMs;
  const expiresAtIso = new Date(expiresAtMs).toISOString();

  await env.DB.prepare(
    'INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)'
  )
    .bind(sessionId, userId, expiresAtIso)
    .run();

  return { sessionId, expiresAtMs };
}

export async function destroySession(env, sessionId) {
  if (!sessionId) return;
  await env.DB.prepare('DELETE FROM sessions WHERE id = ?').bind(sessionId).run();
}

export async function verifySession(env, sessionId) {
  if (!sessionId) return null;

  const session = await env.DB.prepare(
    `SELECT s.id, s.user_id, s.expires_at, u.email, u.access_level, u.trial_ends_at
     FROM sessions s
     JOIN users u ON u.id = s.user_id
     WHERE s.id = ?
     LIMIT 1`
  )
    .bind(sessionId)
    .first();

  if (!session) return null;

  const expiresAt = Date.parse(session.expires_at);
  if (Number.isNaN(expiresAt) || expiresAt <= Date.now()) {
    await destroySession(env, sessionId);
    return null;
  }

  return session;
}
