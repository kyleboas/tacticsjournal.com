function uniqueTags(tags) {
  return [...new Set((tags || []).filter(Boolean))];
}

export async function syncButtondownSubscriber(email, tags, env) {
  const apiKey = env.BUTTONDOWN_API_KEY;

  if (!apiKey) {
    throw new Error('BUTTONDOWN_API_KEY is not set. Cannot sync with Buttondown.');
  }

  const normalizedEmail = (email || '').trim().toLowerCase();
  if (!normalizedEmail) return false;

  try {
    const response = await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${apiKey}`,
      },
      body: JSON.stringify({
        email: normalizedEmail,
        tags: uniqueTags(tags),
        referral_url: 'https://tacticsjournal.com',
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Buttondown API error: ${response.status} - ${errorText}`);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error syncing with Buttondown:', error);
    return false;
  }
}

export async function syncUserWithTrialStart(email, env) {
  return syncButtondownSubscriber(email, ['trial-7d', 'research-free'], env);
}

export async function syncUserWithTrialEnd(email, env) {
  return syncButtondownSubscriber(email, ['research-free'], env);
}

export async function syncUserWithPurchase(email, plan, env) {
  const tags = ['customer-pro', 'research-pro'];
  if (plan === 'yearly' || plan === 'monthly') {
    tags.push(`plan-${plan}`);
  }
  return syncButtondownSubscriber(email, tags, env);
}

export async function syncResearchAccessLevel(email, accessLevel, env) {
  if (accessLevel === 'paid' || accessLevel === 'pro') {
    return syncButtondownSubscriber(email, ['research-pro', 'customer-pro'], env);
  }

  if (accessLevel === 'trial') {
    return syncButtondownSubscriber(email, ['trial-7d', 'research-free'], env);
  }

  return syncButtondownSubscriber(email, ['research-free'], env);
}

export async function syncOpinionNewsletterSignup(email, env) {
  return syncButtondownSubscriber(email, ['opinion'], env);
}

export async function syncGeneralResearchSignup(email, env) {
  return syncButtondownSubscriber(email, ['research-free'], env);
}

export async function syncUserCompleteState(user, db, env) {
  try {
    const [userState, emailPref] = await Promise.all([
      db.prepare('SELECT access_level, trial_ends_at FROM users WHERE id = ?').bind(user.id).first(),
      db.prepare('SELECT newsletter_enabled, research_updates_enabled FROM email_preferences WHERE user_id = ?').bind(user.id).first(),
    ]);

    const tags = [];

    if (emailPref?.newsletter_enabled) tags.push('opinion');

    const accessLevel = userState?.access_level || 'free';
    const trialActive = accessLevel === 'trial' && userState?.trial_ends_at && Date.parse(userState.trial_ends_at) > Date.now();

    if (accessLevel === 'pro') {
      tags.push('customer-pro', 'research-pro');
    } else if (trialActive) {
      tags.push('trial-7d', 'research-free');
    } else if (emailPref?.research_updates_enabled !== false) {
      tags.push('research-free');
    }

    return syncButtondownSubscriber(user.email, tags, env);
  } catch (error) {
    console.error('Error syncing complete user state:', error);
    return false;
  }
}
