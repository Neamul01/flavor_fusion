'use client'

import Heading from '@/components/Common/StyleHeading'
import Layout from '@/components/Layouts/Layout'
import Product from '@/components/Products/Product'
import ProductDetails from '@/components/Products/ProductDetails'
import ProductImage from '@/components/Products/ProductImage'
import ProductReview from '@/components/Products/ProductReview'
import { Tabs } from '@mantine/core'
import React, { useState } from 'react'

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

const tabs = [
  {
    id: 1,
    name: 'details',
  },
  {
    id: 2,
    name: 'review',
  },
]

export default function Page({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState<string | null>('details')

  return (
    <div>
      <Heading text="Single page" breadcrumbsItems={breadcrumbsItems} />
      <Layout bg="white" color="secondary">
        {/* image and short details section  */}
        <div className="grid grid-cols-12 py-20">
          <div className="col-span-12 md:col-span-6 md:mr-4 mb-10">
            <ProductImage items={swiperItems} />
          </div>
          <div className="col-span-12 md:col-span-6 md:px-4">
            <Product params={params.id} />
          </div>
        </div>

        {/* details sectioon */}
        <div className="py-10">
          <h2 className="text-3xl md:text-5xl font-semibold">Item Details</h2>

          {/******** tabs */}
          <Tabs
            // defaultValue="details"
            value={activeTab}
            onTabChange={setActiveTab}
            className="flex flex-col md:flex-row gap-4 my-10"
          >
            {/* tabs for details */}
            <Tabs.List className="flex flex-col gap-5 min-w-[14rem] border-none mb-10 md:mb-0">
              {tabs.map((tab) => (
                <Tabs.Tab
                  key={tab.id}
                  value={tab.name}
                  className={` py-4 rounded-none bg-secondary/10 ${
                    activeTab === tab.name
                      ? 'bg-secondary hover:bg-secondary border-none'
                      : 'bg-white bg-secondary/5'
                  }`}
                >
                  <span
                    className={`font-jost text-lg font-semibold capitalize ${
                      activeTab === tab.name ? 'text-white' : 'text-secondary'
                    }`}
                  >
                    {tab.name}
                  </span>
                </Tabs.Tab>
              ))}
            </Tabs.List>

            {/* tab items for above tabs */}
            <div className="md:ml-10 w-full">
              <Tabs.Panel value="details">
                <ProductDetails />
              </Tabs.Panel>

              <Tabs.Panel value="review">
                <ProductReview />
              </Tabs.Panel>
            </div>
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
