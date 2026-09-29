'use client'

import { useEffect, useState } from 'react'
import { PRODUK, SITUASI } from '@/lib/katalog'
import ProductCard from '@/components/ProductCard'

/* Penyaring koleksi. Pilihan tercermin di hash URL (/koleksi#jarak) supaya
   kategori di beranda bisa menautkan langsung ke saringan tertentu. */
export default function Koleksi() {
  const [pilih, setPilih] = useState('semua')

  useEffect(() => {
    const baca = () => {
      const h = window.location.hash.slice(1)
      setPilih(SITUASI.some((s) => s.id === h) ? h : 'semua')
    }
    baca()
    window.addEventListener('hashchange', baca)
    return () => window.removeEventListener('hashchange', baca)
  }, [])

  const atur = (id) => {
    setPilih(id)
    history.replaceState(null, '', id === 'semua' ? window.location.pathname : `#${id}`)
  }

  const tampil = pilih === 'semua' ? PRODUK : PRODUK.filter((p) => p.situasi === pilih)
  const opsi = [{ id: 'semua', label: 'Semua' }, ...SITUASI]

  return (
    <>
      <div className="-mx-6 overflow-x-auto px-6 pb-1 [scrollbar-width:none]" role="group" aria-label="Saring berdasarkan situasi">
        <div className="flex w-max gap-0 border border-chalk/12">
          {opsi.map((o) => {
            const aktif = pilih === o.id
            const jumlah = o.id === 'semua' ? PRODUK.length : PRODUK.filter((p) => p.situasi === o.id).length
            return (
              <button
                key={o.id}
                type="button"
                onClick={() => atur(o.id)}
                aria-pressed={aktif}
                className={`micro flex min-h-11 items-center gap-2.5 border-r border-chalk/12 px-5 transition-colors last:border-r-0 ${
                  aktif ? 'bg-neon text-void' : 'text-ash hover:bg-void-2 hover:text-chalk'
                }`}
              >
                {o.label}
                <span className={aktif ? 'text-void' : 'text-ash'}>{String(jumlah).padStart(2, '0')}</span>
              </button>
            )
          })}
        </div>
      </div>

      {pilih !== 'semua' && (
        <p className="mt-6 text-sm text-ash">{SITUASI.find((s) => s.id === pilih)?.desc}</p>
      )}

      <p className="sr-only" aria-live="polite">
        Menampilkan {tampil.length} produk
      </p>

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
        {tampil.map((p) => (
          <li key={p.slug}>
            <ProductCard p={p} />
          </li>
        ))}
      </ul>
    </>
  )
}
