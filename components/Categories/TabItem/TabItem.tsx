import { Divider } from '@mantine/core'
import React from 'react'

export default function TabItem({ tabName }: { tabName: string }) {
  return (
    <div className="grid md:grid-cols-12 relative">
      <div className="col-span-6">
        <p className="">{tabName} tab content</p>
        <p className="">{tabName} tab content</p>
      </div>
      <div className="col-span-6">
        <p className="">{tabName} tab content</p>
      </div>

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
    img: '/categories/fast-food11.png',
  },
  {
    id: 2,
    title: 'Greek Salad',
    description: 'Complete account of the system.',
    price: 12.99,
    img: '/categories/fast-food12.png',
  },
  {
    id: 3,
    title: 'Summer Corn',
    description: 'Complete account of the system.',
    price: 12.99,
    img: '/categories/fast-food13.png',
  },
  {
    id: 4,
    title: 'Taco Salad Item',
    description: 'Complete account of the system.',
    price: 12.99,
    img: '/categories/fast-food14.png',
  },
  {
    id: 5,
    title: 'Naga Chicken',
    description: 'Complete account of the system.',
    price: 12.99,
    img: '/categories/fast-food15.png',
  },
  {
    id: 6,
    title: 'Broccoli Pasta Item',
    description: 'Complete account of the system.',
    price: 12.99,
    img: '/categories/fast-food16.png',
  },
]
