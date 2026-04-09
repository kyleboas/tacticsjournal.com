import { validateEnv } from '../utils/env.js';
import { hashToken } from '../utils/token.js';
import { createSession, setSessionCookie } from '../utils/session.js';
import { onTrialStart } from '../utils/sync-triggers.js';

const TRIAL_MS = 7 * 24 * 60 * 60 * 1000;

export async function onRequestGet(context) {
  validateEnv(context.env);
  const { request, env } = context;
  const { DB } = env;
  const url = new URL(request.url);
  const token = url.searchParams.get('token');

  if (!token) {
    return new Response('Missing magic link token', { status: 400 });
  }

  try {
    const hashedToken = await hashToken(token);
    const magicLink = await DB.prepare(
      'SELECT id, email, expires_at FROM magic_links WHERE token = ? LIMIT 1'
    )
      .bind(hashedToken)
      .first();

    if (!magicLink) {
      return new Response('Invalid or expired magic link', { status: 400 });
    }

    const magicLinkExpires = Date.parse(magicLink.expires_at);
    if (Number.isNaN(magicLinkExpires) || magicLinkExpires <= Date.now()) {
      await DB.prepare('DELETE FROM magic_links WHERE id = ?').bind(magicLink.id).run();
      return new Response('Invalid or expired magic link', { status: 400 });
    }

    const user = await DB.prepare(
      'SELECT id, email, access_level, trial_started_at, trial_ends_at FROM users WHERE email = ? LIMIT 1'
    )
      .bind(magicLink.email)
      .first();

    if (!user) {
      return new Response('User not found', { status: 404 });
    }

    let startedTrialNow = false;
    if (!user.trial_started_at) {
      const nowIso = new Date().toISOString();
      const trialEndsIso = new Date(Date.now() + TRIAL_MS).toISOString();
      await DB.prepare(
        'UPDATE users SET access_level = ?, trial_started_at = ?, trial_ends_at = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?'
      )
        .bind('trial', nowIso, trialEndsIso, user.id)
        .run();
      startedTrialNow = true;
    }

    const { sessionId, expiresAtMs } = await createSession(env, user.id);

    await DB.prepare('DELETE FROM magic_links WHERE id = ?').bind(magicLink.id).run();

    if (startedTrialNow) {
      try {
        await onTrialStart(user.email, env);
      } catch (syncError) {
        console.error('Buttondown sync failed on trial start:', syncError);
      }
    }

    const headers = new Headers();
    headers.set('Set-Cookie', setSessionCookie(sessionId, expiresAtMs));
    headers.set('Location', `${url.origin}/account/`);
    return new Response(null, { status: 302, headers });
  } catch (error) {
    console.error('Error in GET /account/finish:', error);
    return new Response(error.message || 'Internal error', { status: 500 });
  }
}
