'use client'

import Heading from '@/components/Common/StyleHeading'
import Layout from '@/components/Layouts/Layout'
import Product from '@/components/Products/Product'
import ProductImage from '@/components/Products/ProductImage'
import { Tabs } from '@mantine/core'
import React from 'react'

const breadcrumbsItems = [
  {
    title: 'Home',
    href: '/',
    id: 1,
  },
  {
    title: 'Products',
    href: '/products',
    id: 2,
  },
]

export default function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <Heading text="Single page" breadcrumbsItems={breadcrumbsItems} />
      <Layout bg="white" color="secondary">
        <div className="grid grid-cols-12 py-20">
          <div className="col-span-6 mr-4">
            <ProductImage items={swiperItems} />
          </div>
          <div className="col-span-6 px-4">
            <Product params={params.id} />
          </div>
        </div>
        <div className="my-10">
          <h2 className="text-3xl md:text-5xl font-semibold">Item Details</h2>
          <Tabs defaultValue="gallery" className="flex gap-4 my-10">
            <Tabs.List className="flex flex-col gap-3">
              <Tabs.Tab value="gallery" className="bg-secondary">
                <div className="text-xl text-white">Gallery</div>
              </Tabs.Tab>
              <Tabs.Tab value="messages" className="bg-secondary">
                <div className="text-xl text-white">Messages</div>
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery" pt="xs">
              Gallery tab content
            </Tabs.Panel>

            <Tabs.Panel value="messages" pt="xs">
              Messages tab content
            </Tabs.Panel>
          </Tabs>
        </div>
      </Layout>
    </div>
  )
}

const swiperItems = [
  {
    id: 1,
    img: '/single-item/card-big-01.png',
  },
  {
    id: 2,
    img: '/single-item/card-big-02.png',
  },
  {
    id: 3,
    img: '/single-item/card-big-03.png',
  },
  {
    id: 4,
    img: '/single-item/card-big-04.png',
  },
  {
    id: 5,
    img: '/single-item/card-big-01.png',
  },
]
