'use client'

import { useState } from 'react'
import Link from 'next/link'

/* Satu cangkang untuk /masuk, /register, /forgot. Nadanya sama dengan seluruh
   Noir: akun pun "tanpa label" — nama samaran boleh, dan kami jelaskan persis
   apa yang disimpan. Purwarupa: tidak ada autentikasi sungguhan. */

const MODE = {
  masuk: {
    eyebrow: 'Akun',
    judul: 'Masuk',
    lead: 'Untuk melihat status pengiriman dan riwayat pesanan. Tidak ada nama merek di surel maupun notifikasi yang kami kirim.',
    tombol: 'Masuk',
    medan: [
      { name: 'surel', label: 'Surel', type: 'email', auto: 'email' },
      { name: 'sandi', label: 'Kata sandi', type: 'password', auto: 'current-password' },
    ],
    selesai: 'Di toko sungguhan, Anda kini sudah masuk. Ini purwarupa, jadi tidak ada akun yang diperiksa.',
  },
  daftar: {
    eyebrow: 'Akun baru',
    judul: 'Daftar tanpa nama asli',
    lead: 'Kami hanya butuh surel untuk konfirmasi pesanan. Nama yang Anda isi dipakai sebagai sapaan — boleh nama panggilan, boleh inisial.',
    tombol: 'Buat akun',
    medan: [
      { name: 'sapaan', label: 'Sapaan (boleh samaran)', type: 'text', auto: 'nickname', wajib: false },
      { name: 'surel', label: 'Surel', type: 'email', auto: 'email' },
      { name: 'sandi', label: 'Kata sandi', type: 'password', auto: 'new-password' },
    ],
    selesai: 'Di toko sungguhan, surel konfirmasi berjudul "Akun Anda aktif" — tanpa nama merek — sudah terkirim. Ini purwarupa.',
  },
  lupa: {
    eyebrow: 'Akun',
    judul: 'Lupa kata sandi',
    lead: 'Kami kirim tautan atur ulang ke surel Anda. Subjeknya: "Atur ulang kata sandi" — tidak lebih.',
    tombol: 'Kirim tautan',
    medan: [{ name: 'surel', label: 'Surel', type: 'email', auto: 'email' }],
    selesai: 'Di toko sungguhan, tautan atur ulang sudah dikirim dan berlaku 30 menit. Ini purwarupa.',
  },
}

const DISIMPAN = [
  ['Disimpan', 'Surel, alamat antar, riwayat pesanan'],
  ['Tidak disimpan', 'Nomor kartu — diproses bank, bukan kami'],
  ['Bisa dihapus', 'Seluruh riwayat, kapan saja dari akun'],
]

export default function AkunForm({ mode }) {
  const m = MODE[mode]
  const [proses, setProses] = useState(false)
  const [ok, setOk] = useState(false)

  const kirim = (e) => {
    e.preventDefault()
    setProses(true)
    setTimeout(() => {
      setProses(false)
      setOk(true)
    }, 900)
  }

  return (
    <section className="relative overflow-hidden bg-void pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="dim-glow absolute inset-x-0 top-0 h-72" />

      <div className="relative z-10 mx-auto grid max-w-5xl gap-14 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20">
        <div>
          <p className="micro mb-5 flex items-center gap-3 text-neon">
            {m.eyebrow}
            <span aria-hidden="true" className="redact h-2.5 w-8 text-chalk/25" />
          </p>
          <h1 className="text-[2.2rem] leading-[1.04] md:text-[2.9rem]">{m.judul}</h1>
          <p className="mt-5 max-w-md leading-relaxed text-ash">{m.lead}</p>

          {ok ? (
            <div role="status" className="mt-10 flex gap-4 border border-chalk/10 bg-void-2 p-6">
              <span aria-hidden="true" className="h-8 w-8 shrink-0 bg-kraft" />
              <p className="text-sm leading-relaxed text-chalk/85">{m.selesai}</p>
            </div>
          ) : (
            <form onSubmit={kirim} className="mt-10 max-w-md space-y-7">
              {m.medan.map((f) => (
                <div key={f.name}>
                  <label htmlFor={f.name} className="micro mb-3 block text-ash">
                    {f.label}
                    {f.wajib !== false && <span className="ml-1 text-neon">*</span>}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    autoComplete={f.auto}
                    required={f.wajib !== false}
                    className="w-full border-b border-chalk/25 bg-transparent pb-2 text-sm text-chalk focus:border-neon focus:outline-none"
                  />
                </div>
              ))}
              <button
                type="submit"
                disabled={proses}
                className="w-full bg-neon py-4 text-sm font-bold text-void transition-colors hover:bg-chalk disabled:opacity-70"
              >
                {proses ? 'Memproses…' : m.tombol}
              </button>
            </form>
          )}

          <div className="mt-8 flex max-w-md flex-wrap gap-x-8 gap-y-3 border-t border-chalk/10 pt-6">
            {mode !== 'masuk' && <Link href="/masuk" className="micro text-neon hover:text-chalk">Sudah punya akun — masuk</Link>}
            {mode !== 'daftar' && <Link href="/register" className="micro text-neon hover:text-chalk">Belum punya akun — daftar</Link>}
            {mode === 'masuk' && <Link href="/forgot" className="micro text-ash hover:text-chalk">Lupa kata sandi</Link>}
          </div>
          <p className="micro mt-8 max-w-md leading-[1.7] text-ash">
            Purwarupa desain — tidak ada autentikasi sungguhan dan tidak ada data yang tersimpan.
          </p>
        </div>

        <aside className="h-fit border border-chalk/10 bg-void-2">
          <p className="micro border-b border-chalk/10 px-7 py-5 text-chalk">Isi akun Anda, tanpa sensor</p>
          <dl className="divide-y divide-chalk/10">
            {DISIMPAN.map(([k, v]) => (
              <div key={k} className="px-7 py-5">
                <dt className="micro text-neon">{k}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-chalk/85">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="border-t border-chalk/10 px-7 py-5 text-sm leading-relaxed text-ash">
            Belanja tanpa akun juga bisa. Akun hanya memudahkan melacak paket.
          </p>
        </aside>
      </div>
    </section>
  )
}
