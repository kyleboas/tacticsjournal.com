const ALLOWED_ORIGIN = 'https://tacticsjournal.com';
const BD_API = 'https://api.buttondown.com/v1';

function corsHeaders(origin) {
  const allowed = origin === ALLOWED_ORIGIN || origin === 'http://localhost:4000';
  return {
    'Access-Control-Allow-Origin': allowed ? origin : ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405, origin);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: 'Invalid JSON' }, 400, origin);
    }

    const email = (body.email || '').trim().toLowerCase();
    const tags = Array.isArray(body.tags) ? body.tags.filter(Boolean) : [];

    if (!email || !tags.length) {
      return json({ error: 'Missing email or tags' }, 400, origin);
    }

    const apiKey = env.BUTTONDOWN_API_KEY;
    if (!apiKey) {
      return json({ error: 'Server misconfiguration' }, 500, origin);
    }

    // Look up subscriber by email
    const lookupRes = await fetch(
      `${BD_API}/subscribers/${encodeURIComponent(email)}`,
      { headers: { Authorization: `Token ${apiKey}` } }
    );

    // 404 means subscriber doesn't exist - create them
    if (lookupRes.status === 404) {
      const createRes = await fetch(`${BD_API}/subscribers`, {
        method: 'POST',
        headers: {
          Authorization: `Token ${apiKey}`,
          'Content-Type': 'application/json',
          'X-Buttondown-Bypass-Firewall': 'true',
        },
        body: JSON.stringify({ email_address: email, tags: tags }),
      });

      if (!createRes.ok) {
        const errText = await createRes.text();
        console.error('Create failed:', createRes.status, errText);
        return json({ error: 'Failed to create subscriber' }, 502, origin);
      }
      return json({ status: 'created' }, 200, origin);
    }

    if (!lookupRes.ok) {
      return json({ error: 'Upstream error' }, 502, origin);
    }

    // Existing subscriber
    const subscriber = await lookupRes.json();

    // If subscriber hasn't verified their email, resend the verification email
    if (subscriber.type === 'unactivated') {
      await fetch(`${BD_API}/subscribers/${subscriber.id}/send-reminder`, {
        method: 'POST',
        headers: { Authorization: `Token ${apiKey}` },
      });
      return json({ status: 'verification_resent' }, 200, origin);
    }

    const existing = subscriber.tags || [];
    const hasAllTags = tags.every(t => existing.includes(t));

    if (hasAllTags) {
      return json({ status: 'already_subscribed' }, 200, origin);
    }

    const merged = [...new Set([...existing, ...tags])];
    const patchRes = await fetch(`${BD_API}/subscribers/${subscriber.id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Token ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tags: merged }),
    });

    if (!patchRes.ok) {
      return json({ error: 'Failed to update subscriber' }, 502, origin);
    }
    return json({ status: 'updated' }, 200, origin);
  },
};