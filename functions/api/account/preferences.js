import { validateEnv } from '../../utils/env.js';
import { requireAuth } from '../../utils/auth.js';

async function handlePost(context) {
  validateEnv(context.env);
  const { request, env, data } = context;
  const { DB } = env;
  const { auth } = data;

  try {
    const { theme, font_size } = await request.json();

    if (!theme && !font_size) {
      return new Response('No preferences provided', { status: 400 });
    }

    const updateFields = [];
    const bindValues = [];

    if (theme) {
      updateFields.push('theme = ?');
      bindValues.push(theme);
    }
    if (font_size) {
      updateFields.push('font_size = ?');
      bindValues.push(font_size);
    }

    bindValues.push(auth.userId);

    await DB.prepare(`UPDATE account_preferences SET ${updateFields.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE user_id = ?`)
      .bind(...bindValues)
      .run();

    return new Response('Account preferences saved!', { status: 200 });
  } catch (error) {
    console.error('Error in POST /api/account/preferences:', error);
    return new Response(error.message || 'Internal error', { status: 500 });
  }
}

export const onRequestPost = requireAuth(handlePost);
