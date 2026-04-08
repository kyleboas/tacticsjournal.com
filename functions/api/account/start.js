import { validateEnv } from '../../utils/env';
import { generateToken, hashToken } from '../../utils/token';
import { Resend } from 'resend';

export async function onRequestPost(context) {
  validateEnv(context.env);
  const { request, env } = context;
  const { DB, RESEND_API_KEY } = env;

  try {
    const { email } = await request.json();

    if (!email) {
      return new Response('Email is required', { status: 400 });
    }

    // Check if user exists, if not, create one
    let user = await DB.prepare("SELECT id FROM users WHERE email = ?").bind(email).first();
    if (!user) {
      const userId = generateToken(); // Use generateToken for user IDs too
      await DB.prepare("INSERT INTO users (id, email) VALUES (?, ?)").bind(userId, email).run();
      // Create default preferences for new user
      await DB.prepare("INSERT INTO account_preferences (user_id) VALUES (?)").bind(userId).run();
      await DB.prepare("INSERT INTO email_preferences (user_id) VALUES (?)").bind(userId).run();
      user = { id: userId };
    }

    // Generate and store magic link token
    const magicToken = generateToken();
    const hashedMagicToken = await hashToken(magicToken);
    const expiresAt = Date.now() + (10 * 60 * 1000); // 10 minutes from now

    await DB.prepare("INSERT INTO magic_links (id, email, token, expires_at) VALUES (?, ?, ?, ?)")
      .bind(generateToken(), email, hashedMagicToken, expiresAt)
      .run();

    // Send magic link email using Resend
    const resend = new Resend(RESEND_API_KEY);
    const magicLinkUrl = `${new URL(request.url).origin}/account/finish?token=${magicToken}`;

    await resend.emails.send({
      from: 'onboarding@tacticsjournal.com',
      to: email,
      subject: 'Your Tactics Journal Magic Link',
      html: `Click <a href="${magicLinkUrl}">here</a> to sign in to Tactics Journal.`,
    });

    return new Response('Magic link sent!', { status: 200 });

  } catch (error) {
    console.error('Error in POST /api/account/start:', error);
    return new Response(error.message, { status: 500 });
  }
}
