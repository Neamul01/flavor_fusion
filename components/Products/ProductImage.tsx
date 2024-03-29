import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import Image from 'next/image'
import './styles.css'

type Items = {
  id: number
  img: string
}

export default function ProductImage({ items }: { items: Items[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="product_image mb-2"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id + item.img}>
            <div className="bg-primary/10 p-2">
              <div className="flex items-center justify-center py-20 relative mx-auto h-[320px] w-[320px] md:h-[348px] md:w-[348px] ">
                <Image alt="product" fill src={item.img} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        // @ts-ignore
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="product_image_thumb"
      >
        {items.map((item) => (
          <div key={item.id + item.img}>
            <SwiperSlide key={item.id + item.img}>
              <div className="border-2 border-secondary/10 p-2 rounded-lg">
                <div className="flex items-center justify-center py-4 px-0 rounded-lg">
                  <Image
                    alt="product"
                    height={104}
                    width={104}
                    src={item.img}
                  />
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  )
}
