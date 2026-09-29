import Image from 'next/image'
import Link from 'next/link'
import { rupiah } from '@/lib/katalog'

/* Kartu produk Noir: foto duotone hitam–neon (warna asli muncul saat disorot),
   pita tingkat di pojok, dan baris "data kotak" — ciri khas varian ini. */
export default function ProductCard({ p, sizes = '(min-width: 1024px) 33vw, 50vw' }) {
  return (
    <article className="group relative flex h-full flex-col border border-chalk/10 bg-void transition-colors hover:border-neon/40">
      <div className="duo relative aspect-square overflow-hidden">
        <Image
          src={p.image}
          alt={p.nama}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="micro absolute top-3 left-3 z-10 sm:top-4 sm:left-4 bg-void/85 px-3 py-1.5 text-neon backdrop-blur-sm">
          {p.tingkat}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h3 className="text-base font-bold text-chalk sm:text-lg">
          <Link href={`/produk/${p.slug}`} className="after:absolute after:inset-0">
            {p.nama}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-ash sm:mt-2.5 sm:line-clamp-none sm:text-sm">{p.ringkas}</p>

        <p className="micro mt-5 hidden items-center gap-2.5 text-ash sm:flex">
          <span aria-hidden="true" className="h-2.5 w-5 bg-kraft" />
          Kotak {p.kotak.ukuran}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-chalk/10 pt-4 sm:mt-5 sm:pt-5">
          <span className="text-sm font-bold text-chalk sm:text-base">{rupiah(p.harga)}</span>
          <span aria-hidden="true" className="micro hidden text-neon transition-colors group-hover:text-chalk sm:inline">
            Rincian →
          </span>
        </div>
      </div>
    </article>
  )
}
