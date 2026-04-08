import {
  onTrialStart,
  onTrialEnd,
  onPurchaseComplete,
  onResearchAccessChange,
  onOpinionNewsletterSignup,
  onGeneralResearchSignup,
  onUserStateChanged,
} from '../../utils/sync-triggers.js';
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

  const db = env.DB;

  try {
    const { action, email, data } = await request.json();

    if (!action || !email) {
      return new Response('Action and email are required', { status: 400 });
    }

    const userEmail = email.toLowerCase();
    let result = false;

    switch (action) {
      case 'trial_start':
        result = await onTrialStart(userEmail, env);
        break;
      case 'trial_end':
        result = await onTrialEnd(userEmail, env);
        break;
      case 'purchase_complete':
        if (!data?.plan) {
          return new Response('Plan is required for purchase_complete action', { status: 400 });
        }
        result = await onPurchaseComplete(userEmail, data.plan, env);
        break;
      case 'research_access_change':
        if (!data?.accessLevel) {
          return new Response('Access level is required for research_access_change action', { status: 400 });
        }
        result = await onResearchAccessChange(userEmail, data.accessLevel, env);
        break;
      case 'opinion_newsletter_signup':
        result = await onOpinionNewsletterSignup(userEmail, env);
        break;
      case 'general_research_signup':
        result = await onGeneralResearchSignup(userEmail, env);
        break;
      case 'user_state_changed': {
        if (!data?.userId) {
          return new Response('User ID is required for user_state_changed action', { status: 400 });
        }
        const user = await db.prepare('SELECT id, email FROM users WHERE id = ?').bind(data.userId).first();
        if (!user) {
          return new Response('User not found', { status: 404 });
        }
        result = await onUserStateChanged(user, db, env);
        break;
      }
      default:
        return new Response(`Unknown action: ${action}`, { status: 400 });
    }

    return new Response(JSON.stringify({ success: Boolean(result), action, email: userEmail }), {
      status: result ? 200 : 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in sync trigger:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function onRequestGet(context) {
  if (!isAuthorized(context.request, context.env)) {
    return new Response('Unauthorized', { status: 401 });
  }

  return new Response(
    JSON.stringify({
      availableActions: [
        'trial_start',
        'trial_end',
        'purchase_complete',
        'research_access_change',
        'opinion_newsletter_signup',
        'general_research_signup',
        'user_state_changed',
      ],
      buttondownConfigured: Boolean(context.env.BUTTONDOWN_API_KEY),
      timestamp: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
