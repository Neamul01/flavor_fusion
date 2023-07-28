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
        <div className="grid grid-cols-12 py-2">
          <div className="col-span-6">
            <ProductImage />
          </div>
          <div className="col-span-6">
            <Product params={params.id} />
          </div>
        </div>
      </Layout>
    </div>
  )
}
