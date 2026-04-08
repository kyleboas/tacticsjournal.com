import { validateEnv } from '../../utils/env.js';
import { generateToken, hashToken } from '../../utils/token.js';
import { Resend } from 'resend';

export async function onRequestPost(context) {
  validateEnv(context.env, { requireDb: true, requireResend: true });
  const { request, env } = context;
  const { DB, RESEND_API_KEY } = env;

  try {
    const { email } = await request.json();
    const normalizedEmail = (email || '').trim().toLowerCase();

    if (!normalizedEmail) {
      return new Response('Email is required', { status: 400 });
    }

    let user = await DB.prepare('SELECT id FROM users WHERE email = ?')
      .bind(normalizedEmail)
      .first();

    if (!user) {
      const userId = generateToken();
      await DB.prepare('INSERT INTO users (id, email) VALUES (?, ?)')
        .bind(userId, normalizedEmail)
        .run();

      await DB.prepare('INSERT INTO account_preferences (user_id) VALUES (?)')
        .bind(userId)
        .run();

      await DB.prepare('INSERT INTO email_preferences (user_id) VALUES (?)')
        .bind(userId)
        .run();

      user = { id: userId };
    }

    const magicToken = generateToken();
    const hashedMagicToken = await hashToken(magicToken);
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString();

    await DB.prepare('INSERT INTO magic_links (id, email, token, expires_at) VALUES (?, ?, ?, ?)')
      .bind(generateToken(), normalizedEmail, hashedMagicToken, expiresAt)
      .run();

    const resend = new Resend(RESEND_API_KEY);
    const magicLinkUrl = `${new URL(request.url).origin}/account/finish?token=${encodeURIComponent(magicToken)}`;

    await resend.emails.send({
      from: 'onboarding@tacticsjournal.com',
      to: normalizedEmail,
      subject: 'Your Tactics Journal Magic Link',
      html: `Click <a href="${magicLinkUrl}">here</a> to sign in to Tactics Journal. This link expires in 10 minutes.`,
    });

    return new Response('Magic link sent!', { status: 200 });
  } catch (error) {
    console.error('Error in POST /api/account/start:', error);
    return new Response(error.message || 'Internal error', { status: 500 });
  }
}
