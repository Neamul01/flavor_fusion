'use client'

import React from 'react'
import TopHeading from '../Common/TopHeading'
import H2heading from '../Common/H2heading'
import CustomButton from '@/components/Common/CustomButton'
import HomeLayout from '../../Layouts/Layout'
import FoodCart from '@/components/Common/FoodCart'

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
    <HomeLayout className="flex flex-col py-32">
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
          return <FoodCart item={item} key={item.id} />
        })}
      </div>
    </HomeLayout>
  )
}

export default MenuList
