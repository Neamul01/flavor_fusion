import { Rating } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

type Item = {
  id: number
  img: string
  name: string
  date: string
  comment: string
  rating: number
}

export default function ReviewCard({ item }: { item: Item }) {
  return (
    <div className="bg-primary/5 px-5 py-7">
      <div className="flex flex-col md:flex-row gap-6 md:items-center">
        <div className="relative w-[78px] h-[77px] flex-shrink-0 rounded-lg overflow-hidden">
          <Image alt="comment" src={item.img} fill />
        </div>
        <div className="flex gap-3 flex-col mr-4">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="flex flex-col">
                <p className="text-semibold text-xl">{item.name}</p>
                <Rating value={item.rating} size="xs" />
              </div>
              <p className=" text-secondary/70">{item.date}</p>
            </div>
            <p className="text-primary text-lg cursor-pointer hover:text-secondary/90 transition-transform">
              Replay
            </p>
          </div>
          <p className="text-secondary/70 md:text-lg">{item.comment}</p>
        </div>
      </div>
    </div>
  )
}
