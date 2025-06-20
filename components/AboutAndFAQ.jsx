'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

const faqs = [
  {
    question: 'Apakah pengiriman bersifat rahasia?',
    answer:
      'Ya. Kami selalu mengirim dalam kemasan polos tanpa label produk. Tidak ada yang tahu isi paket Anda kecuali Anda.',
  },
  {
    question: 'Bagaimana cara memilih produk yang cocok untuk pasangan kami?',
    answer:
      'Kami menyediakan panduan interaktif, kuis kecocokan, dan kurasi khusus seperti "For Couples", "Beginner Kits", dan lainnya.',
  },
  {
    question: 'Apakah produk aman digunakan?',
    answer:
      'Produk kami dibuat dari material medical-grade, hypoallergenic, dan bebas BPA. Kami hanya memilih merek terpercaya yang lolos uji kualitas.',
  },
  {
    question: 'Apakah tersedia opsi pembayaran aman?',
    answer:
      'Semua transaksi diamankan dengan SSL 256-bit. Kami mendukung kartu kredit, e-wallet, dan transfer bank dengan privasi penuh.',
  },
]

export default function AboutAndFAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = index => setOpenIndex(openIndex === index ? null : index)

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 py-24 space-y-28 text-gray-800 dark:text-gray-100">
      {/* About Section */}
      <div className="grid md:grid-cols-2 items-center gap-14">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Redefining Intimacy with Elegance & Trust
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Positive Crave exists to empower married couples through products
            that inspire play, connection, and confidence — all with zero shame.
            Our curated experiences are designed with sensuality, safety, and
            sophistication in mind.
          </p>
          <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300">
            <li>✓ Discreet global shipping</li>
            <li>✓ Inclusive & body-positive experiences</li>
            <li>✓ Curated for connection, not just pleasure</li>
          </ul>
        </div>

        <div className="relative">
          <img
            src="/images/p16.jpeg"
            alt="Couples intimacy"
            className="rounded-3xl shadow-2xl border border-zinc-100 dark:border-zinc-800"
          />
          <div className="absolute -bottom-5 -left-5 bg-pink-500 text-white px-5 py-2 text-sm rounded-full shadow-lg">
            For All Kinds of Love
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h3>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Jawaban atas pertanyaan yang paling sering ditanyakan pelanggan kami.
          </p>
        </div>

        <div className="space-y-5 max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-zinc-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900/60 backdrop-blur-md overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full justify-between items-center px-6 py-5 text-left text-lg font-medium text-gray-800 dark:text-white hover:bg-pink-50 dark:hover:bg-zinc-800 transition"
              >
                <span>{faq.question}</span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 shrink-0 text-pink-500" />
                ) : (
                  <Plus className="w-5 h-5 shrink-0 text-pink-500" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-zinc-200 dark:border-zinc-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
