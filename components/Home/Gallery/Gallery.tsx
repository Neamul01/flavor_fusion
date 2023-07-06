'use client'

import React from 'react'
import TopHeading from '../Common/TopHeading'
import H2heading from '../Common/H2heading'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { Autoplay, Navigation, Pagination } from 'swiper'
import './gallery.css'

const galleryItems = [
  {
    id: 1,
    img: '/gallery/2col-gallery-01.png',
  },
  {
    id: 2,
    img: '/gallery/2col-gallery-02.png',
  },
  {
    id: 3,
    img: '/gallery/2col-gallery-03.png',
  },
  {
    id: 4,
    img: '/gallery/2col-gallery-04.png',
  },
  {
    id: 5,
    img: '/gallery/2col-gallery-05.png',
  },
  {
    id: 6,
    img: '/gallery/2col-gallery-01.png',
  },
  {
    id: 7,
    img: '/gallery/2col-gallery-02.png',
  },
  {
    id: 8,
    img: '/gallery/2col-gallery-03.png',
  },
  {
    id: 9,
    img: '/gallery/2col-gallery-04.png',
  },
  {
    id: 10,
    img: '/gallery/2col-gallery-05.png',
  },
]

function Gallery() {
  return (
    <div className="w-full bg-white">
      <div className="mb-32">
        <div className="flex flex-col items-center gap-4">
          <TopHeading text="Gallery Store" />
          <H2heading text="Our Special Gallery" />
        </div>
        <Swiper
          loop={true}
          watchSlidesProgress={true}
          pagination={{
            clickable: true,
          }}
          // slidesPerView={1}
          breakpoints={{
            400: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
            1920: {
              slidesPerView: 5,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper-gallery mt-12"
        >
          {galleryItems.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div
                  className={`h-[296px] w-[351px] ${
                    item.id % 2 === 0 ? '' : 'mt-3'
                  } relative overlay-gallery-parent`}
                >
                  <Image src={item.img} fill alt="gallery" />
                  <div className="overlay-gallery cursor-pointer h-[522px] w-[522px] relative ">
                    <Image src={'/gallery/Zoom.svg'} fill alt="zoom" />
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Gallery
