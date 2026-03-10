import { createHash, randomBytes } from 'crypto';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';
const SESSION_SECRET = process.env.SESSION_SECRET || 'fallback-secret-key';
const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000;

export function hashPassword(password: string): string {
  return createHash('sha256')
    .update(password + SESSION_SECRET)
    .digest('hex');
}

export function verifyPassword(inputPassword: string): boolean {
  const hashedInput = hashPassword(inputPassword);
  const hashedAdmin = hashPassword(ADMIN_PASSWORD);
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
