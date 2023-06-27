import AboutTo from '@/components/Home/AboutTo'
import FoodCarousel from '@/components/Home/FoodCarousel'
import Gallery from '@/components/Home/Gallery/Gallery'
import Hero from '@/components/Home/Hero/Hero'
import MenuList from '@/components/Home/MenuList/MenuList'
import NewItem from '@/components/Home/NewItem/NewItem'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <FoodCarousel />
      <AboutTo />
      <NewItem />
      <MenuList />
      <Gallery />
    </main>
  )
}
