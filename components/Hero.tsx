import { Jost } from 'next/font/google'
import React from 'react'
const jost = Jost({ subsets: ['latin'] })

function Hero() {
  // return <div className={`${jost.className}`}>Hero</div>
  return (
    <div>
      <h1 className="text-4xl">Hero item</h1>
      <p className={`font-jost`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nesciunt
        aut enim. Illo, adipisci pariatur?
      </p>
    </div>
  )
}

export default Hero
