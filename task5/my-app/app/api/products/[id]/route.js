import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
  const product = await prisma.product.findUnique({ where: { id: Number(params.id) } })
  return NextResponse.json(product)
}

export async function PUT(req, { params }) {
  const data = await req.json()
  const product = await prisma.product.update({ where: { id: Number(params.id) }, data })
  return NextResponse.json(product)
}

export async function DELETE(_, { params }) {
  await prisma.product.delete({ where: { id: Number(params.id) } })
  return NextResponse.json({ message: 'Deleted' })
}
