'use client'
import StyleHeading from '@/components/Common/StyleHeading'
import HomeLayout from '@/components/Layouts/HomeLayout'
import React from 'react'
import { useRouter } from 'next/router'
import Heading from '@/components/About/Heading'

function about() {
  return (
    <div>
      <Heading />
    </div>
  )
}

export default about
