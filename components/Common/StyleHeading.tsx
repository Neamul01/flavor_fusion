import React from 'react'

function StyleHeading({ text }: { text: string }) {
  return (
    <h2 className="text-6xl font-semibold capitalize text-white">{text}</h2>
  )
}

export default StyleHeading
