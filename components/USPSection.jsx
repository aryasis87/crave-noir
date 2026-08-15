'use client'

import {
  HeartHandshake,
  ShieldCheck,
  PackageCheck,
  MessageCircleHeart,
} from 'lucide-react'

const usps = [
  {
    title: 'Discreet & Secure',
    icon: ShieldCheck,
    description:
      'Orders arrive in plain packaging with anonymous billing. Privacy is guaranteed.',
  },
  {
    title: 'Couples-First Philosophy',
    icon: HeartHandshake,
    description:
      'Each product is carefully curated to enhance emotional and physical connection.',
  },
  {
    title: 'Trusted Quality',
    icon: PackageCheck,
    description:
      'Elegant designs, body-safe materials, and technology you can rely on.',
  },
  {
    title: 'Real Human Support',
    icon: MessageCircleHeart,
    description:
      'Talk to real intimacy experts — no bots, no judgment. Just support.',
  },
]

export default function USPSection() {
  return (
    <section className="relative isolate overflow-hidden py-24 px-6 md:px-12 bg-[#FFF8F9] dark:bg-void">
      {/* Decorative Blurred Circles */}
      <div className="absolute -top-32 left-0 w-[600px] h-[600px] bg-neon/25/20 dark:bg-neon/50/10 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neon/15/30 dark:bg-neon/50/10 rounded-full blur-2xl opacity-40 -z-10" />

      {/* Content */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-chalk dark:text-chalk leading-tight">
            Why Couples Trust Positive Crave
          </h2>
          <p className="mt-4 text-lg text-ash dark:text-ash">
            Designed for connection, built on trust. Experience intimacy redefined.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-6 bg-void-2/70 dark:bg-void-2/70 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all border border-neon/25 dark:border-chalk/12"
            >
              <div className="mb-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neon/15 dark:bg-neon/50/30">
                  <usp.icon className="w-6 h-6 text-neon dark:text-neon" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-chalk dark:text-chalk mb-2 group-hover:text-neon transition">
                {usp.title}
              </h3>
              <p className="text-sm text-ash dark:text-ash leading-relaxed">
                {usp.description}
              </p>

              {/* Decorative Glow on hover */}
              <div className="absolute -inset-1 rounded-3xl bg-neon/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
