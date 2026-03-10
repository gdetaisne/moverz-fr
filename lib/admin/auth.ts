const SESSION_SECRET = process.env.SESSION_SECRET || 'fallback-secret-key';
const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000;

// Use Web Crypto API (Edge Runtime compatible) instead of Node.js crypto
async function sha256(text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function hashPassword(password: string, secret: string = SESSION_SECRET): Promise<string> {
  return sha256(password + secret);
}

export async function verifyPassword(inputPassword: string): Promise<boolean> {
  // ⚠️ IMPORTANT: Lire depuis process.env à chaque vérification (pas de cache)
  const adminPassword = process.env.ADMIN_PASSWORD || '';
  const sessionSecret = process.env.SESSION_SECRET || 'fallback-secret-key';
  
  if (!adminPassword) {
    console.error('[AUTH ERROR] ADMIN_PASSWORD not set in environment!');
    return false;
  }
  
  const hashedInput = await hashPassword(inputPassword, sessionSecret);
  const hashedAdmin = await hashPassword(adminPassword, sessionSecret);
  return hashedInput === hashedAdmin;
}

function randomHex(length: number): string {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array).map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function createSession(username: string = 'admin'): Promise<string> {
  const sessionData = {
    username,
    createdAt: Date.now(),
    expiresAt: Date.now() + SESSION_DURATION,
    token: randomHex(32),
  };
  
  const sessionString = JSON.stringify(sessionData);
  const signature = await sha256(sessionString + SESSION_SECRET);
  
  const encoder = new TextEncoder();
  const data = encoder.encode(JSON.stringify({ ...sessionData, signature }));
  return btoa(String.fromCharCode(...data));
}

export async function verifySession(sessionCookie: string): Promise<boolean> {
  try {
    const binaryString = atob(sessionCookie);
    const bytes = Uint8Array.from(binaryString, c => c.charCodeAt(0));
    const decoder = new TextDecoder();
    const sessionData = JSON.parse(decoder.decode(bytes));
    
    console.log('[VERIFY SESSION] Parsed session data:', { 
      username: sessionData.username, 
      expiresAt: sessionData.expiresAt,
      hasSignature: !!sessionData.signature 
    });
    
    if (sessionData.expiresAt < Date.now()) {
      console.log('[VERIFY SESSION] ❌ Session expired');
      return false;
    }
    
    const sessionSecret = process.env.SESSION_SECRET || 'fallback-secret-key';
    console.log('[VERIFY SESSION] Using SESSION_SECRET:', sessionSecret ? 'SET' : 'NOT SET');
    
    const { signature, ...dataToVerify } = sessionData;
    const expectedSignature = await sha256(JSON.stringify(dataToVerify) + sessionSecret);
    
    console.log('[VERIFY SESSION] Signature received:', signature?.substring(0, 20) + '...');
    console.log('[VERIFY SESSION] Signature expected:', expectedSignature.substring(0, 20) + '...');
    console.log('[VERIFY SESSION] Signatures match:', signature === expectedSignature);
    
    return signature === expectedSignature;
  } catch (error) {
    console.error('[VERIFY SESSION] ❌ Exception:', error);
    return false;
  }
}

export function getSessionData(sessionCookie: string): { username: string; expiresAt: number } | null {
  try {
    const binaryString = atob(sessionCookie);
    const bytes = Uint8Array.from(binaryString, c => c.charCodeAt(0));
    const decoder = new TextDecoder();
    const sessionData = JSON.parse(decoder.decode(bytes));
    
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
