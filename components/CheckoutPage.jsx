'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Trash2, Plus, Minus, ShieldCheck } from 'lucide-react'

const initialCart = [
  {
    id: 1,
    name: 'Pulse Vibe',
    price: 79,
    quantity: 1,
    image: '/images/p3.jpg',
  },
  {
    id: 2,
    name: 'Silken Lube',
    price: 29,
    quantity: 2,
    image: '/images/p5.jpg',
  },
]

export default function CheckoutPage() {
  const [cart, setCart] = useState(initialCart)

  const updateQuantity = (id, type) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === 'increase'
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    )
  }

  const removeItem = id => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 8
  const total = subtotal + shipping

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
        Your Cart
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        {/* 🛍️ Cart Items */}
        <div className="md:col-span-2 space-y-8">
          {cart.map(item => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-5 bg-white dark:bg-zinc-900 rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative w-full sm:w-28 h-48 sm:h-28 rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {item.name}
                  </h3>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  ${item.price} × {item.quantity}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, 'decrease')}
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-pink-500 hover:text-white transition"
                    >
                      <Minus size={16} className="mx-auto" />
                    </button>
                    <span className="px-3 font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 'increase')}
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-pink-500 hover:text-white transition"
                    >
                      <Plus size={16} className="mx-auto" />
                    </button>
                  </div>
                  <span className="text-pink-600 font-semibold text-lg">
                    ${item.price * item.quantity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 💳 Order Summary */}
        <div className="relative rounded-2xl p-6 bg-white dark:bg-zinc-900 shadow-lg border border-gray-100 dark:border-zinc-700">
          <div className="absolute -top-4 left-4 text-xs text-pink-600 bg-pink-100 dark:bg-pink-800/30 px-3 py-1 rounded-full font-medium shadow">
            Summary
          </div>

          <div className="space-y-4 pt-6">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <hr className="border-t border-gray-200 dark:border-zinc-700 my-4" />
            <div className="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 hover:to-pink-700 text-white font-semibold shadow-lg transition-all text-center">
            Proceed to Checkout
          </button>

          <div className="mt-4 flex items-center text-xs text-gray-400 gap-2">
            <ShieldCheck className="w-4 h-4 text-pink-500" />
            <span>Secure & Discreet Billing</span>
          </div>
        </div>
      </div>
    </section>
  )
}
