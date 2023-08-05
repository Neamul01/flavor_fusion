'use client'

import React from 'react'
import { Button } from '@mantine/core'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import Image from 'next/image'
import './hero.css'
import CustomButton from '../../Common/CustomButton'
import TopHeading from '../Common/TopHeading'
import { useRouter } from 'next/navigation'

function BannerItem() {
  const router = useRouter()
  return (
    <div className="grid lg:grid-cols-2">
      <div className="flex flex-col md:items-start items-center gap-4 justify-center">
        <TopHeading text="Welcome to Flavor Fusion" />
        <h2 className="md:text-7xl text-3xl capitalize text-white md:text-left font-bold text-center">
          Find your best healthy and testy food
        </h2>
        <p className="mt-6 mb-8 md:text-left text-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page.
        </p>
        <CustomButton
          name="discover-more"
          text="Discover More"
          onClick={() => router.push('/about')}
        />
        {/* <Button
          leftIcon={<BsArrowUpRightCircle size={'1.3rem'} />}
          name="discover-more"
          className="text-primary border-primary rounded-full hover:bg-primary hover:text-white"
          size="lg"
        >
          Discover More
        </Button> */}
      </div>
      <div className="relative lg:flex hidden">
        <div className="w-80 h-80">
          <Image
            src={'/banner/flavor-fusion-logo2.png'}
            alt="banner"
            width={250}
            height={250}
          />
        </div>
        <div className="w-80 h-80">
          <Image
            src={'/banner/h2-banner-img22.png'}
            alt="banner"
            width={150}
            height={150}
          />
        </div>
        <div className="absolute w-72 h-72 -top-36 left-44">
          <Image
            src={'/banner/h2-banner-img33.png'}
            alt="banner"
            width={150}
            height={150}
          />
        </div>
        <div className="absolute w-[25rem] h-[25rem] -bottom-[14.2rem] left-[7.6rem]">
          <Image
            src={'/banner/h2-banner-img44.png'}
            alt="banner"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  )
}

export default BannerItem
