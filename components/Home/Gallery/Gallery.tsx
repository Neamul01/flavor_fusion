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
    id: 9,
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
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={2000}
          watchSlidesProgress={true}
          slidesPerView={5}
          pagination={{
            clickable: true,
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
                  } relative`}
                >
                  <Image src={item.img} fill alt="gallery" />
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
