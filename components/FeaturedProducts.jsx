'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowRight } from 'lucide-react'

const featuredProducts = [
  {
    id: 1,
    name: 'Intimate Vibe Pro',
    price: '$99',
    image: '/images/p12.jpeg',
    badge: 'Best Seller',
    span: 'row-span-2',
  },
  {
    id: 2,
    name: 'Couples Adventure Kit',
    price: '$149',
    image: '/images/p13.jpeg',
    badge: 'Limited Edition',
    span: '',
  },
  {
    id: 3,
    name: 'Whisper Lube Set',
    price: '$39',
    image: '/images/p14.jpeg',
    badge: 'Editor’s Pick',
    span: '',
  },
  {
    id: 4,
    name: 'Luxe Massage Oil',
    price: '$59',
    image: '/images/p15.jpeg',
    badge: 'New Arrival',
    span: 'col-span-2',
  },

]

export default function FeaturedProducts() {
  return (
    <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-chalk dark:text-chalk"
        >
          Featured For Your Pleasure
        </motion.h2>
        <p className="mt-4 text-lg text-ash dark:text-ash max-w-2xl mx-auto">
          Handpicked pleasures curated for deep connection and shared experiences.
        </p>
      </div>

      {/* Masonry-style Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(300px,_auto)] gap-8">
        {featuredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative bg-void-2 dark:bg-void-2 rounded-3xl overflow-hidden shadow-xl group hover:scale-[1.015] transition-transform duration-300 ${product.span}`}
          >
            <div className="relative w-full h-full min-h-[280px] overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 bg-neon text-chalk text-xs uppercase font-bold py-1 px-3 rounded-full shadow-sm">
                {product.badge}
              </span>
              <button className="absolute top-4 right-4 p-2 bg-void-2/80 dark:bg-void-2/80 rounded-full hover:bg-void-2 dark:hover:bg-void-2 transition">
                <Heart className="w-4 h-4 text-neon" />
              </button>
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-lg font-semibold text-chalk dark:text-chalk group-hover:text-neon transition">
                {product.name}
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-neon font-bold text-sm">
                  {product.price}
                </span>
                <button className="group flex items-center text-sm text-ash dark:text-ash hover:text-neon transition">
                  Explore
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
