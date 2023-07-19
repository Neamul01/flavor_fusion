'use client'

import { useRouter } from 'next/router'
import React from 'react'

function StyleHeading({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  return (
    <h2 className={`${className} text-6xl font-semibold capitalize text-white`}>
      {text}
    </h2>
  )
}

export default StyleHeading
