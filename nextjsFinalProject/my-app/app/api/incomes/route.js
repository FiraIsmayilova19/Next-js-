import prisma from '@/lib/prisma';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const filterDate = searchParams.get('date');
  const userId = parseInt(req.headers.get('x-user-id'));

  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }

  const incomes = await prisma.income.findMany({
    where: {
      userId,
      ...(filterDate && {
        date: {
          startsWith: filterDate
        }
      })
    },
    orderBy: { date: 'desc' }
  });

  return Response.json(incomes);
}

export async function POST(req) {
  const body = await req.json();
  const { title, amount, date, userId } = body;

  if (!title || !amount || !date || !userId) {
    return new Response('Invalid data', { status: 400 });
  }

  const newIncome = await prisma.income.create({
    data: {
      title,
      amount,
      date,
      userId
    }
  });

  return Response.json(newIncome);
}
