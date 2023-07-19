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
      <div className="max-w-[95rem] mx-auto mt-9 flex gap-6">
        <div className="relative h-[34.1875rem] w-[33.125rem] rounded-tl-xl rounded-br-xl overflow-hidden">
          <Image src={'/about/intro-left-img.png'} alt="chef" fill />
        </div>
        <div className="flex">hello</div>
      </div>
    </div>
  )
}

export default Introduction
