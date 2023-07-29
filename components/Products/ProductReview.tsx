import React from 'react'
import ReviewCard from './ReviewCard/ReviewCard'

export default function ProductReview() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-semibold mb-2">Comments(02) :</h2>
      <div className="flex flex-col gap-3">
        <ReviewCard />
      </div>
    </div>
  )
}
