import Image from 'next/image'
import React from 'react'
import CustomButton from './Common/CustomButton'

function AboutTo() {
  return (
    <div className="text-secondary bg-white w-full">
      <div className="max-w-layout mx-auto grid grid-cols-12 gap-10">
        <div className="about-left col-span-5 h-[35.5625rem] w-full relative">
          <Image src={'/about-img-full.png'} alt="about" fill />
        </div>
        <div className="about-right col-span-7 max-w-2xl">
          <div className="text-primary text-md flex items-center gap-2">
            <p className="w-5 h-5 relative">
              <Image
                src={'/sub-title-vec.svg'}
                className="object-contain"
                alt="vec"
                fill
              />
            </p>
            <p>About to Flavor Fusion</p>
            <p className="w-5 h-5 relative">
              <Image src={'/sub-title-vec.svg'} alt="vec" fill />
            </p>
          </div>
          <h2 className="text-6xl font-semibold my-4">
            Come to Our Restaurant,
            <br /> Ready Your Food.
          </h2>
          <p className="text-secondary text-lg py-6">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>

          <CustomButton name="Discover more" text="Discoder more" />
        </div>
      </div>
    </div>
  )
}

export default AboutTo
