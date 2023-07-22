'use client'

import React from 'react'
import StyleHeading from '@/components/Common/StyleHeading'
import FoodItems from '@/components/Menu/FoodItems'

const breadcrumbsItems = [
  { title: 'Home', href: '/' },
  { title: 'Menu', href: '/menu' },
]

export default function page() {
  return (
    <>
      <StyleHeading breadcrumbsItems={breadcrumbsItems} text="Menu List" />
      <FoodItems />
    </>
  )
}
