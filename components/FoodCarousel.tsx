'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import './foodCarousel.css'
import Image from 'next/image'

function FoodCarousel() {
  const foodItems = [
    {
      id: 1,
      name: 'Sea Food',
      description: 'Lorem ipsum dolor sit amet consectetur',
      img: '/foodBanner/h2-product-1.png',
    },
    {
      id: 2,
      name: 'Burger',
      description: 'Lorem ipsum dolor sit amet consectetur',
      img: '/foodBanner/h2-product-2.png',
    },
    {
      id: 3,
      name: 'Soup',
      description: 'Lorem ipsum dolor sit amet consectetur',
      img: '/foodBanner/h2-product-3.png',
    },
    {
      id: 4,
      name: 'Vagitable',
      description: 'Lorem ipsum dolor sit amet consectetur',
      img: '/foodBanner/h2-product-4.png',
    },
    {
      id: 5,
      name: 'Fried fish',
      description: 'Lorem ipsum dolor sit amet consectetur',
      img: '/foodBanner/h2-product-1.png',
    },
    {
      id: 6,
      name: 'Omlet',
      description: 'Lorem ipsum dolor sit amet consectetur',
      img: '/foodBanner/h2-product-2.png',
    },
    {
      id: 7,
      name: 'Salad',
      description: 'Lorem ipsum dolor sit amet consectetur',
      img: '/foodBanner/h2-product-3.png',
    },
    {
      id: 8,
      name: 'Meat Fry',
      description: 'Lorem ipsum dolor sit amet consectetur',
      img: '/foodBanner/h2-product-4.png',
    },
  ]
  return (
    <div className="text-primary bg-white w-full h-full relative">
      <div className="max-w-layout mx-auto overflow-hidden h-[300px] box-border mt-4">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={2000}
          watchSlidesProgress={true}
          slidesPerView={4}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper-food"
        >
          {foodItems.map((food) => {
            return (
              <SwiperSlide
                key={food.id}
                className="relative swiper-slide-food px-16"
              >
                <div className="food-img absolute left-0">
                  <Image
                    src={food.img}
                    alt={food.name}
                    height={150}
                    width={150}
                  />
                </div>
                <div className="flex flex-col border ml-auto w-full pl-28">
                  <a className="text-2xl text-secondary font-cormorant">
                    {food.name}
                  </a>
                  <p className="text-sm max-w-[10rem] text-secondary/50 font-jost">
                    {food.description}
                  </p>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default FoodCarousel
