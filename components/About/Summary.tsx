import React from 'react'
import { SiCodechef } from 'react-icons/si'
import { PiBowlFood } from 'react-icons/pi'
import { BsPeople } from 'react-icons/bs'
import { LiaAwardSolid } from 'react-icons/lia'
import styles from './about.module.css'

type SummeryItem = {
  id: number
  count: number | string
  text: string
  icon: React.ReactNode
}

const summeryItems: SummeryItem[] = [
  {
    id: 1,
    count: 100,
    text: 'Professional Chef',
    icon: <SiCodechef className="text-primary" size={'3rem'} />,
  },
  {
    id: 2,
    count: 130,
    text: 'Food Category',
    icon: <PiBowlFood className="text-primary" size={'3rem'} />,
  },
  {
    id: 3,
    count: '100k',
    text: 'Customer Satisfy',
    icon: <BsPeople className="text-primary" size={'3rem'} />,
  },
  {
    id: 4,
    count: 120,
    text: 'Award Wining',
    icon: <LiaAwardSolid className="text-primary" size={'3rem'} />,
  },
]

export default function Summary() {
  return (
    <div className={`bg-white py-20 ${styles.about_counter}`}>
      <div className="text-secondary container mx-auto grid grid-cols-12 gap-x-4">
        {summeryItems.map((item) => (
          <div
            key={item.id}
            className={`${styles.counter_single} col-span-3 px-6 py-4 flex items-center gap-2 border border-secondary/10 rounded-xl`}
          >
            {/* <LuChefHat className="text-primary" size={'3rem'} /> */}
            {item.icon}
            <div className="flex flex-col">
              <p className="text-3xl font-semibold">{item.count}</p>
              <p className="text-secondary/50 text-xl font-cormorant">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
