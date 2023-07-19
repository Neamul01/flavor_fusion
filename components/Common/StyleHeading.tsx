import React from 'react'
import HomeLayout from '../Layouts/Layout'
import styles from './about.module.css'
import { usePathname } from 'next/navigation'

function Heading({ text }: { text: string }) {
  const router = usePathname()
  console.log(router)

  return (
    <div
      className={`${styles.syleheading} h-[38rem] bg-[url('/about/bredcumb-bg.png')] relative bg-cover bg-no-repeat] flex items-end`}
    >
      <HomeLayout bg="secondary" className="flex pb-32">
        <h2 className={`z-20 text-6xl font-semibold capitalize text-white`}>
          {text}
        </h2>
      </HomeLayout>
    </div>
  )
}

export default Heading
