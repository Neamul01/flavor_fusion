'use client'

import { Jost } from 'next/font/google'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './hero.css'
import { Pagination } from 'swiper'
import { Button } from '@mantine/core'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import Image from 'next/image'

const jost = Jost({ subsets: ['latin'] })

function Hero() {
  return (
    <div className="text-white w-full max-w-layout">
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-[calc(100vh-4rem)]"
      >
        {/* <div slot="container-start">
          <div className="text-black h-40">Container Start</div>
        </div> */}
        {[1, 2, 3, 4].map((a) => {
          return (
            <SwiperSlide key={a} className="text-left">
              <div className="grid grid-cols-2">
                <div className="flex flex-col items-start gap-4 ">
                  <div className="text-primary text-md flex gap-2">
                    <p className="w-5">
                      <Image
                        src={'sub-title-vec.svg'}
                        className="object-contain"
                        alt="vec"
                        width={0.2}
                        height={0.2}
                      />
                    </p>
                    <p>Welcome to Flavor Fusion</p>
                    <p className="w-5">
                      <Image
                        src={'sub-title-vec.svg'}
                        alt="vec"
                        width={1}
                        height={1}
                      />
                    </p>
                  </div>
                  <h2 className="text-7xl capitalize text-white text-left font-bold">
                    Find your best healthy and testy food
                  </h2>
                  <p className="mt-6 mb-8">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page.
                  </p>
                  <Button
                    leftIcon={<BsArrowUpRightCircle size={'1.3rem'} />}
                    className="text-primary border-primary rounded-full"
                    size="lg"
                  >
                    Discover More
                  </Button>
                </div>
                <div className="relative flex">
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
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Hero
