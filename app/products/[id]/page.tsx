'use client'

import Heading from '@/components/Common/StyleHeading'
import Layout from '@/components/Layouts/Layout'
import Product from '@/components/Products/Product'
import ProductImage from '@/components/Products/ProductImage'
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

export default function Page({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState<string | null>('first')

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
        <div className="py-10">
          <h2 className="text-3xl md:text-5xl font-semibold">Item Details</h2>
          <Tabs
            defaultValue="details"
            value={activeTab}
            onTabChange={setActiveTab}
            className="flex gap-4 my-10"
          >
            <Tabs.List className="flex flex-col gap-5">
              <Tabs.Tab
                value="details"
                className={`min-w-[10rem] py-4 rounded-none ${
                  activeTab === 'details'
                    ? 'bg-secondary hover:bg-secondary border-none'
                    : 'bg-white bg-secondary/5'
                }`}
              >
                <div
                  className={
                    activeTab === 'details' ? 'text-white' : 'text-secondary'
                  }
                >
                  details
                </div>
              </Tabs.Tab>
              <Tabs.Tab
                value="review"
                className={`min-w-[10rem] py-4 rounded-none ${
                  activeTab === 'review'
                    ? 'bg-secondary hover:bg-secondary border-none'
                    : 'bg-white bg-secondary/5'
                }`}
              >
                <div
                  className={
                    activeTab === 'review' ? 'text-white' : 'text-secondary'
                  }
                >
                  review
                </div>
              </Tabs.Tab>
            </Tabs.List>

            <div className="ml-10">
              <Tabs.Panel value="details">
                <p className="text-lg text-secondary/80">
                  Aenean dolor massa, rhoncus ut tortor in, pretium tempus
                  neque. Vestibulum venenatis leo et dictum finibus. Nulla
                  vulputate dolor sit amet tristique dapibus. Maecenas posuere
                  luctus leo, non consequat felis ullamc orper non. Aliquam erat
                  volutpat. Donec vitae porta enim. Cras eu volutpat dolor,
                  vitae accumsan tellus. Donec pulvinar auctor nunc, et gravida
                  elit porta non. Aliquam erat volutpat. Proin facilisis
                  interdum felis, sit amet pretium purus feugiat ac. Donec in
                  leo metus. Sed quis dui nec justo ullamcorper molestie. Mauris
                  consequat lacinia est, eget tincidunt leo ornare sed
                </p>
                <p className="text-lg text-secondary/80">
                  Aenean dolor massa, rhoncus ut tortor in, pretium tempus
                  neque. Vestibulum venenatis leo et dictum finibus dapi bus
                  Maecenas posuere luctus leo, non consequat felis ullamcorper
                  non.
                </p>
              </Tabs.Panel>

              <Tabs.Panel value="review">review tab content</Tabs.Panel>
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
