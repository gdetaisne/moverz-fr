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

    if (!verifyPassword(password)) {
      return NextResponse.json(
        { error: 'Mot de passe incorrect', debug: { 
          hasEnvPassword: !!adminPasswordEnv,
          envPasswordValue: adminPasswordEnv,
          receivedPassword: password
        }},
        { status: 401 }
      );
    }

    const sessionToken = createSession();
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

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
