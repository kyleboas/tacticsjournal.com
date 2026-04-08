import { validateEnv } from '../utils/env';
import { hashToken } from '../utils/token';
import { createSession, setSessionCookie } from '../utils/session';

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
      "SELECT * FROM magic_links WHERE token = ? AND expires_at > ?"
    ).bind(hashedToken, Date.now()).first();

    if (!magicLink) {
      return new Response('Invalid or expired magic link', { status: 400 });
    }

    // Get user and create session
    const user = await DB.prepare("SELECT id FROM users WHERE email = ?").bind(magicLink.email).first();
    if (!user) {
      return new Response('User not found', { status: 404 });
    }

    const sessionId = user.id; // Use user ID as session ID for simplicity
    const expiresAt = Date.now() + (7 * 24 * 60 * 60 * 1000); // 7 days from now
    const sessionToken = await createSession(user.id, expiresAt);

    await DB.prepare("INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)")
      .bind(sessionId, user.id, expiresAt)
      .run();

    // Delete used magic link
    await DB.prepare("DELETE FROM magic_links WHERE id = ?").bind(magicLink.id).run();

    // Redirect to account page with session cookie
    const headers = new Headers();
    headers.set('Set-Cookie', setSessionCookie(sessionToken, expiresAt));
    headers.set('Location', `${url.origin}/account/`);
    return new Response(null, { status: 302, headers });

  } catch (error) {
    console.error('Error in GET /account/finish:', error);
    return new Response(error.message, { status: 500 });
  }
}
