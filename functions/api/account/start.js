import { validateEnv } from '../../utils/env.js';
import { generateToken, hashToken } from '../../utils/token.js';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isSameOriginRequest(request) {
  const origin = request.headers.get('Origin');
  if (!origin) return true;

  try {
    const requestOrigin = new URL(request.url).origin;
    return origin === requestOrigin;
  } catch {
    return false;
  }
}

export async function onRequestPost(context) {
  validateEnv(context.env, { requireDb: true, requireResend: true });
  const { request, env } = context;
  const { DB, RESEND_API_KEY } = env;

  try {
    if (!isSameOriginRequest(request)) {
      return new Response('Cross-origin POST not allowed', { status: 403 });
    }

    console.log('Normalized email:', normalizedEmail);
    console.log('Available env keys:', Object.keys(env));
    
    if (!env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing');
    }

    if (!normalizedEmail) {
      return new Response('Email is required', { status: 400 });
    }

    if (!EMAIL_REGEX.test(normalizedEmail)) {
      return new Response('Invalid email format', { status: 400 });
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

    const magicLinkUrl = `${new URL(request.url).origin}/account/finish?token=${encodeURIComponent(magicToken)}`;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@tacticsjournal.com',
        to: normalizedEmail,
        subject: 'Your Tactics Journal Magic Link',
        html: `Click <a href="${magicLinkUrl}">here</a> to sign in to Tactics Journal. This link expires in 10 minutes.`,
      }),
    });

    if (!resendResponse.ok) {
      throw new Error(`Resend API error: ${resendResponse.status} ${await resendResponse.text()}`);
    }

    return new Response('Magic link sent!', { status: 200 });
  } catch (error) {
    console.error('Error in POST /api/account/start:', error);
    return new Response(error.message || 'Internal error', { status: 500 });
  }
}
