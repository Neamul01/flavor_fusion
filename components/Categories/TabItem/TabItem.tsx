import { Divider } from '@mantine/core'
import React from 'react'
import CategoryItemCard from '../CategoryItemCard/CategoryItemCard'

export default function TabItem({ tabName }: { tabName: string }) {
  return (
    <div className="grid md:grid-cols-12 relative gap-3">
      {tabContent.map((item) => (
        <div key={item.id} className="md:col-span-6">
          <CategoryItemCard item={item} />
        </div>
      ))}

      <div className="absolute left-[45%] top-0 h-full">
        <Divider
          my="xs"
          color="gray"
          labelPosition="left"
          orientation="vertical"
          size={'xl'}
          className="h-full"
        />
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
