'use client'
import useSWR from 'swr'
import { useParams } from 'next/navigation'
import { fetcher } from '@/lib/fetcher'

export default function ProductDetail() {
  const { id } = useParams()
  const { data: product, error } = useSWR(`/api/products/${id}`, fetcher)

  if (error) return <div>Xəta baş verdi.</div>
  if (!product) return <div>Yüklənir...</div>

  return (
    <div style={{ padding: '20px' }}>
      <h1>{product.name}</h1>
      <p>Qiymət: ${product.price}</p>
      <p>{product.desc}</p>
    </div>
  )
}
