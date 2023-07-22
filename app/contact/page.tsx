'use client'

import React from 'react'
import StyleHeading from '@/components/Common/StyleHeading'
import ShopLocations from '@/components/Contact/ShopLocations'
import ShowMap from '@/components/Contact/ShowMap'
import GetInTouch from '@/components/Contact/GetInTouch'

const breadcrumbsItems = [
  { title: 'Home', href: '/' },
  { title: 'Contact', href: '/contact' },
]

export default function page() {
  return (
    <>
      <StyleHeading breadcrumbsItems={breadcrumbsItems} text="Contact Us" />
      <ShopLocations />
      {/* <ShowMap /> */}
      <GetInTouch />
    </>
  )
}
