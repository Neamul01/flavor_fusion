'use client'
import StyleHeading from '@/components/Common/StyleHeading'
import React from 'react'
import Introduction from '@/components/About/Introduction'
import Summary from '@/components/About/Summary'
import Experties from '@/components/About/Experties'
import AboutGallery from '@/components/About/AboutGallery'

const breadcrumbsItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
]

function about() {
  return (
    <>
      <StyleHeading breadcrumbsItems={breadcrumbsItems} text="about us" />
      <Introduction />
      <Summary />
      <Experties />
      {/* need some modification in gallery */}
      <AboutGallery />
    </>
  )
}

export default about
