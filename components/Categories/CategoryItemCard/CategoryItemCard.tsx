import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { motion } from 'framer-motion'

type Item = {
  id: number
  title: string
  description: string
  price: number
  img: string
}

export default function CategoryItemCard({ item }: { item: Item }) {
  const route = useRouter()
  return (
    <div className="p-2 flex flex-col md:flex-row items-center md:items-start gap-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="rounded-lg overflow-hidden h-[116px] w-[116px] relative "
      >
        <Image src={item.img} alt="food item" fill />
      </motion.div>
      <div className="flex flex-col items-center md:items-start">
        <h2
          onClick={() => route.push(`/products/${item.title}`)}
          className="text-xl md:text-2xl font-bold cursor-pointer hover:text-primary transition-transform"
        >
          {item.title}
        </h2>
        <p className="text-secondary/70 text-sm md:text-base mb-3">
          {item.description}
        </p>
        <div className="">
          <p className="inline-block px-2 py-1 border text-sm md:text-base rounded-lg text-secondary/70">
            <span className="text-primary text-lg md:text-xl font-semibold mr-1">
              ${item.price}
            </span>
            Only
          </p>
        </div>
      </div>
    </div>
  )
}
