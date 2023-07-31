import { Divider } from '@mantine/core'
import React from 'react'
import CategoryItemCard from '../CategoryItemCard/CategoryItemCard'
import Image from 'next/image'

export default function TabItem({ tabName }: { tabName: string }) {
  return (
    <div className="grid md:grid-cols-12 relative gap-3">
      {tabContent.map((item) => (
        <div key={item.id} className="md:col-span-6">
          <CategoryItemCard item={item} />
        </div>
      ))}

      <div className="absolute left-[45%] top-0 h-full text-center">
        <p className="w-5 h-5 relative">
          <Image src={'/sub-title-vec.svg'} alt="vec" fill />
        </p>
        {/* <Divider
          my="xs"
          color="var(--primary-color)"
          variant="dotted"
          orientation="vertical"
          size={'sm'}
          className="h-full"
        /> */}
        <div className="h-[90%] w-[1px] mx-auto my-1 border border-dashed border-primary/60"></div>
        <p className="w-5 h-5 relative">
          <Image src={'/sub-title-vec.svg'} alt="vec" fill />
        </p>
      </div>
    </div>
  )
}

const tabContent = [
  {
    id: 1,
    title: 'Mixed Vegetable Salad',
    description: 'Complete account of the system.',
    price: 12.99,
    img: '/categories/fast-food-11.png',
  },
  {
    id: 2,
    title: 'Greek Salad',
    description: 'Complete account of the system.',
    price: 12.99,
    img: '/categories/fast-food-12.png',
  },
  {
    id: 3,
    title: 'Summer Corn',
    description: 'Complete account of the system.',
    price: 12.99,
    img: '/categories/fast-food-13.png',
  },
  {
    id: 4,
    title: 'Taco Salad Item',
    description: 'Complete account of the system.',
    price: 12.99,
    img: '/categories/fast-food-14.png',
  },
  {
    id: 5,
    title: 'Naga Chicken',
    description: 'Complete account of the system.',
    price: 12.99,
    img: '/categories/fast-food-15.png',
  },
  {
    id: 6,
    title: 'Broccoli Pasta Item',
    description: 'Complete account of the system.',
    price: 12.99,
    img: '/categories/fast-food-16.png',
  },
]
