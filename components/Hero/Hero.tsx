'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import BannerItem from './BannerItem'

function Hero() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + ' ' + '</span>'
    },
  }

  return (
    <div className="bg-secondary w-full">
      <div className="text-white w-full mx-auto max-w-layout">
        <Swiper
          direction={'vertical'}
          pagination={pagination}
          modules={[Pagination]}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          className="mySwiper-hero w-full h-[calc(100vh-4rem)]"
        >
          {/* <div slot="container-start">
          <div className="text-black h-40">Container Start</div>
        </div> */}
          {[1, 2, 3].map((a) => {
            return (
              <SwiperSlide key={a} className="text-left swiper-slide-hero">
                <BannerItem />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Hero
