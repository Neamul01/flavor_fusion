import React from 'react'
import { twMerge } from 'tailwind-merge'

function H2heading({
  text,
  color = 'secondary',
  size = 'heading',
  className,
}: {
  text: string
  color?: 'secondary' | 'white'
  size?: 'heading' | 'sm'
  className?: string
}) {
  return (
    <h2
      className={twMerge(
        size === 'heading' ? 'text-4xl md:text-6xl' : 'text-2xl md:text-3xl',
        color === 'white' ? 'text-white' : 'text-secondary',
        'font-bold z-20',
        className
      )}
    >
      {text}
    </h2>
  )
}

export default H2heading
