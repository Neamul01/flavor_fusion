import React from 'react'

// components

import CardLineChart from '@/components/Admin/Cards/CardLineChart'
import CardBarChart from '@/components/Admin/Cards/CardBarChart'
import CardPageVisits from '@/components/Admin/Cards/CardPageVisits'
import CardSocialTraffic from '@/components/Admin/Cards/CardSocialTraffic'
import Admin from '@/components/Layouts/Admin'
import CardLineChart2 from '@/components/Admin/Cards/CardLineChart2'

// layout for page

export default function Dashboard() {
  return (
    <Admin>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart2 />
        </div>
        <div className="w-full xl:w-4/12 px-4">{<CardBarChart />}</div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </Admin>
  )
}