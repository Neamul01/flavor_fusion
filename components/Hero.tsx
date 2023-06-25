'use client'

import { Jost } from 'next/font/google'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './hero.css'
import { Pagination } from 'swiper'

const jost = Jost({ subsets: ['latin'] })

function Hero() {
  return (
    <div className="text-white w-full">
      <h1 className="text-4xl font-cormorant">Hero item</h1>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* <div slot="container-start">
          <div className="text-black h-40">Container Start</div>
        </div> */}
        {[1, 2, 3, 4].map((a) => {
          return (
            <SwiperSlide key={a} className="text-left">
              <div className="">
                <p className="text-primary text-md">Welcome to Flavor Fusion</p>
                <h2 className="text-2xl capitalize">
                  Find your best healthy and testy food
                </h2>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Hero
