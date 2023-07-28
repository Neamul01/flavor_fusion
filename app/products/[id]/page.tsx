'use client'

import Heading from '@/components/Common/StyleHeading'
import Layout from '@/components/Layouts/Layout'
import Product from '@/components/Products/Product'
import ProductImage from '@/components/Products/ProductImage'
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
