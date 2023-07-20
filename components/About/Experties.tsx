import React from 'react'
import Layout from '../Layouts/Layout'
import H2heading from '../Home/Common/H2heading'
import TopHeading from '../Home/Common/TopHeading'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'

export default function Experties() {
  return (
    <div>
      <Layout className="py-20">
        <div className="flex flex-col items-center justify-center">
          <TopHeading text="Experties" />
          <H2heading text="Cooking Experties" />
        </div>
        <div>
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
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper-food"
          >
            <SwiperSlide>hello1</SwiperSlide>
            <SwiperSlide>hello2</SwiperSlide>
            <SwiperSlide>hello3</SwiperSlide>
            <SwiperSlide>hello4</SwiperSlide>
            <SwiperSlide>hello5</SwiperSlide>
            <SwiperSlide>hello6</SwiperSlide>
            <SwiperSlide>hello7</SwiperSlide>
          </Swiper>
        </div>
      </Layout>
    </div>
  )
}
