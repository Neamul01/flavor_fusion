import React from 'react'
import TopHeading from '../Home/Common/TopHeading'
import H2heading from '../Home/Common/H2heading'
import HomeLayout from '../Layouts/Layout'
import Image from 'next/image'

function Introduction() {
  return (
    <div className="py-20 bg-white">
      <HomeLayout className="flex flex-col">
        <TopHeading text="Introduction of Flavor Fusion" />
        <H2heading text="We Are Experienced Restaurant." color="secondary" />
      </HomeLayout>
      <div className="max-w-[95rem] mx-auto">
        <div className="relative h-[34.1875rem] w-[33.125rem]">
          <Image
            className="rounded-md overflow-hidden object-contain"
            src={'/about/intro-left-img.png'}
            alt="chef"
            fill
          />
        </div>
      </div>
    </div>
  )
}

export default Introduction
