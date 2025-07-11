import { NextResponse } from 'next/server';
import prisma, { hashPassword, generateToken } from '@/lib/auth';

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ error: 'Bütün xanaları doldurun.' }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { username } });
    if (existingUser) {
      return NextResponse.json({ error: 'Bu ad ilə ilə artıq qeydiyyat olunub.' }, { status: 409 });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    const token = generateToken(newUser);

    return NextResponse.json({ message: 'Qeydiyyat uğurla tamamlandı.', token }, { status: 201 });
  } catch (error) {
    console.error('Register error:', error);
    return NextResponse.json({ error: error.message || 'Server xətası.' }, { status: 500 });
  }
}
