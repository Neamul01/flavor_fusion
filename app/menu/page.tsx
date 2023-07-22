'use client'

import React from 'react'
import StyleHeading from '@/components/Common/StyleHeading'
import Layout from '@/components/Layouts/Layout'
import FoodCard from '@/components/Common/FoodCard'

const breadcrumbsItems = [
  { title: 'Home', href: '/' },
  { title: 'Menu', href: '/menu' },
]

export default function page() {
  return (
    <>
      <StyleHeading breadcrumbsItems={breadcrumbsItems} text="Menu List" />
      <Layout bg="white" className="py-20 grid grid-cols-12">
        {menuItems.map((item) => (
          <div className="col-span-4" key={item.id}>
            <FoodCard item={item} />
          </div>
        ))}
      </Layout>
    </>
  )
}

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