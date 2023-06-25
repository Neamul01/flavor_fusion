'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import './foodCarousel.module.css'

function FoodCarousel() {
  return (
    <div className="text-primary bg-white w-full h-full relative">
      <div className="max-w-layout mx-auto overflow-hidden h-[300px] box-border mt-4">
        <Swiper
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          watchSlidesProgress={true}
          slidesPerView={4}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5, 6].map((a) => {
            return (
              <SwiperSlide
                key={a}
                style={{
                  height: 300,
                  marginRight: 2,
                  backgroundColor: 'white',
                }}
              >
                Slide 1
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default FoodCarousel
