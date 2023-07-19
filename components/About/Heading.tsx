import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import StyleHeading from '../Common/StyleHeading'
import styles from './about.module.css'
import { usePathname } from 'next/navigation'

function Heading() {
  const router = usePathname()
  console.log(router)
  return (
    <div
      className={`${styles.syleheading} h-[38rem] bg-[url('/about/bredcumb-bg.png')] relative bg-cover bg-no-repeat] flex items-end`}
    >
      <HomeLayout bg="secondary" className="flex  pb-32">
        <StyleHeading text="about us" className="z-20" />
      </HomeLayout>
    </div>
  )
}

export default Heading
