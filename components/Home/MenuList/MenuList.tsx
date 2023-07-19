'use client'

import React from 'react'
import TopHeading from '../Common/TopHeading'
import H2heading from '../Common/H2heading'
import CustomButton from '@/components/Common/CustomButton'
import Image from 'next/image'
import { Badge } from '@mantine/core'
import HomeLayout from '../../Layouts/HomeLayout'

const menuItems = [
  {
    id: 1,
    name: 'Full Chicken',
    description:
      'It is a long established fact that a reader will be distracted.',
    img: '/MenuItem/food-item-1.png',
    price: '45',
    category: 'Lanch',
  },
  {
    id: 2,
    name: ' Chicken',
    description:
      'It is a long established fact that a reader will be distracted.',
    img: '/MenuItem/food-item-2.png',
    price: '40',
    category: 'Lanch',
  },
  {
    id: 3,
    name: 'Burger',
    description:
      'It is a long established fact that a reader will be distracted.',
    img: '/MenuItem/food-item-3.png',
    price: '50',
    category: 'Lanch',
  },
  {
    id: 4,
    name: 'Carry',
    description:
      'It is a long established fact that a reader will be distracted.',
    img: '/MenuItem/food-item-4.png',
    price: '35',
    category: 'Lanch',
  },
  {
    id: 5,
    name: 'Full Chicken',
    description:
      'It is a long established fact that a reader will be distracted.',
    img: '/MenuItem/food-item-5.png',
    price: '30',
    category: 'Lanch',
  },
  {
    id: 6,
    name: 'Full Rice',
    description:
      'It is a long established fact that a reader will be distracted.',
    img: '/MenuItem/food-item-6.png',
    price: '55',
    category: 'Lanch',
  },
]

function MenuList() {
  return (
    <HomeLayout customClass="flex flex-col py-32">
      <div className="w-full flex justify-between md:pr-20 mb-8">
        <div className="flex flex-col gap-4">
          <TopHeading text="Menu List" />
          <H2heading text="Find Your Food Item" />
        </div>
        <CustomButton
          name="view-more"
          text="View More"
          color="secondary"
          customClass="hidden md:block"
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-12 gap-y-8 mt-12 ">
        {menuItems.map((item) => {
          return (
            <div
              className="col-span-4 border rounded-xl max-w-[26rem] relative"
              key={item.id}
            >
              <div className="border rounded-t-xl overflow-hidden relative">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={416}
                  height={320}
                />
                <Badge
                  size="xl"
                  className="absolute top-8 -right-3 z-40 bg-white text-secondary capitalize font-cormorant text-2xl"
                >
                  {item.category}
                </Badge>
              </div>
              <Badge
                size="xl"
                className="absolute left-[43%] top-[58%] md:top-[48%] lg:top-[62%] z-40 bg-white text-primary border shadow capitalize font-jost font-semibold text-xl px-6 "
              >
                ${item.price}
              </Badge>
              <div className="flex flex-col items-center mt-4 mb-6">
                <h2 className="text-3xl font-cormorant font-semibold my-4">
                  {item.name}
                </h2>
                <p className="text-secondary/75 leading-7 font-jost max-w-[15.625rem] text-center">
                  {item.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </HomeLayout>
  )
}

export default MenuList
