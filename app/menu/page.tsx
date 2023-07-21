'use client'

import React from 'react'
import StyleHeading from '@/components/Common/StyleHeading'

const breadcrumbsItems = [
  { title: 'Home', href: '/' },
  { title: 'Menu', href: '/menu' },
]

export default function page() {
  return (
    <div>
      <StyleHeading breadcrumbsItems={breadcrumbsItems} text="Menu List" />
    </div>
  )
}
