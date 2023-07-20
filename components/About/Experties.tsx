import React from 'react'
import Layout from '../Layouts/Layout'
import H2heading from '../Home/Common/H2heading'
import TopHeading from '../Home/Common/TopHeading'

export default function Experties() {
  return (
    <div>
      <Layout className="py-20">
        <div className="flex flex-col items-center justify-center">
          <TopHeading text="Experties" />
          <H2heading text="Cooking Experties" />
        </div>
        <div>Experties</div>
      </Layout>
    </div>
  )
}
