'use client'
import StyleHeading from '@/components/Common/StyleHeading'
import React from 'react'
import { useRouter } from 'next/router'
import Introduction from '@/components/About/Introduction'
import HomeLayout from '@/components/Layouts/HomeLayout'

function about() {
  return (
    <>
      <StyleHeading text="about us" />
      <HomeLayout bg="secondary">
        <Introduction />
      </HomeLayout>
    </>
  )
}

export default about
