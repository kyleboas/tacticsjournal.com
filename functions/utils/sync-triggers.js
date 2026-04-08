import {
  syncUserWithTrialStart,
  syncUserWithTrialEnd,
  syncUserWithPurchase,
  syncResearchAccessLevel,
  syncOpinionNewsletterSignup,
  syncGeneralResearchSignup,
  syncUserCompleteState,
} from './buttondown.js';

export async function onTrialStart(email, env) {
  console.log(`Syncing trial start for ${email}`);
  return syncUserWithTrialStart(email, env);
}

export async function onTrialEnd(email, env) {
  console.log(`Syncing trial end for ${email}`);
  return syncUserWithTrialEnd(email, env);
}

export async function onPurchaseComplete(email, plan, env) {
  console.log(`Syncing purchase for ${email}, plan: ${plan}`);
  return syncUserWithPurchase(email, plan, env);
}

export async function onResearchAccessChange(email, accessLevel, env) {
  console.log(`Syncing research access change for ${email}: ${accessLevel}`);
  return syncResearchAccessLevel(email, accessLevel, env);
}

export async function onOpinionNewsletterSignup(email, env) {
  console.log(`Syncing opinion newsletter signup for ${email}`);
  return syncOpinionNewsletterSignup(email, env);
}

export async function onGeneralResearchSignup(email, env) {
  console.log(`Syncing general research signup for ${email}`);
  return syncGeneralResearchSignup(email, env);
}

export async function onUserStateChanged(user, db, env) {
  console.log(`Syncing complete state change for user ${user.id} (${user.email})`);
  return syncUserCompleteState(user, db, env);
}

export async function batchSyncUsers(users, db, env) {
  const results = [];
  for (const user of users) {
    try {
      results.push(await syncUserCompleteState(user, db, env));
      await new Promise((resolve) => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`Error syncing user ${user.email}:`, error);
      results.push(false);
    }
  }
  return results;
}
