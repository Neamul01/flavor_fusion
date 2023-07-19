'use client'
import StyleHeading from '@/components/Common/StyleHeading'
import React from 'react'
import { useRouter } from 'next/router'
import Introduction from '@/components/About/Introduction'
import HomeLayout from '@/components/Layouts/Layout'

function about() {
  return (
    <>
      <StyleHeading text="about us" />
      <Introduction />
    </>
  )
}

export default about
