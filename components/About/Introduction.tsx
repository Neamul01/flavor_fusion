import React from 'react'
import TopHeading from '../Home/Common/TopHeading'
import H2heading from '../Home/Common/H2heading'
import HomeLayout from '../Layouts/Layout'

function Introduction() {
  return (
    <div>
      <HomeLayout>
        <div className="flex flex-col">
          <TopHeading text="Introduction of Flavor Fusion" />
          <H2heading text="We Are Experienced Restaurant." color="secondary" />
        </div>
      </HomeLayout>
    </div>
  )
}

export default Introduction
