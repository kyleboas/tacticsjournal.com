export async function hashToken(token) {
    const textEncoder = new TextEncoder();
    const data = textEncoder.encode(token);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedPassword = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashedPassword;
}

export function generateToken() {
    return crypto.randomUUID();
}
