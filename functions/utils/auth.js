import { verifySession, getSessionCookie } from './session.js';

function hasPaidAccess(user) {
  if (!user) return false;

  if (user.access_level === 'pro') return true;
  if (user.access_level === 'trial') {
    if (!user.trial_ends_at) return false;
    return Date.parse(user.trial_ends_at) > Date.now();
  }

  return false;
}

export async function isAuthenticated(request, env) {
  const token = getSessionCookie(request);
  if (!token) return null;

  const session = await verifySession(env, token);
  if (!session) return null;

  return {
    userId: session.user_id,
    email: session.email,
    accessLevel: session.access_level || 'free',
    trialEndsAt: session.trial_ends_at || null,
    hasPaidAccess: hasPaidAccess(session),
  };
}

export function requireAuth(handler) {
  return async (context) => {
    const auth = await isAuthenticated(context.request, context.env);
    if (!auth) {
      return new Response('Unauthorized', { status: 401 });
    }

    context.data = { ...context.data, auth };
    return handler(context);
  };
}
