'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { useEffect } from 'react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Alyssa & Ben',
    text: 'We were hesitant at first, but Positive Crave made exploring our intimacy feel safe, fun, and even romantic.',
    image: '/images/p9.jpeg',
  },
  {
    name: 'Nadia & Rizal',
    text: 'The curated kits are amazing. It’s like a date night in a box. Subtle, elegant, and so much fun.',
    image: '/images/p10.jpeg',
  },
  {
    name: 'Luna & Marek',
    text: 'We live long-distance and the app-controlled toys brought us closer in ways we didn’t expect.',
    image: '/images/p11.jpeg',
  },
]

export default function TestimonialsCarousel() {
  useEffect(() => {
    const swiperStyles = document.createElement('style')
    swiperStyles.innerHTML = `
      .swiper-button-disabled {
        opacity: 0.3 !important;
        pointer-events: none;
      }
    `
    document.head.appendChild(swiperStyles)
    return () => {
      document.head.removeChild(swiperStyles)
    }
  }, [])

  return (
    <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Loved by Couples Everywhere
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Real experiences from real relationships.
        </p>
      </div>

      <div className="relative">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          modules={[Navigation, Pagination, Autoplay]}
          className="w-full"
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl px-8 py-12 md:p-16 max-w-3xl mx-auto text-center space-y-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mx-auto w-16 h-16 rounded-full object-cover ring-2 ring-pink-500"
                />
                <p className="text-lg text-gray-700 dark:text-gray-300 italic">“{testimonial.text}”</p>
                <h4 className="text-pink-600 dark:text-pink-300 font-semibold">{testimonial.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <div className="absolute inset-y-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-8 z-10 pointer-events-none">
          <button
            className="swiper-prev pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-white/40 dark:bg-zinc-800/30 backdrop-blur-md border border-white/50 dark:border-zinc-700 shadow-md hover:scale-105 hover:bg-white dark:hover:bg-zinc-700 transition-all duration-300"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-pink-600 dark:text-pink-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="swiper-next pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-white/40 dark:bg-zinc-800/30 backdrop-blur-md border border-white/50 dark:border-zinc-700 shadow-md hover:scale-105 hover:bg-white dark:hover:bg-zinc-700 transition-all duration-300"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-pink-600 dark:text-pink-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
