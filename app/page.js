import HeroSection from '@/components/HeroSection'
import PlainBox from '@/components/PlainBox'
import CategoryGrid from '@/components/CategoryGrid'
import FeaturedProducts from '@/components/FeaturedProducts'
import USPSection from '@/components/USPSection'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import AboutAndFAQ from '@/components/AboutAndFAQ'
import ContactSupport from '@/components/ContactSupport'

/* Landing page hanya memuat bagian yang memang milik landing page.
   ProductDetail, Checkout, dan Login sebelumnya ikut dirender di sini —
   sekarang masing-masing punya rutenya sendiri (/produk, /checkout, /masuk). */
export default function Home() {
  return (
    <>
      <HeroSection />
      <PlainBox />
      <CategoryGrid />
      <FeaturedProducts />
      <USPSection />
      <TestimonialsCarousel />
      <AboutAndFAQ />
      <ContactSupport />
    </>
  )
}
