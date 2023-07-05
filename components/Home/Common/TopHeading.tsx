import Image from 'next/image'
import React from 'react'

function TopHeading({ text }: { text: string }) {
  return (
    <div className="text-primary text-md flex items-center gap-2">
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
