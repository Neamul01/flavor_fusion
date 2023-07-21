'use client'
import StyleHeading from '@/components/Common/StyleHeading'
import React from 'react'
import Introduction from '@/components/About/Introduction'
import Summary from '@/components/About/Summary'
import Experties from '@/components/About/Experties'
import Gallery from '@/components/Home/Gallery/Gallery'

function about() {
  return (
    <>
      <StyleHeading text="about us" />
      <Introduction />
      <Summary />
      <Experties />
      {/* need some modification in gallery */}
      <Gallery />
    </>
  )
}

export default about
