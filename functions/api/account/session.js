import { validateEnv } from '../../utils/env';
import { isAuthenticated } from '../../utils/auth';

export async function onRequestGet(context) {
  validateEnv(context.env);
  const { env } = context;
  const { DB } = env;

  try {
    const auth = await isAuthenticated(context.request, env);
    if (!auth) {
      return new Response(JSON.stringify({ user: null }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }

    const user = await DB.prepare("SELECT id, email FROM users WHERE id = ?").bind(auth.userId).first();
    const accountPreferences = await DB.prepare("SELECT theme, font_size FROM account_preferences WHERE user_id = ?").bind(auth.userId).first();
    const emailPreferences = await DB.prepare("SELECT newsletter_enabled, research_updates_enabled FROM email_preferences WHERE user_id = ?").bind(auth.userId).first();

    return new Response(JSON.stringify({
      user: { id: user.id, email: user.email },
      preferences: accountPreferences || { theme: 'system', font_size: 'medium' },
      email_preferences: emailPreferences || { newsletter_enabled: true, research_updates_enabled: true },
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in GET /api/account/session:', error);
    return new Response(error.message, { status: 500 });
  }
}
