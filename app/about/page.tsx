import StyleHeading from '@/components/Common/StyleHeading'
import HomeLayout from '@/components/Layouts/HomeLayout'
import React from 'react'
import styles from './about.module.css'

function about() {
  return (
    <div
      className={`${styles.syleheading} h-[25rem] bg-[url('/about/bredcumb-bg.png')] relative bg-cover bg-no-repeat]`}
    >
      <HomeLayout
        bg="secondary"
        parentClass=""
        className="flex h-full items-end pb-32"
      >
        <StyleHeading text="about us" className="z-20" />
      </HomeLayout>
    </div>
  )
}

export default about
