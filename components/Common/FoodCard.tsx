import { Badge } from '@mantine/core'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { motion } from 'framer-motion'

type Item = {
  id: number
  name: string
  description: string
  img: string
  price: string
  category: string
}
export default function FoodCard({ item }: { item: Item }) {
  const router = useRouter()
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className=" border rounded-xl max-w-[26rem] relative"
      key={item.id}
    >
      <div className="border rounded-t-xl overflow-hidden relative">
        <Image
          onClick={() => router.push(`/products/${item.id}`)}
          src={item.img}
          alt={item.name}
          width={416}
          height={320}
          className="cursor-pointer"
        />
        <Badge
          size="xl"
          className="absolute top-8 -right-3 z-40 bg-white text-secondary capitalize font-cormorant text-2xl"
        >
          {item.category}
        </Badge>
      </div>
      <Badge
        size="xl"
        className="absolute left-[43%] top-[58%] md:top-[48%] lg:top-[62%] z-40 bg-white text-primary border shadow capitalize font-jost font-semibold text-xl px-6 "
      >
        ${item.price}
      </Badge>
      <div className="flex flex-col items-center mt-4 mb-6">
        <h2
          onClick={() => router.push(`/products/${item.id}`)}
          className="text-3xl font-cormorant font-semibold my-4 cursor-pointer"
        >
          {item.name}
        </h2>
        <p className="text-secondary/75 leading-7 font-jost max-w-[15.625rem] text-center">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}
