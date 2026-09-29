import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { PRODUK } from '@/lib/katalog'

export default function FeaturedProducts() {
  const unggulan = PRODUK.filter((p) => p.unggulan)

  return (
    <section id="produk" className="relative overflow-hidden bg-void-2 py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="micro mb-5 text-neon">Paling sering dipesan</p>
            <h2 className="text-[2rem] leading-[1.1] md:text-[2.7rem]">Tiga yang paling aman dicoba lebih dulu</h2>
          </div>
          <Link href="/koleksi" className="micro shrink-0 border-b border-neon/50 pb-1 text-neon transition-colors hover:border-neon">
            Lihat semua
          </Link>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {unggulan.map((p) => (
            <li key={p.slug}><ProductCard p={p} sizes="(min-width: 768px) 33vw, 100vw" /></li>
          ))}
        </ul>

        <p className="micro mt-8 leading-[1.7] text-ash">
          Harga dan nama barang di atas adalah contoh untuk keperluan purwarupa desain.
        </p>
      </div>
    </section>
  )
}
