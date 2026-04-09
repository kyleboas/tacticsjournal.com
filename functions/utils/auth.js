import { verifySession, getSessionCookie, setSessionCookie } from './session.js';
import { validateCsrf } from './csrf.js';

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

  const refreshedCookie = session.refreshed_expires_at_ms
    ? setSessionCookie(session.id, session.refreshed_expires_at_ms)
    : null;

  return {
    userId: session.user_id,
    sessionId: session.id,
    email: session.email,
    accessLevel: session.access_level || 'free',
    trialEndsAt: session.trial_ends_at || null,
    hasPaidAccess: hasPaidAccess(session),
    refreshedCookie,
  };
}

export function requireAuth(handler) {
  return async (context) => {
    const auth = await isAuthenticated(context.request, context.env);
    if (!auth) {
      return new Response('Unauthorized', { status: 401 });
    }

    const method = context.request.method.toUpperCase();
    const requiresCsrf = !['GET', 'HEAD', 'OPTIONS'].includes(method);
    if (requiresCsrf) {
      const isValid = await validateCsrf(context.request, auth);
      if (!isValid) {
        return new Response('Invalid CSRF token', { status: 403 });
      }
    }

    context.data = { ...context.data, auth };
    const response = await handler(context);

    if (auth.refreshedCookie) {
      const headers = new Headers(response.headers);
      if (!headers.has('Set-Cookie')) {
        headers.append('Set-Cookie', auth.refreshedCookie);
      }
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    }

    return response;
  };
}
