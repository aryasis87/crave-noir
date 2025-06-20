'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Lock } from 'lucide-react'

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative overflow-hidden isolate py-24 px-6 md:px-12 bg-[#1A1314] text-white"
    >
      {/* Background Shape Accent */}
      <div className="absolute -top-32 -left-40 w-[700px] h-[700px] bg-pink-800/30 rounded-full blur-3xl opacity-40 -z-10" />

      {/* Optional Soft Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1314] via-[#1A1314]/60 to-pink-900/10 z-0" />

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 max-w-7xl mx-auto">
        {/* TEXT SECTION */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white"
          >
            Explore Pleasure, <br className="hidden sm:block" /> Together.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0"
          >
            Tastefully designed intimacy essentials for couples seeking deeper connection, playful exploration, and elevated moments of love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex justify-center md:justify-start gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-6 py-3 bg-pink-600 text-white rounded-full font-semibold shadow-lg hover:bg-pink-700 transition-all"
              aria-label="Explore products for couples"
            >
              Explore Together
              <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 border-2 border-pink-600 text-pink-300 rounded-full hover:bg-pink-950 transition-all font-semibold"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Trust badges */}
          <div className="mt-6 flex justify-center md:justify-start gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-pink-500" />
              <span>Discreet Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-pink-500" />
              <span>Secure Payment</span>
            </div>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="group relative flex-1 w-full h-[340px] md:h-[450px] lg:h-[520px] rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/10 via-transparent to-transparent z-10" />
          <Image
            src="/images/p1.webp"
            alt="Romantic couple"
            fill
            className="object-cover object-center rounded-xl group-hover:scale-105 transition-transform duration-700"
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
