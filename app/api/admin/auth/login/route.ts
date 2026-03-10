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

    if (!verifyPassword(password)) {
      return NextResponse.json(
        { error: 'Mot de passe incorrect' },
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
