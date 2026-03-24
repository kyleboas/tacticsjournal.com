const ALLOWED_ORIGIN = 'https://tacticsjournal.com';
const BD_API = 'https://api.buttondown.email/v1';

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
      `${BD_API}/subscribers?email=${encodeURIComponent(email)}`,
      { headers: { Authorization: `Token ${apiKey}` } }
    );

    if (!lookupRes.ok) {
      return json({ error: 'Upstream error' }, 502, origin);
    }

    const lookupData = await lookupRes.json();

    if (lookupData.count > 0) {
      // Existing subscriber — merge tags without removing any
      const subscriber = lookupData.results[0];
      const existing = subscriber.tags || [];
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
    }

    // New subscriber — tell the client to submit the form normally
    // so Buttondown sends the confirmation email
    return json({ status: 'new' }, 200, origin);
  },
};
