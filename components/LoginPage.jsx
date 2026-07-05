'use client'

import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <section className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-50 via-white to-purple-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 px-4">
      <div className="backdrop-blur-xl bg-white/60 dark:bg-zinc-800/60 border border-white/30 dark:border-zinc-700 rounded-3xl shadow-2xl p-8 sm:p-10 w-full max-w-md space-y-8 transition-all duration-300">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Log in to rediscover pleasure, privately and securely.
          </p>
        </div>

        <form className="space-y-6">
          {/* Email */}
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@love.com"
              className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-600 placeholder:text-gray-400 dark:placeholder:text-gray-500"
            />
          </div>

          {/* Password */}
          <div className="space-y-1 relative">
            <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-600 placeholder:text-gray-400 dark:placeholder:text-gray-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-9 right-3 text-gray-400 hover:text-pink-500 transition"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <a href="/forgot" className="hover:underline text-pink-500">
              Forgot password?
            </a>
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white font-semibold tracking-wide shadow-md hover:shadow-lg transition-all"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Don’t have an account?{' '}
          <a href="/register" className="text-pink-500 hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </section>
  )
}
