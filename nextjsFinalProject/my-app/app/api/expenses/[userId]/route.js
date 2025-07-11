import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request, { params }) {
  const userId = parseInt(params.userId);
  if (isNaN(userId)) {
    return NextResponse.json({ error: 'Yanlış userId' }, { status: 400 });
  }

  const expenses = await prisma.expense.findMany({
    where: { userId },
    orderBy: { date: 'asc' },
  });

  return NextResponse.json(expenses);
}
