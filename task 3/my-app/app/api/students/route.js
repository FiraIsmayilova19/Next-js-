let students = [
  { id: 1, name: 'Fira', age: 21 },
  { id: 2, name: 'Feride', age: 20 },
];


export async function GET() {
  return Response.json(students);
}

export async function POST(req) {
  const body = await req.json();
  const newStudent = { id: Date.now(), ...body };
  students.push(newStudent);
  return Response.json(newStudent, { status: 201 });
}
