import AboutTo from '@/components/Home/AboutTo'
import Experties from '@/components/Home/Experties/Experties'
import FoodCarousel from '@/components/Home/FoodCarousel'
import Hero from '@/components/Home/Hero/Hero'
import MenuList from '@/components/Home/MenuList/MenuList'
import NewItem from '@/components/Home/NewItem/NewItem'
import HomeGallery from '@/components/Home/HomeGallery'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <FoodCarousel />
      <AboutTo />
      {/* <NewItem /> */}
      <MenuList />
      <HomeGallery />
      <Experties />
    </main>
  )
}
