import prisma from '@/lib/prisma';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const filterDate = searchParams.get('date');

  const expenses = await prisma.expense.findMany({
    where: filterDate ? {
      date: { startsWith: filterDate }
    } : {},
    orderBy: { date: 'desc' }
  });

  return Response.json(expenses);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, amount, date, userId } = body;

    if (!title || !amount || !date || !userId) {
      return new Response(JSON.stringify({ error: 'Bütün sahələr tələb olunur.' }), { status: 400 });
    }

    const newExpense = await prisma.expense.create({
      data: {
        title,
        amount,
        date,
        user: {
          connect: { id: userId }
        }
      }
    });

    return Response.json(newExpense);
  } catch (error) {
    console.error('POST xətası:', error);
    return new Response(JSON.stringify({ error: 'Server xətası' }), { status: 500 });
  }
}
