'use client'

import Image from 'next/image'
import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import './newItem.css'

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
      id: 1,
      name: 'Noodles',
      description:
        'It is a long established fact that a reader will be distracted.',
      img: '/newItem/regular-items12.png',
      price: '45',
    },
    {
      id: 1,
      name: 'Noodles',
      description:
        'It is a long established fact that a reader will be distracted.',
      img: '/newItem/regular-items13.png',
      price: '33',
    },
    {
      id: 1,
      name: 'Noodles',
      description:
        'It is a long established fact that a reader will be distracted.',
      img: '/newItem/regular-items11.png',
      price: '36',
    },
    {
      id: 1,
      name: 'Noodles',
      description:
        'It is a long established fact that a reader will be distracted.',
      img: '/newItem/regular-items12.png',
      price: '25',
    },
  ]
  return (
    <div className="text-secondary bg-[linear-gradient(rgba(9,22,29,.8),rgba(9,22,29,.8)),url('/regular-items-bg.png')] bg-cover bg-no-repeat h-auto w-full">
      <div className="max-w-layout mx-auto flex flex-col justify-center items-center h-full gap-4 mb-20 pt-20">
        <div className="text-primary text-md flex items-center gap-2">
          <p className="w-5 h-5 relative">
            <Image
              src={'/sub-title-vec.svg'}
              className="object-contain"
              alt="vec"
              fill
            />
          </p>
          <p className="text-base">Our New Items</p>
          <p className="w-5 h-5 relative">
            <Image src={'/sub-title-vec.svg'} alt="vec" fill />
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-6xl font-bold text-white">
            Flavor Fusion New Items List
          </h2>
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
      </div>
    </div>
  )
}

export default NewItem
