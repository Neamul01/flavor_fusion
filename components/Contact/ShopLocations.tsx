import React from 'react'
import ShopLocationCard from './ShopLocationCard'

export default function ShopLocations() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-layour_large mx-auto flex justify-between items-center">
        <div className="">
          <ShopLocationCard />
        </div>
        <div className="">
          <ShopLocationCard />
        </div>
      </div>
    </div>
  )
}
