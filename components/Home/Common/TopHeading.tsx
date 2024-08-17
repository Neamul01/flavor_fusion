import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

function TopHeading({
  text,
  color = 'text-primary',
  className,
}: {
  text: string
  color?: 'text-white' | 'text-primary' | 'text-secondary'
  className?: string
}) {
  return (
    <div
      className={twMerge(
        color,
        'text-md flex items-center gap-2 z-20',
        className
      )}
    >
      <p className="w-5 h-5 relative">
        <Image
          src={'/sub-title-vec.svg'}
          className="object-contain"
          alt="vec"
          fill
        />
      </p>
      <p className="text-sm md:text-base">{text}</p>
      <p className="w-5 h-5 relative">
        <Image src={'/sub-title-vec.svg'} alt="vec" fill />
      </p>
    </div>
  )
}

export default TopHeading
