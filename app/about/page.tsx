import StyleHeading from '@/components/Common/StyleHeading'
import HomeLayout from '@/components/Layouts/HomeLayout'
import React from 'react'

function about() {
  return (
    <div className="">
      <HomeLayout bg="secondary" parentClass="h-40">
        <StyleHeading text="about us" />
      </HomeLayout>
    </div>
  )
}

export default about
