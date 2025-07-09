import prisma from '@/lib/prisma'
import Link from 'next/link'

export default async function ProductsPage() {
  const products = await prisma.product.findMany()

  return (
    <div style={{ padding: '20px' }}>
      <h1>Bütün Məhsullar</h1>
      <ul>
        {products.map(p => (
          <li key={p.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
            <strong>{p.name}</strong> - ${p.price}
            <br />
            <Link href={`/products/${p.id}`}>Daha çox</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
