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

    const clientIP = request.headers.get('CF-Connecting-IP') || '';
    const createRes = await fetch(`${BD_API}/subscribers`, {
      method: 'POST',
      headers: {
        Authorization: `Token ${apiKey}`,
        'Content-Type': 'application/json',
        'X-Buttondown-Collision-Behavior': 'add',
      },
      body: JSON.stringify({ email_address: email, tags, ip_address: clientIP }),
    });

    if (!createRes.ok) {
      console.error('Buttondown subscriber upsert failed with status', createRes.status);
      return json({ error: 'Failed to process subscriber' }, 502, origin);
    }

    let subscriber = null;
    try {
      subscriber = await createRes.json();
    } catch {
      subscriber = null;
    }

    if (subscriber?.type === 'unactivated' && subscriber?.id) {
      const reminderRes = await fetch(`${BD_API}/subscribers/${subscriber.id}/send-reminder`, {
        method: 'POST',
        headers: { Authorization: `Token ${apiKey}` },
      });

      if (!reminderRes.ok && reminderRes.status !== 409) {
        console.error('Buttondown reminder failed with status', reminderRes.status);
      }

      return json({ status: 'verification_resent' }, 200, origin);
    }

    return json({ status: createRes.status === 201 ? 'created' : 'updated' }, 200, origin);
  },
};
