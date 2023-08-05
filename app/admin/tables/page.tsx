import React from 'react'

// components

import CardTable from '@/components/Admin/Cards/CardTable'
import Admin from '@/components/Layouts/Admin'

// layout for page

export default function Tables() {
  return (
    <Admin>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </Admin>
  )
}
