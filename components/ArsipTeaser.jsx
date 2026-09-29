import Link from 'next/link'
import { ARSIP } from '@/lib/arsip'

export default function ArsipTeaser() {
  return (
    <section id="arsip" className="relative overflow-hidden border-t border-chalk/10 bg-void py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="micro mb-5 flex items-center gap-3 text-neon">
              Arsip
              <span aria-hidden="true" className="redact h-2.5 w-8 text-chalk/25" />
            </p>
            <h2 className="text-[2rem] leading-[1.1] md:text-[2.7rem]">Dibaca dulu, baru dipesan</h2>
          </div>
          <Link href="/jurnal" className="micro shrink-0 border-b border-neon/50 pb-1 text-neon transition-colors hover:border-neon">
            Semua berkas
          </Link>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {ARSIP.map((a) => (
            <li key={a.slug} className="group relative flex flex-col border border-chalk/10 bg-void-2 p-7 transition-colors hover:border-neon/40">
              <p className="micro flex items-center justify-between text-ash">
                <span>Berkas No. {a.no}</span>
                <span className="text-neon">{a.topik}</span>
              </p>
              <h3 className="mt-8 text-xl leading-[1.2] font-bold text-chalk">
                <Link href={`/jurnal/${a.slug}`} className="after:absolute after:inset-0">{a.judul}</Link>
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ash">{a.ringkas}</p>
              <p className="micro mt-7 border-t border-chalk/10 pt-5 text-ash">{a.menit} menit baca</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
