const suara = [
  {
    kutipan:
      'Yang bikin kami akhirnya jadi pesan itu bagian kemasannya. Sampai di rumah cuma kotak cokelat biasa — ibu saya kira paket alat dapur.',
    nama: 'R. & A.',
    ket: 'Bandung, pesanan pertama',
  },
  {
    kutipan:
      'Kami mulai dari yang paling sederhana sesuai saran di halaman ini, bukan dari yang paling mahal. Ternyata itu keputusan yang tepat.',
    nama: 'D. & N.',
    ket: 'Surabaya, pelanggan berulang',
  },
  {
    kutipan:
      'Sempat salah paham soal tahan percik dan tahan air. Saya tanya lewat chat, dijawab orang beneran, dan tidak dijawab dengan tawaran barang lain.',
    nama: 'S.',
    ket: 'Jakarta',
  },
]

export default function TestimonialsCarousel() {
  return (
    <section id="suara" className="relative overflow-hidden bg-void py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl">
          <p className="micro mb-5 text-neon">Catatan Pembeli</p>
          <h2 className="text-[2rem] leading-[1.1] md:text-[2.7rem]">
            Yang paling sering disebut bukan barangnya
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {suara.map((s) => (
            <figure key={s.nama} className="flex flex-col border border-chalk/10 bg-void-2 p-7">
              <span aria-hidden="true" className="redact mb-6 block h-2.5 w-10 text-neon" />
              <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-chalk/90">
                {s.kutipan}
              </blockquote>
              <figcaption className="mt-7 border-t border-chalk/10 pt-5">
                <span className="block text-sm font-bold text-chalk">{s.nama}</span>
                <span className="micro mt-1.5 block text-ash/55">{s.ket}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="micro mt-8 leading-[1.7] text-ash/45">
          Nama disingkat atas permintaan. Kutipan di atas adalah ilustrasi untuk purwarupa desain.
        </p>
      </div>
    </section>
  )
}
