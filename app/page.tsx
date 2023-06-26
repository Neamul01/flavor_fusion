import AboutTo from '@/components/AboutTo'
import FoodCarousel from '@/components/FoodCarousel'
import Hero from '@/components/Hero/Hero'
import NewItem from '@/components/NewItem/NewItem'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <FoodCarousel />
      <AboutTo />
      <NewItem />
    </main>
  )
}
