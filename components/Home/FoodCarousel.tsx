'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import './foodCarousel.css'
import Image from 'next/image'
import HomeLayout from './Common/HomeLayout'
import { useWindowSize } from '@/hooks/useWindowSize'

function FoodCarousel() {
  const screen = useWindowSize()
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
    <HomeLayout customClass="my-12 md:my-32">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={2000}
        watchSlidesProgress={true}
        slidesPerView={1}
        breakpoints={{
          400: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
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
              className="relative swiper-slide-food px-6 md:px-16"
            >
              <div className="left-3 absolute ">
                <div className="food-img relative h-28 md:h-36 w-28 md:w-36">
                  <Image src={food.img} alt={food.name} fill />
                </div>
              </div>
              <div className="flex flex-col border ml-auto w-full pl-28">
                <a className="md:text-2xl font-semibold text-xl text-secondary font-cormorant">
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
    </HomeLayout>
  )
}

export default FoodCarousel
