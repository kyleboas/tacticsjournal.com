import { clearSessionCookie } from '../../utils/session';
import { validateEnv } from '../../utils/env';

export async function onRequestPost(context) {
  validateEnv(context.env);
  const { env } = context;
  const { DB } = env;

  try {
    // Invalidate session in DB if tracking sessions there
    // For now, just clear the cookie

    const headers = new Headers();
    headers.set('Set-Cookie', clearSessionCookie());
    return new Response('Signed out', { status: 200, headers });
  } catch (error) {
    console.error('Error in POST /api/account/signout:', error);
    return new Response(error.message, { status: 500 });
  }
}
