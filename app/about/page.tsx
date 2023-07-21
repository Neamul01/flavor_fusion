'use client'
import StyleHeading from '@/components/Common/StyleHeading'
import React from 'react'
import { useRouter } from 'next/router'
import Introduction from '@/components/About/Introduction'
import HomeLayout from '@/components/Layouts/Layout'
import Gallery from '@/components/Home/Gallery/Gallery'
import Summary from '@/components/About/Summary'
import Experties from '@/components/About/Experties'

function about() {
  return (
    <>
      <StyleHeading text="about us" />
      <Introduction />
      <Summary />
      <Experties />
      {/* need some modification in gallery */}
      {/* <Gallery /> */}
    </>
  )
}

export default about
