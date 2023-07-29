import React from 'react'
import ReviewCard from './ReviewCard/ReviewCard'

export default function ProductReview() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-semibold mb-2">Comments(02) :</h2>
      <div className="flex flex-col gap-4">
        {reviewCard.map((item) => (
          <ReviewCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

const reviewCard = [
  {
    id: 1,
    name: 'John wick',
    date: '06 july,2022',
    comment:
      'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account.',
    rating: 5,
    img: '/single-item/comment-img-1.png',
  },
  {
    id: 2,
    name: 'John wick',
    date: '06 july,2022',
    comment:
      'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account.',
    rating: 5,
    img: '/single-item/comment-img-2.png',
  },
]
