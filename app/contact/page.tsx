'use client'

import React from 'react'
import StyleHeading from '@/components/Common/StyleHeading'
import ShopLocations from '@/components/Contact/ShopLocations'

const breadcrumbsItems = [
  { title: 'Home', href: '/' },
  { title: 'Contact', href: '/contact' },
]

export default function page() {
  return (
    <>
      <StyleHeading breadcrumbsItems={breadcrumbsItems} text="Contact Us" />
      <ShopLocations />
    </>
  )
}
