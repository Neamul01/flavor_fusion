'use client'

import React from 'react'
import TopHeading from '../../Home/Common/TopHeading'
import H2heading from '../../Home/Common/H2heading'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { Autoplay, Navigation, Pagination } from 'swiper'
import './gallery.css'
import { motion } from 'framer-motion'

const galleryItems = [
  {
    id: 1,
    img: '/gallery/2col-gallery-01.png',
    category: 'Cooking',
    title: 'Chef Cooking Food',
  },
  {
    id: 2,
    img: '/gallery/2col-gallery-02.png',
    category: 'Cooking',
    title: 'Chef Cooking Food',
  },
  {
    id: 3,
    img: '/gallery/2col-gallery-03.png',
    category: 'Cooking',
    title: 'Chef Cooking Food',
  },
  {
    id: 4,
    img: '/gallery/2col-gallery-04.png',
    category: 'Cooking',
    title: 'Chef Cooking Food',
  },
  {
    id: 5,
    img: '/gallery/2col-gallery-05.png',
    category: 'Cooking',
    title: 'Chef Cooking Food',
  },
  {
    id: 6,
    img: '/gallery/2col-gallery-01.png',
    category: 'Cooking',
    title: 'Chef Cooking Food',
  },
  {
    id: 7,
    img: '/gallery/2col-gallery-02.png',
    category: 'Cooking',
    title: 'Chef Cooking Food',
  },
  {
    id: 8,
    img: '/gallery/2col-gallery-03.png',
    category: 'Cooking',
    title: 'Chef Cooking Food',
  },
  {
    id: 9,
    img: '/gallery/2col-gallery-04.png',
    category: 'Cooking',
    title: 'Chef Cooking Food',
  },
  {
    id: 10,
    img: '/gallery/2col-gallery-05.png',
    category: 'Cooking',
    title: 'Chef Cooking Food',
  },
]

type Props = {
  topHedingText?: string
  h2HeadingText?: string
  pageVariant?: 'about' | 'home'
}

function Gallery({
  topHedingText = 'Gallery Store',
  h2HeadingText = 'Our Special Gallery',
  pageVariant = 'home',
}: Props) {
  return (
    <div className="w-full bg-white">
      <div className="mb-32">
        <div className="flex flex-col items-center gap-4">
          <TopHeading text={topHedingText} />
          <H2heading text={h2HeadingText} />
        </div>
        <Swiper
          loop={true}
          watchSlidesProgress={true}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          breakpoints={{
            640: {
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
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false }}
                  className={`h-[296px] w-[351px] ${
                    item.id % 2 === 0 ? '' : 'mt-3'
                  } relative overlay-gallery-parent`}
                >
                  <Image src={item.img} fill alt="gallery" />
                  <div
                    className={`${
                      pageVariant === 'home'
                        ? 'overlay-gallery-home'
                        : 'overlay-gallery-about'
                    } overlay-gallery cursor-pointer h-[522px] w-[522px] relative`}
                  >
                    {pageVariant === 'home' && (
                      <Image src={'/gallery/Zoom.svg'} fill alt="zoom" />
                    )}
                    {pageVariant === 'about' && (
                      <div className="flex flex-col items-center justify-center">
                        <TopHeading color="text-white" text={item.category} />
                        <H2heading color="white" size="sm" text={item.title} />
                      </div>
                    )}
                  </div>
                </motion.div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Gallery
