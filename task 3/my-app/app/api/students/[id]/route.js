let students = [
  { id: 1, name: 'Ali', age: 21 },
  { id: 2, name: 'Leyla', age: 20 },
];

export async function GET(_, { params }) {
  const student = students.find(s => s.id == params.id);
  if (!student) return new Response('Not found', { status: 404 });
  return Response.json(student);
}

export async function PUT(req, { params }) {
  const index = students.findIndex(s => s.id == params.id);
  if (index === -1) return new Response('Not found', { status: 404 });
  const updated = await req.json();
  students[index] = { ...students[index], ...updated };
  return Response.json(students[index]);
}

export async function DELETE(_, { params }) {
  const index = students.findIndex(s => s.id == params.id);
  if (index === -1) return new Response('Not found', { status: 404 });
  const removed = students.splice(index, 1);
  return Response.json(removed[0]);
}
