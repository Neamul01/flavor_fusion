import AboutTo from '@/components/Home/AboutTo'
import Experties from '@/components/Home/Experties/Experties'
import FoodCarousel from '@/components/Home/FoodCarousel'
import Gallery from '@/components/Home/Gallery/Gallery'
import Hero from '@/components/Home/Hero/Hero'
import MenuList from '@/components/Home/MenuList/MenuList'
import NewItem from '@/components/Home/NewItem/NewItem'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <FoodCarousel />
      <AboutTo />
      {/* <NewItem /> */}
      <MenuList />
      <Gallery />
      <Experties />
    </main>
  )
}
