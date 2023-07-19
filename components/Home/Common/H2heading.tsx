import React from 'react'

function H2heading({
  text,
  color = 'secondary',
}: {
  text: string
  color?: 'secondary' | 'white'
}) {
  return (
    <h2
      className={`text-4xl md:text-6xl font-bold ${
        color === 'white' ? 'text-white' : 'text-secondary'
      }`}
    >
      {text}
    </h2>
  )
}

export default H2heading
