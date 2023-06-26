'use client'

import Image from 'next/image'
import React from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import './newItem.css'

function NewItem() {
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
              type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper-newItem w-layout"
          >
            {[1, 2, 3, 4, 5].map((item) => {
              return (
                <SwiperSlide key={item} className="swiper-slide-newItem">
                  <div className="flex gap-3 flex-col items-center">
                    <Image
                      src={'/newItem/regular-items11.png'}
                      alt="new item 1"
                      height={417}
                      width={416}
                    />
                    <div className="px-10 text-center max-w-[19.5rem]">
                      <h3 className="text-3xl text-white">Noodles</h3>
                      <p className="text-white/75 text-base">
                        It is a long established fact that a reader will be
                        distracted.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
            {/* <SwiperSlide className="swiper-slide-newItem">
              <div className="flex gap-3  flex-col items-center">
                <Image
                  src={'/newItem/regular-items12.png'}
                  alt="new item 1"
                  height={417}
                  width={416}
                />
                <div className="px-10 text-center max-w-[19.5rem]">
                  <h3 className="text-3xl text-white">Noodles</h3>
                  <p className="text-white/75 text-base">
                    It is a long established fact that a reader will be
                    distracted.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-newItem">
              <div className="flex gap-3  flex-col items-center">
                <Image
                  src={'/newItem/regular-items13.png'}
                  alt="new item 1"
                  height={417}
                  width={416}
                />
                <div className="px-10 text-center max-w-[19.5rem]">
                  <h3 className="text-3xl text-white">Noodles</h3>
                  <p className="text-white/75 text-base">
                    It is a long established fact that a reader will be
                    distracted.
                  </p>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default NewItem
