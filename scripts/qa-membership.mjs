const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:8788';
const INTERNAL_JOB_KEY = process.env.INTERNAL_JOB_KEY || '';

async function request(path, options = {}) {
  const url = `${BASE_URL}${path}`;
  const res = await fetch(url, options);
  const text = await res.text();
  return { url, status: res.status, text };
}

function expectStatus(name, result, expected) {
  const ok = Array.isArray(expected) ? expected.includes(result.status) : result.status === expected;
  if (!ok) {
    throw new Error(`${name} failed: expected ${JSON.stringify(expected)} got ${result.status} (${result.url})\n${result.text.slice(0, 300)}`);
  }
  console.log(`PASS ${name} -> ${result.status}`);
}

async function main() {
  console.log(`Running membership QA checks against ${BASE_URL}`);

  // Public session endpoint should always be reachable.
  const session = await request('/api/account/session');
  expectStatus('GET /api/account/session', session, 200);

  // Unauthenticated preference update should be unauthorized.
  const unauthPrefs = await request('/api/account/preferences', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ theme: 'dark' }),
  });
  expectStatus('POST /api/account/preferences (unauth)', unauthPrefs, 401);

  const unauthEmailPrefs = await request('/api/account/email-preferences', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ newsletter_enabled: true }),
  });
  expectStatus('POST /api/account/email-preferences (unauth)', unauthEmailPrefs, 401);

  // Signout should still return success without session cookie.
  const signout = await request('/api/account/signout', { method: 'POST' });
  expectStatus('POST /api/account/signout', signout, 200);

  // Internal jobs should reject without auth.
  const unauthTrialExpiry = await request('/api/internal/trial-expiry', { method: 'POST' });
  expectStatus('POST /api/internal/trial-expiry (no auth)', unauthTrialExpiry, 401);

  const unauthReconcile = await request('/api/internal/reconcile-gumroad', { method: 'POST' });
  expectStatus('POST /api/internal/reconcile-gumroad (no auth)', unauthReconcile, 401);

  // Optional authenticated internal checks when key is provided.
  if (INTERNAL_JOB_KEY) {
    const headers = { Authorization: `Bearer ${INTERNAL_JOB_KEY}` };

    const authedTrialExpiry = await request('/api/internal/trial-expiry', {
      method: 'POST',
      headers,
    });
    expectStatus('POST /api/internal/trial-expiry (auth)', authedTrialExpiry, 200);

    const authedReconcile = await request('/api/internal/reconcile-gumroad', {
      method: 'POST',
      headers,
    });
    expectStatus('POST /api/internal/reconcile-gumroad (auth)', authedReconcile, 200);
  } else {
    console.log('SKIP authenticated internal checks (set INTERNAL_JOB_KEY to enable).');
  }

  // Public research page must load.
  const researchAbout = await request('/research/about/');
  expectStatus('GET /research/about/', researchAbout, 200);

  console.log('Membership QA checks complete.');
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
