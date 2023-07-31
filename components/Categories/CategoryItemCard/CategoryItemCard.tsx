import Image from 'next/image'
import React from 'react'

type Item = {
  id: number
  title: string
  description: string
  price: number
  img: string
}

export default function CategoryItemCard({ item }: { item: Item }) {
  return (
    <div className="p-2 flex gap-3">
      <div className="rounded-lg overflow-hidden h-[116px] w-[116px] relative ">
        <Image src={item.img} alt="food item" fill />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold">{item.title}</h2>
        <p className="text-secondary/70">{item.description}</p>
        <div className="">
          <p className="inline-block px-2 py-1 border rounded-lg text-secondary/70">
            <span className="text-primary text-xl font-semibold mr-1">
              {item.price}
            </span>
            Only
          </p>
        </div>
      </div>
    </div>
  )
}
