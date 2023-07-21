import React from 'react'
import Layout from '../Layouts/Layout'
import H2heading from '../Home/Common/H2heading'
import TopHeading from '../Home/Common/TopHeading'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import Image from 'next/image'
import './experties.css'

const experties = [
  {
    id: 1,
    name: 'James wich',
    title: 'Chef of Head',
    img: '/about/experties/exparts1.png',
  },
  {
    id: 2,
    name: 'Mrkoney smith',
    title: 'Chef of Head',
    img: '/about/experties/exparts2.png',
  },
  {
    id: 3,
    name: 'James wich',
    title: 'Chef of Head',
    img: '/about/experties/exparts3.png',
  },
  {
    id: 4,
    name: 'James wich',
    title: 'Chef of Head',
    img: '/about/experties/exparts1.png',
  },
  {
    id: 5,
    name: 'James wich',
    title: 'Chef of Head',
    img: '/about/experties/exparts2.png',
  },
  {
    id: 6,
    name: 'James wich',
    title: 'Chef of Head',
    img: '/about/experties/exparts3.png',
  },
]

export default function Experties() {
  return (
    <div>
      <Layout className="py-20">
        <div className="flex flex-col items-center justify-center mb-10">
          <TopHeading text="Experties" />
          <H2heading text="Cooking Experties" />
        </div>
        <div>
          <Swiper
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            speed={2000}
            watchSlidesProgress={true}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
            }}
            spaceBetween={2}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className={`mySwiper_about_experties`}
          >
            {experties.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="w-[415px] h-[350px] relative rounded-lg overflow-hidden ">
                  <Image src={item.img} alt="expert" fill />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-3xl capitalize font-semibold text-center mt-4">
                    {item.name}
                  </h2>
                  <p className="text-base text-center text-secondary/60">
                    {item.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Layout>
    </div>
  )
}
