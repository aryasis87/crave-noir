import ProductDetailPage from '@/components/ProductDetailPage'

export const metadata = {
  title: 'Produk Pilihan — Positive Crave',
  description:
    'Rincian produk Positive Crave: material medical-grade bebas BPA, dikirim dalam kemasan polos tanpa merek.',
  alternates: { canonical: 'https://crave-noir.pintuweb.com/produk' },
}

export default function ProdukRoute() {
  return <ProductDetailPage />
}
