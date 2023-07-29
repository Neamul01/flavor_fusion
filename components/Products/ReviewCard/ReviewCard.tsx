import { Rating } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

export default function ReviewCard() {
  return (
    <div className="bg-primary/10 px-5 py-7">
      <div className="flex gap-6">
        <div className="relative w-[78px] h-[77px] ">
          <Image alt="comment" src={'/single-item/comment-img-1.png'} fill />
        </div>
        <div className="flex gap-3 flex-col">
          <div className="flex justify-between flex-col">
            <p className="text-semibold text-xl">John wick,</p>
            <Rating value={5} size="xs" />
          </div>
          <p className="text-secondary/70 text-lg">
            I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account.
          </p>
        </div>
      </div>
    </div>
  )
}
