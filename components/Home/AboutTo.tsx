'use client'

import Image from 'next/image'
import React from 'react'
import CustomButton from '../Common/CustomButton'
import H2heading from './Common/H2heading'
import TopHeading from './Common/TopHeading'
import HomeLayout from '../Layouts/Layout'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

function AboutTo() {
  const router = useRouter()

  return (
    <HomeLayout className="grid grid-cols-1 md:grid-cols-12 gap-10 md:mb-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="about-left md:col-span-5 col-span-1 h-[35.5625rem] max-w-xs md:max-w-full relative"
      >
        <Image src={'/about-img-full.png'} alt="about" fill />
      </motion.div>
      <div className="about-right md:col-span-7 col-span-1 max-w-2xl">
        <TopHeading text="About to Flavor Fusion" />
        <H2heading
          text={`Come to Our Restaurant,
             Ready Your Food.`}
          color="secondary"
        />
        <p className="text-secondary/75 text-base md:text-lg py-6">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <div className="flex flex-wrap gap-12 mb-10 mt-4">
          <div className="w-full flex gap-6 pr-4">
            <div className="w-16 h-16 relative border border-primary p-4">
              <Image
                src={'/icons/about1.svg'}
                alt="about icon"
                fill
                className="p-2"
              />
            </div>
            <div className="">
              <h2 className="text-2xl font-semibold">Pure Fresh Food.</h2>
              <p className="text-lg text-secondary/75">
                We are serve different type of fresh food.
              </p>
            </div>
          </div>
          <div className="w-full h-full flex gap-6 pr-4">
            <div className="w-16 h-16 relative border border-primary p-4">
              <Image
                src={'/icons/about2.svg'}
                alt="about icon2"
                fill
                className="p-2"
              />
            </div>
            <div className="">
              <h2 className="text-2xl font-semibold">Pure Fresh Food.</h2>
              <p className="text-lg text-secondary/75">
                We are serve different type of fresh food.
              </p>
            </div>
          </div>
        </div>

        <CustomButton
          name="Discover more"
          text="Discoder more"
          onClick={() => router.push('/about')}
        />
      </div>
    </HomeLayout>
  )
}

export default AboutTo
