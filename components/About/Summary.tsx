import React from 'react'
import { LuChefHat } from 'react-icons/lu'

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
    icon: <LuChefHat className="text-primary" size={'3rem'} />,
  },
  {
    id: 2,
    count: 130,
    text: 'Food Category',
    icon: <LuChefHat className="text-primary" size={'3rem'} />,
  },
  {
    id: 3,
    count: '100k',
    text: 'Customer Satisfy',
    icon: <LuChefHat className="text-primary" size={'3rem'} />,
  },
  {
    id: 4,
    count: 120,
    text: 'Award Wining',
    icon: <LuChefHat className="text-primary" size={'3rem'} />,
  },
]

export default function Summary() {
  return (
    <div className="bg-white pb-3">
      <div className="text-secondary container mx-auto grid grid-cols-12 gap-x-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="col-span-3 px-6 py-4 flex items-center gap-2 border border-secondary/10 rounded-xl"
          >
            <LuChefHat className="text-primary" size={'3rem'} />
            <div className="flex flex-col">
              <p className="text-3xl font-semibold">100</p>
              <p className="text-secondary/50 text-xl font-cormorant">
                Professional Chef
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
