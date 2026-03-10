import { createHash, randomBytes } from 'crypto';

const SESSION_SECRET = process.env.SESSION_SECRET || 'fallback-secret-key';
const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000;

export function hashPassword(password: string, secret: string = SESSION_SECRET): string {
  return createHash('sha256')
    .update(password + secret)
    .digest('hex');
}

export function verifyPassword(inputPassword: string): boolean {
  // ⚠️ IMPORTANT: Lire depuis process.env à chaque vérification (pas de cache)
  const adminPassword = process.env.ADMIN_PASSWORD || '';
  const sessionSecret = process.env.SESSION_SECRET || 'fallback-secret-key';
  
  if (!adminPassword) {
    console.error('[AUTH ERROR] ADMIN_PASSWORD not set in environment!');
    return false;
  }
  
  const hashedInput = hashPassword(inputPassword, sessionSecret);
  const hashedAdmin = hashPassword(adminPassword, sessionSecret);
  return hashedInput === hashedAdmin;
}

export function createSession(username: string = 'admin'): string {
  const sessionData = {
    username,
    createdAt: Date.now(),
    expiresAt: Date.now() + SESSION_DURATION,
    token: randomBytes(32).toString('hex'),
  };
  
  const sessionString = JSON.stringify(sessionData);
  const signature = createHash('sha256')
    .update(sessionString + SESSION_SECRET)
    .digest('hex');
  
  return Buffer.from(JSON.stringify({ ...sessionData, signature })).toString('base64');
}

export function verifySession(sessionCookie: string): boolean {
  try {
    const sessionData = JSON.parse(Buffer.from(sessionCookie, 'base64').toString('utf-8'));
    
    if (sessionData.expiresAt < Date.now()) {
      return false;
    }
    
    const { signature, ...dataToVerify } = sessionData;
    const expectedSignature = createHash('sha256')
      .update(JSON.stringify(dataToVerify) + SESSION_SECRET)
      .digest('hex');
    
    return signature === expectedSignature;
  } catch (error) {
    return false;
  }
}

export function getSessionData(sessionCookie: string): { username: string; expiresAt: number } | null {
  try {
    const sessionData = JSON.parse(Buffer.from(sessionCookie, 'base64').toString('utf-8'));
    
    if (sessionData.expiresAt < Date.now()) {
      return null;
    }
    
    return {
      username: sessionData.username,
      expiresAt: sessionData.expiresAt,
    };
  } catch (error) {
    return null;
  }
}
