function toHex(buffer) {
  return [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function createCsrfToken(sessionId, userId) {
  const payload = `${sessionId || ''}:${userId || ''}`;
  const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(payload));
  return toHex(hash);
}

export function safeEqual(a = '', b = '') {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export async function validateCsrf(request, auth) {
  const provided = request.headers.get('X-CSRF-Token') || '';
  if (!provided) return false;

  const expected = await createCsrfToken(auth.sessionId, auth.userId);
  return safeEqual(provided, expected);
}
