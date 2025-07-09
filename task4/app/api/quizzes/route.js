import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const quizzes = await prisma.quiz.findMany({
    include: { questions: true }
  })
  return NextResponse.json(quizzes)
}

export async function POST(req) {
  const body = await req.json()

  const quiz = await prisma.quiz.create({
    data: {
      title: body.title,
      questions: {
        create: body.questions.map(q => ({
          question: q.question,
          options: JSON.stringify(q.options), 
          answer: q.answer
        }))
      }
    },
    include: { questions: true }
  })

  return NextResponse.json(quiz)
}
