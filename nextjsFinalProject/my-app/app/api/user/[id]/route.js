import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request, { params }) {
  const userId = parseInt(params.id);
  if (isNaN(userId)) {
    return NextResponse.json({ error: 'Yanlış userId' }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { username: true }
  });

  if (!user) {
    return NextResponse.json({ error: 'İstifadəçi tapılmadı' }, { status: 404 });
  }

  return NextResponse.json(user);
}
