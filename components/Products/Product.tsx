'use client'
import React from 'react'
import Layout from '../Layouts/Layout'
import { useParams } from 'next/navigation'
import { Button, Rating } from '@mantine/core'
import './styles.css'
import H2heading from '../Home/Common/H2heading'
import { useCounter } from '@mantine/hooks'
import CustomButton from '../Common/CustomButton'
import { AiOutlinePlus } from 'react-icons/ai'

export default function Product({ params }: { params: string }) {
  const [count, handlers] = useCounter(0, { min: 0, max: 10 })
  //   const params = useParams()
  return (
    <Layout bg="white" color="secondary">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <Rating defaultValue={5} color="var(--primary-color)" size="md" />
          <p className="text-lg text-secondary/70">(32 Review)</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold">
          To Make Delicious Food Item.
        </h2>
        <div className="price">
          <span className="font-bold text-4xl text-primary mr-2">$30</span>
          <del className="text-xl font-bold text-secondary/50">$40</del>
        </div>
        <p className="text-secondary/60 text-lg my-8">
          Donec bibendum enim ut elit porta ullamcorper enim. Vestibulum Nai
          wekemd bendum enim ut elit porta ullamcorper enim. Vestibulum Nai
          sgdad bendum enim ut elit porta ullamcorper enim. Vestibulum Nai
          wekemdini iaculis vitae nulla.nec bibendum enim ut elit porta ullamcor
        </p>
        <div className="flex items-center gap-6">
          <div className="product-count flex items-center gap-2 p-1 border rounded-3xl border-secondary/80">
            {/* <CustomButton name='product count' text='Increment' onClick={handlers.increment}>Increment</CustomButton> */}
            <CustomButton
              onClick={handlers.increment}
              name="product count"
              text="+"
              className="bg-primary text-white font-semibold text-5xl px-3 py-3"
              withIcon={false}
            />
            {count}
            <CustomButton
              onClick={handlers.decrement}
              name="product count"
              text="-"
              className="bg-primary text-white font-semibold text-5xl px-4 py-3"
              withIcon={false}
            />
            {/* <Button onClick={handlers.decrement}>Decrement</Button> */}
          </div>
          <CustomButton
            name="add_to_button"
            text="Add to Cart"
            withIcon={false}
            size="lg"
            className="rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-xl md:text-2xl font-semibold">Category:</h2>
          <p className="text-secondary/70 text-sm md:text-base">
            Food(05), Modern Life(10), Healthy(02), Desset(04)
          </p>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-xl md:text-2xl font-semibold">Tag:</h2>
          <p className="text-secondary/70 text-sm md:text-base">
            Dinner, Breakfast, Berverage, Sea Food, Menu
          </p>
        </div>
      </div>
    </Layout>
  )
}
