import { validateEnv } from '../../utils/env.js';
import { isAuthenticated } from '../../utils/auth.js';
import { createCsrfToken } from '../../utils/csrf.js';

export async function onRequestGet(context) {
  validateEnv(context.env);
  const { env } = context;
  const { DB } = env;

  try {
    const auth = await isAuthenticated(context.request, env);
    if (!auth) {
      return new Response(JSON.stringify({ user: null }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const [user, accountPreferences, emailPreferences] = await Promise.all([
      DB.prepare('SELECT id, email, access_level, trial_ends_at FROM users WHERE id = ?')
        .bind(auth.userId)
        .first(),
      DB.prepare('SELECT theme, font_size FROM account_preferences WHERE user_id = ?')
        .bind(auth.userId)
        .first(),
      DB.prepare('SELECT newsletter_enabled, research_updates_enabled FROM email_preferences WHERE user_id = ?')
        .bind(auth.userId)
        .first(),
    ]);

    const trialEndsAt = user?.trial_ends_at || null;
    const hasPaidAccess = user?.access_level === 'pro' || (user?.access_level === 'trial' && trialEndsAt && Date.parse(trialEndsAt) > Date.now());
    const csrfToken = await createCsrfToken(auth.sessionId, auth.userId);

    const headers = new Headers({ 'Content-Type': 'application/json' });
    if (auth.refreshedCookie) {
      headers.append('Set-Cookie', auth.refreshedCookie);
    }

    return new Response(
      JSON.stringify({
        user: {
          id: user.id,
          email: user.email,
          access_level: user.access_level || 'free',
          trial_ends_at: trialEndsAt,
          has_paid_access: Boolean(hasPaidAccess),
        },
        csrf_token: csrfToken,
        preferences: accountPreferences || { theme: 'system', font_size: 'medium' },
        email_preferences: emailPreferences || { newsletter_enabled: true, research_updates_enabled: true },
      }),
      {
        status: 200,
        headers,
      }
    );
  } catch (error) {
    console.error('Error in GET /api/account/session:', error);
    return new Response(error.message || 'Internal error', { status: 500 });
  }
}
