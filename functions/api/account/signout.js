import { clearSessionCookie, getSessionCookie, destroySession } from '../../utils/session.js';
import { validateEnv } from '../../utils/env.js';

export async function onRequestPost(context) {
  validateEnv(context.env);

  try {
    const sessionId = getSessionCookie(context.request);
    if (sessionId) {
      await destroySession(context.env, sessionId);
    }

    const headers = new Headers();
    headers.set('Set-Cookie', clearSessionCookie());
    return new Response('Signed out', { status: 200, headers });
  } catch (error) {
    console.error('Error in POST /api/account/signout:', error);
    return new Response(error.message || 'Internal error', { status: 500 });
  }
}
