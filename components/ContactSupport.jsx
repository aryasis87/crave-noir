import Link from 'next/link'

const saluran = [
  {
    label: 'Chat',
    nilai: 'Setiap hari 10.00–22.00 WIB',
    ket: 'Dijawab orang, bukan bot. Rata-rata dibalas di bawah 10 menit.',
  },
  {
    label: 'Surel',
    nilai: 'halo@positivecrave.id',
    href: 'mailto:halo@positivecrave.id',
    ket: 'Untuk pertanyaan panjang atau klaim garansi.',
  },
  {
    label: 'Telepon',
    nilai: '+62 812 3456 7890',
    href: 'tel:+628123456789',
    ket: 'Sen–Jum 09.00–17.00 WIB.',
  },
]

export default function ContactSupport() {
  return (
    <section id="kontak" className="relative overflow-hidden bg-void py-20 md:py-28">
      <div aria-hidden="true" className="dim-glow absolute inset-x-0 bottom-0 h-72" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="micro mb-5 text-neon">Bantuan</p>
            <h2 className="text-[2rem] leading-[1.1] md:text-[2.7rem]">
              Tanya dulu tidak apa-apa
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ash">
              Tidak ada pertanyaan yang kami anggap terlalu dasar, dan tidak ada jawaban yang
              berujung tawaran barang. Kalau memang belum perlu membeli, akan kami bilang begitu.
            </p>

            <Link
              href="/produk"
              className="mt-9 inline-flex items-center justify-center bg-neon px-8 py-4 text-sm font-bold text-void transition-colors duration-300 hover:bg-chalk"
            >
              Lihat Koleksi
            </Link>
          </div>

          <dl className="divide-y divide-chalk/10 border-y border-chalk/10">
            {saluran.map((s) => (
              <div key={s.label} className="py-6">
                <dt className="micro text-ash/55">{s.label}</dt>
                <dd className="mt-2 text-base font-bold text-chalk">
                  {s.href ? (
                    <a href={s.href} className="break-all transition-colors hover:text-neon">
                      {s.nilai}
                    </a>
                  ) : (
                    s.nilai
                  )}
                </dd>
                <dd className="mt-1.5 text-sm leading-relaxed text-ash">{s.ket}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
