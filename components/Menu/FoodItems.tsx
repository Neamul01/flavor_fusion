import React, { useState } from 'react'
import Layout from '../Layouts/Layout'
import FoodCard from '../Common/FoodCard'
import CustomButton from '../Common/CustomButton'

export default function FoodItems() {
  const [number, setNumber] = useState(6)

  const selectedItems = menuItems.slice(0, number)
  const shouldDisableButton = number >= menuItems.length && true

  return (
    <Layout bg="white" className="py-20 ">
      <div className="w-full grid md:grid-cols-12">
        {selectedItems.map((item) => (
          <div className="col-span-4" key={item.id}>
            <FoodCard item={item} />
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center mt-8">
        <CustomButton
          withIcon={false}
          name="view_more"
          text={shouldDisableButton ? 'Completed' : 'View More'}
          color="secondary"
          className={`rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none ${
            shouldDisableButton === true && 'text-secondary/50'
          }`}
          onClick={() => setNumber(number + 6)}
          disabled={shouldDisableButton}
        />
      </div>
    </Layout>
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
