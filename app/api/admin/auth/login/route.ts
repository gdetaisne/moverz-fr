import { NextRequest, NextResponse } from 'next/server';
import { verifyPassword, createSession } from '@/lib/admin/auth';

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    if (!password) {
      return NextResponse.json(
        { error: 'Mot de passe requis' },
        { status: 400 }
      );
    }

    // DEBUG: Log pour comprendre le problème
    const adminPasswordEnv = process.env.ADMIN_PASSWORD;
    const sessionSecret = process.env.SESSION_SECRET;
    console.log('[AUTH DEBUG] ADMIN_PASSWORD from env:', adminPasswordEnv ? 'SET' : 'NOT SET');
    console.log('[AUTH DEBUG] ADMIN_PASSWORD value:', adminPasswordEnv);
    console.log('[AUTH DEBUG] SESSION_SECRET:', sessionSecret ? 'SET' : 'NOT SET');
    console.log('[AUTH DEBUG] Password received:', password);
    console.log('[AUTH DEBUG] Password length:', password.length);

    // DEBUG HASH: Voir les hashs générés
    const { hashPassword } = await import('@/lib/admin/auth');
    const secret = process.env.SESSION_SECRET || 'fallback-secret-key';
    const hashedInput = hashPassword(password, secret);
    const hashedAdmin = hashPassword(adminPasswordEnv || '', secret);
    console.log('[AUTH DEBUG] Hash input:', hashedInput);
    console.log('[AUTH DEBUG] Hash admin:', hashedAdmin);
    console.log('[AUTH DEBUG] Hashs match:', hashedInput === hashedAdmin);

    if (!verifyPassword(password)) {
      console.log('[AUTH DEBUG] ❌ VERIFICATION FAILED');
      return NextResponse.json(
        { error: 'Mot de passe incorrect', debug: { 
          hasEnvPassword: !!adminPasswordEnv,
          envPasswordValue: adminPasswordEnv,
          receivedPassword: password,
          hashMatch: hashedInput === hashedAdmin
        }},
        { status: 401 }
      );
    }

    console.log('[AUTH DEBUG] ✅ VERIFICATION PASSED - Creating session...');
    const sessionToken = createSession();
    console.log('[AUTH DEBUG] Session token created:', sessionToken.substring(0, 20) + '...');
    
    const response = NextResponse.json(
      { success: true, message: 'Connexion réussie' },
      { status: 200 }
    );

    response.cookies.set('admin_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60,
      path: '/',
    });

    console.log('[AUTH DEBUG] ✅ Cookie set, returning 200 OK');
    return response;
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
