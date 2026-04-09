import { validateEnv } from '../../utils/env.js';

function isAuthorized(request, env) {
  const expected = env.INTERNAL_JOB_KEY;
  if (!expected) return false;
  const header = request.headers.get('Authorization') || '';
  return header === `Bearer ${expected}`;
}

export async function onRequestPost(context) {
  validateEnv(context.env, { requireDb: true });
  const { request, env } = context;

  if (!isAuthorized(request, env)) {
    return new Response('Unauthorized', { status: 401 });
  }

  const nowIso = new Date().toISOString();

  const result = await env.DB.prepare(
    `UPDATE users
     SET access_level = 'free', updated_at = CURRENT_TIMESTAMP
     WHERE access_level = 'trial'
       AND trial_ends_at IS NOT NULL
       AND trial_ends_at <= ?`
  )
    .bind(nowIso)
    .run();

  const cleanup = await env.DB.prepare('DELETE FROM magic_links WHERE expires_at <= ?')
    .bind(nowIso)
    .run();

  return new Response(
    JSON.stringify({
      success: true,
      downgraded_users: result.meta?.changes || 0,
      deleted_expired_magic_links: cleanup.meta?.changes || 0,
      checked_at: nowIso,
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
