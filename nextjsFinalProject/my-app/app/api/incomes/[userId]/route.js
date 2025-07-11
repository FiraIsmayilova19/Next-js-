export async function GET(request, { params }) {
  const { userId } = params;
  if (!userId) {
    return new Response(JSON.stringify({ error: 'userId tələb olunur' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const userIdInt = parseInt(userId);
  if (isNaN(userIdInt)) {
    return new Response(JSON.stringify({ error: 'userId integer olmalıdır' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const incomes = await prisma.income.findMany({
    where: { userId: userIdInt },
    orderBy: { date: 'asc' },
  });

  return new Response(JSON.stringify(incomes), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
