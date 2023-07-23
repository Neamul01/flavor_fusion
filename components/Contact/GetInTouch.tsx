import React from 'react'
import Layout from '../Layouts/Layout'
import TopHeading from '../Home/Common/TopHeading'
import H2heading from '../Home/Common/H2heading'
import './contact.css'

export default function GetInTouch() {
  return (
    <Layout className="py-20">
      <div className="contact_form relative bg-[url('/contact/reservation-1-bg.png')] w-full bg-no-repeat bg-cover rounded-lg p-20">
        <div className="flex flex-col items-center justify-center z-20">
          <TopHeading text="Contact Us" />
          <H2heading color="white" text="Get In Touch" />
        </div>
        <div className=""></div>
      </div>
    </Layout>
  )
}
