import React from 'react'

function H2heading({
  text,
  color = 'secondary' || 'white',
}: {
  text: string
  color?: string
}) {
  return (
    <h2
      className={`text-6xl font-bold ${
        color === 'white' ? 'text-white' : 'text-secondary'
      }`}
    >
      {text}
    </h2>
  )
}

export default H2heading
