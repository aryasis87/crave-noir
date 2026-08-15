import Link from 'next/link'

const kolom = [
  {
    judul: 'Jelajahi',
    tautan: [
      { label: 'Koleksi', href: '/#produk' },
      { label: 'Kategori', href: '/#kategori' },
      { label: 'Produk Pilihan', href: '/produk' },
    ],
  },
  {
    judul: 'Ketenangan',
    tautan: [
      { label: 'Cara Paket Dikirim', href: '/#privasi' },
      { label: 'Jaminan Mutu', href: '/#jaminan' },
      { label: 'Tanya Jawab', href: '/#tanya' },
    ],
  },
  {
    judul: 'Akun',
    tautan: [
      { label: 'Masuk', href: '/masuk' },
      { label: 'Pemesanan', href: '/checkout' },
      { label: 'Bantuan', href: '/#kontak' },
    ],
  },
]

export default function Footer() {
  const tahun = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-chalk/10 bg-void">
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,0.7fr))]">
          <div>
            <p className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-4 w-4 bg-neon" />
              <span className="text-base font-extrabold tracking-tight text-chalk">
                Positive<span className="text-neon">Crave</span>
              </span>
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ash">
              Perlengkapan keintiman untuk pasangan. Dipilih dengan selera, dikirim tanpa
              memberi tahu siapa pun.
            </p>

            <p className="micro mt-8 flex items-center gap-3 text-ash/50">
              Dikirim sebagai
              <span aria-hidden="true" className="h-3.5 w-8 bg-kraft" />
              kotak polos
            </p>
          </div>

          {kolom.map((k) => (
            <nav key={k.judul} aria-label={k.judul}>
              <h2 className="micro mb-5 text-chalk">{k.judul}</h2>
              <ul className="space-y-3">
                {k.tautan.map((t) => (
                  <li key={t.href}>
                    <Link href={t.href} className="text-sm text-ash transition-colors hover:text-neon">
                      {t.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-chalk/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="micro text-ash/45">© {tahun} Positive Crave</p>
          <p className="micro text-ash/45">Khusus dewasa 18+</p>
        </div>
      </div>
    </footer>
  )
}
