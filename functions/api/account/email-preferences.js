import { validateEnv } from '../../utils/env.js';
import { requireAuth } from '../../utils/auth.js';

async function handlePost(context) {
  validateEnv(context.env);
  const { request, env, data } = context;
  const { DB } = env;
  const { auth } = data;

  try {
    const { newsletter_enabled, research_updates_enabled } = await request.json();

    if (typeof newsletter_enabled !== 'boolean' && typeof research_updates_enabled !== 'boolean') {
      return new Response('No valid email preferences provided', { status: 400 });
    }

    const updateFields = [];
    const bindValues = [];

    if (typeof newsletter_enabled === 'boolean') {
      updateFields.push('newsletter_enabled = ?');
      bindValues.push(newsletter_enabled ? 1 : 0);
    }

    if (typeof research_updates_enabled === 'boolean') {
      updateFields.push('research_updates_enabled = ?');
      bindValues.push(research_updates_enabled ? 1 : 0);
    }

    bindValues.push(auth.userId);

    await DB.prepare(
      `UPDATE email_preferences
       SET ${updateFields.join(', ')}, updated_at = CURRENT_TIMESTAMP
       WHERE user_id = ?`
    )
      .bind(...bindValues)
      .run();

    return new Response('Email preferences saved!', { status: 200 });
  } catch (error) {
    console.error('Error in POST /api/account/email-preferences:', error);
    return new Response(error.message || 'Internal error', { status: 500 });
  }
}

export const onRequestPost = requireAuth(handlePost);
