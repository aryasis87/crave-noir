'use client'

import { useState } from 'react'
import { Phone, Mail, MessageCircle } from 'lucide-react'

export default function ContactSupport() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Message Sent:', formData)
    // TODO: handle send logic (API)
  }

  return (
    <section className="relative bg-gradient-to-b from-pink-50 to-white dark:from-zinc-900 dark:to-zinc-950 py-24 px-6 md:px-12 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Heading */}
        <div className="text-center space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Let’s Connect, Comfortably
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Our discreet and friendly support team is ready to help—whether you're shy or curious.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white dark:bg-zinc-900/80 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <Phone className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="font-semibold text-lg">Phone Support</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              +62 812 3456 7890 <br />
              Mon–Fri, 09:00–17:00 WIB
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900/80 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <Mail className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="font-semibold text-lg">Email Us</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              support@positivecrave.co.id <br />
              We'll reply within 24 hours.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900/80 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="font-semibold text-lg">Live Chat</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Click the chat icon at the bottom right to speak with us in real-time—anonymously.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl shadow-xl p-10 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-pink-600 hover:bg-pink-700 text-white font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
