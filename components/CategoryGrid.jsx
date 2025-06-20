'use client'

import { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Heart, ArrowRight, Check, ChevronDown } from 'lucide-react'

const categories = ['For Couples', 'App-Controlled', 'Long Distance']
const features = ['Waterproof', 'Rechargeable', 'Remote-Controlled']

const products = [
  {
    id: 1,
    name: 'Pulse Vibe',
    price: '$79',
    image: '/images/p2.jpg',
  },
  {
    id: 2,
    name: 'Silken Lube',
    price: '$29',
    image: '/images/p3.jpg',
  },
  {
    id: 3,
    name: 'Intimacy Kit',
    price: '$119',
    image: '/images/p4.jpg',
  },
]

const sortOptions = ['Popular', 'Newest', 'Price: Low to High', 'Price: High to Low']

export default function CategoryGrid() {
  const [selectedSort, setSelectedSort] = useState(sortOptions[0])

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Heading & Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Products Made for Connection
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Curated categories for couples, tech lovers, and beginners.
          </p>
        </div>

        {/* Custom Sort Dropdown */}
        <Listbox value={selectedSort} onChange={setSelectedSort}>
          <div className="relative w-64">
            <Listbox.Button className="w-full cursor-pointer rounded-md border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 py-2 pl-4 pr-10 text-left shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 hover:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition">
              <span>{selectedSort}</span>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </span>
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Listbox.Options className="absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-zinc-800 py-1 text-sm shadow-lg ring-1 ring-black/10 focus:outline-none">
                {sortOptions.map(option => (
                  <Listbox.Option
                    key={option}
                    value={option}
                    className={({ active }) =>
                      `cursor-pointer select-none px-4 py-2 ${
                        active
                          ? 'bg-pink-50 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300'
                          : 'text-gray-700 dark:text-gray-200'
                      }`
                    }
                  >
                    {({ selected }) => (
                      <span className="flex items-center justify-between">
                        {option}
                        {selected && <Check className="ml-2 w-4 h-4 text-pink-500" />}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>

      {/* Filter Pills */}
      <div className="flex overflow-x-auto gap-3 pb-6 mb-10 scrollbar-hide">
        {[...categories, ...features].map((item, idx) => (
          <button
            key={idx}
            className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-300 dark:border-zinc-700 text-sm text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div
            key={product.id}
            className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="relative w-full h-72 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:brightness-90 transition duration-300"
              />
              <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-zinc-800/70 rounded-full backdrop-blur-md hover:bg-white dark:hover:bg-zinc-700 transition">
                <Heart className="w-4 h-4 text-pink-500" />
              </button>
            </div>
            <div className="p-5 space-y-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-pink-600 transition">
                {product.name}
              </h3>
              <div className="flex items-center justify-between pt-2">
                <span className="inline-block bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300 px-3 py-1 text-sm rounded-full font-semibold">
                  {product.price}
                </span>
                <button className="group inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-pink-600 transition">
                  See Details
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
