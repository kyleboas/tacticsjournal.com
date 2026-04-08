import { verifySession, getSessionCookie } from './session';

export async function isAuthenticated(request, env) {
  const token = getSessionCookie(request);
  if (!token) {
    return null; // Not authenticated
  }

  const session = await verifySession(token);
  if (!session || session.exp * 1000 < Date.now()) {
    // Session expired or invalid
    return null;
  }

  // Optionally, fetch user from DB to ensure they still exist
  // const user = await env.DB.prepare("SELECT id, email FROM users WHERE id = ?").bind(session.userId).first();
  // return user || null;

  return { userId: session.userId };
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
