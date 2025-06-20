'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Heart, Truck, Lock, CheckCircle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const product = {
  name: 'Pulse Vibe',
  price: '$79',
  images: ['/images/p2.jpg', '/images/p7.jpg', '/images/p8.jpg'],
  description:
    'Pulse Vibe is a luxurious app-controlled vibrator designed to elevate shared pleasure. Whether you’re near or far, stay connected through touch.',
  features: [
    'App-Controlled',
    'Waterproof & Whisper-Quiet',
    'Long-Distance Compatible',
    'USB Rechargeable',
    'Body-Safe Silicone',
  ],
  specifications: {
    material: 'Medical Grade Silicone',
    battery: 'USB Rechargeable (1.5h)',
    waterproof: 'Yes',
    noise: '< 40dB',
  },
  reviews: [
    {
      name: 'Alicia & Ben',
      comment: 'Absolutely loved using it together — fun and intimate!',
      rating: 5,
    },
  ],
}

const tabs = ['Description', 'Specifications', 'Reviews']

export default function ProductDetail() {
  const [liked, setLiked] = useState(false)
  const [activeTab, setActiveTab] = useState('Description')
  const [selectedImage, setSelectedImage] = useState(product.images[0])

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-20 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Image + Gallery */}
        <div className="space-y-6">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              className="object-cover object-center transition-all"
              priority
            />
            <button
              onClick={() => setLiked(!liked)}
              className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-zinc-800/80 rounded-full backdrop-blur-md hover:scale-110 transition"
            >
              <Heart
                className={`w-5 h-5 ${
                  liked ? 'text-pink-600 fill-pink-600' : 'text-gray-600'
                }`}
              />
            </button>
          </div>

          {/* Gallery thumbnails */}
          <div className="flex gap-4">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 rounded-xl overflow-hidden border-2 ${
                  selectedImage === img
                    ? 'border-pink-500'
                    : 'border-transparent'
                }`}
              >
                <Image
                  src={img}
                  alt="thumbnail"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            {product.name}
          </h1>

          <p className="text-2xl text-pink-600 font-semibold tracking-wide">
            {product.price}
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            {product.features.map((feature, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-pink-100/60 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full font-medium backdrop-blur"
              >
                <CheckCircle className="w-4 h-4" />
                {feature}
              </span>
            ))}
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 dark:border-zinc-700 mt-10">
            <div className="flex space-x-6">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 text-sm font-medium transition ${
                    activeTab === tab
                      ? 'text-pink-600 border-b-2 border-pink-600'
                      : 'text-gray-500 hover:text-gray-800 dark:hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-gray-600 dark:text-gray-300 pt-4"
          >
            {activeTab === 'Description' && (
              <p className="text-base leading-relaxed">{product.description}</p>
            )}

            {activeTab === 'Specifications' && (
              <ul className="space-y-2 text-sm">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <li key={key} className="flex justify-between">
                    <span className="capitalize">{key}</span>
                    <span className="font-semibold text-right">{value}</span>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === 'Reviews' && (
              <div className="space-y-4">
                {product.reviews.map((review, idx) => (
                  <div key={idx} className="bg-pink-50 dark:bg-zinc-800/40 p-4 rounded-lg">
                    <p className="font-semibold text-pink-700 dark:text-pink-300">
                      {review.name}
                    </p>
                    <p className="text-sm mt-1">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-pink-600 text-white rounded-full font-semibold shadow-lg hover:bg-pink-700 transition">
              Add to Cart
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 border border-pink-600 text-pink-600 rounded-full font-semibold hover:bg-pink-50 dark:hover:bg-pink-950 transition">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
