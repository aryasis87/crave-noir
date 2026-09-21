import LoginPage from '@/components/LoginPage'

export const metadata = {
  title: 'Masuk — Positive Crave',
  description: 'Masuk ke akun Positive Crave Anda.',
  alternates: { canonical: 'https://crave-noir.vercel.app/masuk' },
  robots: { index: false, follow: true },
}

export default function MasukRoute() {
  return <LoginPage />
}
