import React from 'react'

function H2heading({
  text,
  color = 'secondary',
  size = 'heading',
}: {
  text: string
  color?: 'secondary' | 'white'
  size?: 'heading' | 'sm'
}) {
  return (
    <h2
      className={`${
        size === 'heading' ? 'text-4xl md:text-6xl' : 'text-2xl md:text-3xl'
      } font-bold ${color === 'white' ? 'text-white' : 'text-secondary'}`}
    >
      {text}
    </h2>
  )
}

export default H2heading
