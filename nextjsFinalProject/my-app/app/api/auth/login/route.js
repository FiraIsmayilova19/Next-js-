import { NextResponse } from 'next/server';
import prisma, { verifyPassword, generateToken } from '@/lib/auth';

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ error: 'username və şifrə tələb olunur.' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { username } });

    if (!user) {
      return NextResponse.json({ error: 'username və ya şifrə yanlışdır.' }, { status: 401 });
    }

    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
      return NextResponse.json({ error: 'username və ya şifrə yanlışdır.' }, { status: 401 });
    }

    const token = generateToken(user);

    const response = NextResponse.json(
      { message: 'Uğurla daxil oldunuz.', token, user },
      { status: 200 }
    );

    response.cookies.set('token', token, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60,
    });
    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: error.message || 'Server xətası.' }, { status: 500 });
  }
}
