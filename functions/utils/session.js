import { sign, verify } from '@tsndr/cloudflare-worker-jwt';

const COOKIE_NAME = '__session';
const JWT_SECRET = 'YOUR_JWT_SECRET'; // TODO: Replace with environment variable

export async function createSession(userId, expiresAt) {
  const payload = {
    userId,
    exp: Math.floor(expiresAt / 1000), // JWT exp is in seconds
  };
  const token = await sign(payload, JWT_SECRET);
  return token;
}

export async function verifySession(token) {
  try {
    const { payload } = await verify(token, JWT_SECRET);
    return payload;
  } catch (error) {
    return null;
  }
}

export function getSessionCookie(request) {
  return request.headers.get('Cookie')?.split('; ').find(row => row.startsWith(`${COOKIE_NAME}=`))?.split('=')[1];
}

export function setSessionCookie(token, expiresAt) {
  return `${COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Lax; Secure; Expires=${new Date(expiresAt).toUTCString()}`;
}

export function clearSessionCookie() {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Secure; Expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}
