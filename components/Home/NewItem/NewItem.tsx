'use client'

import Image from 'next/image'
import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import './newItem.css'
import H2heading from '../Common/H2heading'
import TopHeading from '../Common/TopHeading'
import HomeLayout from '../Common/HomeLayout'

function NewItem() {
  const newItems = [
    {
      id: 1,
      name: 'Noodles',
      description:
        'It is a long established fact that a reader will be distracted.',
      img: '/newItem/regular-items11.png',
      price: '37',
    },
    {
      id: 2,
      name: 'Noodles',
      description:
        'It is a long established fact that a reader will be distracted.',
      img: '/newItem/regular-items12.png',
      price: '45',
    },
    {
      id: 3,
      name: 'Noodles',
      description:
        'It is a long established fact that a reader will be distracted.',
      img: '/newItem/regular-items13.png',
      price: '33',
    },
    {
      id: 4,
      name: 'Noodles',
      description:
        'It is a long established fact that a reader will be distracted.',
      img: '/newItem/regular-items11.png',
      price: '36',
    },
    {
      id: 5,
      name: 'Noodles',
      description:
        'It is a long established fact that a reader will be distracted.',
      img: '/newItem/regular-items12.png',
      price: '25',
    },
  ]
  return (
    <HomeLayout
      parentClass="bg-cover bg-no-repeat h-auto"
      customClass="flex flex-col justify-center items-center h-full gap-4 mb-20 pt-20"
      color="secondary"
      bg="[linear-gradient(rgba(9,22,29,.8),rgba(9,22,29,.8)),url('/regular-items-bg.png')]"
    >
      <TopHeading text="Our New Items" />
      <div className="flex flex-col items-center gap-4">
        <H2heading text="Flavor Fusion New Items List" color="white" />
        <p className="text-xl text-white">
          Various versions have evolved over the years, sometimes on purpose.
        </p>
      </div>
      <div className="flex gap-2 mt-10">
        <Swiper
          slidesPerView={3}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper-newItem w-layout"
        >
          {newItems.map((item) => {
            return (
              <SwiperSlide key={item.id} className="swiper-slide-newItem">
                <div className="flex gap-3 flex-col items-center">
                  <div className="relative">
                    <Image
                      src={item.img}
                      alt={item.name}
                      height={417}
                      width={416}
                    />
                    <div className="w-14 h-14 bg-white hover:bg-primary flex items-center justify-center transform rotate-45 rounded-md absolute bottom-8 left-[43%]">
                      <span className="text-xl font-semibold text-secondary/80 transform -rotate-45">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                  <div className="px-10 text-center max-w-[19.5rem]">
                    <h3 className="text-3xl text-white">{item.name}</h3>
                    <p className="text-white/75 text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </HomeLayout>
  )
}

export default NewItem
