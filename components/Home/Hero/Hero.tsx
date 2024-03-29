'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import BannerItem from './BannerItem'
import HomeLayout from '../../Layouts/Layout'

function Hero() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + ' ' + '</span>'
    },
  }

  return (
    <HomeLayout bg="secondary" color="white">
      <Swiper
        loop={true}
        navigation={true}
        direction={'vertical'}
        pagination={pagination}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={1500}
        className="mySwiper-hero w-full h-[calc(100vh-4rem)] overflow-hidden"
      >
        {[1, 2, 3].map((a) => {
          return (
            <SwiperSlide key={a} className="text-left swiper-slide-hero">
              <BannerItem />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </HomeLayout>
  )
}

export default Hero
