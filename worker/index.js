const ALLOWED_ORIGINS = new Set([
  'https://tacticsjournal.com',
  'http://localhost:4000',
  'http://127.0.0.1:4000',
]);

const BD_API = 'https://api.buttondown.com/v1';

function corsHeaders(origin) {
  const allowedOrigin = ALLOWED_ORIGINS.has(origin) ? origin : 'https://tacticsjournal.com';
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Cache-Control': 'no-store',
    Vary: 'Origin',
  };
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: {
      ...corsHeaders(origin),
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeEmail(value) {
  return String(value || '').trim().toLowerCase();
}

function normalizeTags(payload) {
  const tags = [];
  const pushTag = (value) => {
    const tag = String(value || '').trim();
    if (tag && !tags.includes(tag)) tags.push(tag);
  };

  if (Array.isArray(payload.tags)) {
    payload.tags.forEach(pushTag);
  } else if (payload.tags) {
    pushTag(payload.tags);
  }

  if (Array.isArray(payload.tag)) {
    payload.tag.forEach(pushTag);
  } else if (payload.tag) {
    pushTag(payload.tag);
  }

  return tags;
}

function honeypotTriggered(payload) {
  return String(payload.website || payload.url || payload.company || '').trim().length > 0;
}

async function readPayload(request) {
  const contentType = request.headers.get('Content-Type') || '';

  if (contentType.includes('application/json')) {
    return await request.json();
  }

  if (
    contentType.includes('application/x-www-form-urlencoded') ||
    contentType.includes('multipart/form-data')
  ) {
    const form = await request.formData();
    const payload = {};

    for (const [key, value] of form.entries()) {
      if (key === 'tags') {
        if (!payload.tags) payload.tags = [];
        payload.tags.push(value);
        continue;
      }

      if (payload[key] === undefined) {
        payload[key] = value;
      } else if (Array.isArray(payload[key])) {
        payload[key].push(value);
      } else {
        payload[key] = [payload[key], value];
      }
    }

    return payload;
  }

  throw new Error('Unsupported content type');
}

function isAllowedRequest(request) {
  const origin = request.headers.get('Origin') || '';
  if (origin && ALLOWED_ORIGINS.has(origin)) return true;

  const referer = request.headers.get('Referer') || '';
  if (!referer) return false;

  try {
    return ALLOWED_ORIGINS.has(new URL(referer).origin);
  } catch {
    return false;
  }
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

    if (!isAllowedRequest(request)) {
      return json({ error: 'Forbidden' }, 403, origin);
    }

    const apiKey = env.BUTTONDOWN_API_KEY;
    if (!apiKey) {
      return json({ error: 'Server misconfiguration' }, 500, origin);
    }

    let payload;
    try {
      payload = await readPayload(request);
    } catch {
      return json({ error: 'Invalid submission' }, 400, origin);
    }

    if (honeypotTriggered(payload)) {
      return json({ status: 'ok' }, 200, origin);
    }

    const email = normalizeEmail(payload.email);
    const tags = normalizeTags(payload);

    if (!email || !isValidEmail(email)) {
      return json({ error: 'Invalid email' }, 400, origin);
    }

    const subscriberBody = {
      email_address: email,
    };

    if (tags.length) {
      subscriberBody.tags = tags;
    }

    const createRes = await fetch(`${BD_API}/subscribers`, {
      method: 'POST',
      headers: {
        Authorization: `Token ${apiKey}`,
        'Content-Type': 'application/json',
        'X-Buttondown-Collision-Behavior': 'add',
      },
      body: JSON.stringify(subscriberBody),
    });

    let subscriber = null;
    try {
      subscriber = await createRes.json();
    } catch {
      subscriber = null;
    }

    if ([401, 403].includes(createRes.status)) {
      return json({ error: 'Server misconfiguration' }, 502, origin);
    }

    if (!createRes.ok && ![400, 409].includes(createRes.status)) {
      return json({ error: 'Failed to process subscriber' }, 502, origin);
    }

    if (subscriber?.type === 'unactivated' && subscriber?.id) {
      const reminderRes = await fetch(`${BD_API}/subscribers/${subscriber.id}/send-reminder`, {
        method: 'POST',
        headers: { Authorization: `Token ${apiKey}` },
      });

      if (!reminderRes.ok && reminderRes.status !== 409) {
        console.warn('Buttondown reminder failed with status', reminderRes.status);
      }
    }

    return json({ status: 'ok' }, 200, origin);
  },
};
