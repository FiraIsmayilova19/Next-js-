import prisma from '@/lib/prisma'

export const revalidate = 60

export default async function LatestProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5
  })

  return (
    <div style={{ padding: '20px' }}>
      <h2>Son Məhsullar</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <strong>{p.name}</strong> - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  )
}
