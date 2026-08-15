import Link from 'next/link'

const produk = [
  {
    nama: 'Pulse Duo',
    harga: 'Rp 1.290.000',
    tingkat: 'Sedang',
    desc: 'Dua motor terpisah dengan sepuluh pola getaran. Tahan percik, bukan tahan rendam.',
    image: '/images/p5.jpg',
  },
  {
    nama: 'Silken Pelumas',
    harga: 'Rp 189.000',
    tingkat: 'Lembut',
    desc: 'Berbahan air, mudah dibilas, dan aman dipakai bersama alat berbahan silikon.',
    image: '/images/p7.jpg',
  },
  {
    nama: 'Paket Berdua',
    harga: 'Rp 1.750.000',
    tingkat: 'Lembut',
    desc: 'Minyak pijat, pelumas, dan pembersih alat — cukup untuk memulai tanpa membeli terpisah.',
    image: '/images/p8.jpg',
  },
]

export default function FeaturedProducts() {
  return (
    <section id="produk" className="relative overflow-hidden bg-void-2 py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl">
          <p className="micro mb-5 text-neon">Paling sering dipesan</p>
          <h2 className="text-[2rem] leading-[1.1] md:text-[2.7rem]">Tiga yang paling aman dicoba lebih dulu</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {produk.map((p) => (
            <article key={p.nama} className="group flex flex-col border border-chalk/10 bg-void">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.nama}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="micro absolute top-4 left-4 bg-void/85 px-3 py-1.5 text-neon backdrop-blur-sm">
                  {p.tingkat}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-chalk">{p.nama}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ash">{p.desc}</p>

                <div className="mt-6 flex items-center justify-between border-t border-chalk/10 pt-5">
                  <span className="text-base font-bold text-chalk">{p.harga}</span>
                  <Link href="/produk" className="micro text-neon transition-colors hover:text-chalk">
                    Rincian
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="micro mt-8 leading-[1.7] text-ash/45">
          Harga dan nama barang di atas adalah contoh untuk keperluan purwarupa desain.
        </p>
      </div>
    </section>
  )
}
