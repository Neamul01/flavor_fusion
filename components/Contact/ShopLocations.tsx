import React from 'react'
import ShopLocationCard from './ShopLocationCard'

export default function ShopLocations() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-layour_large mx-auto flex flex-col md:flex-row justify-between items-center">
        {locations.map((location) => (
          <div className="" key={location.id}>
            <ShopLocationCard location={location} />
          </div>
        ))}
      </div>
    </div>
  )
}

const locations = [
  {
    id: 1,
    img: '/contact/contact-img-01.png',
    title: 'Washington Branch',
    address: 'Mirpur DOHS, House-167/170, Road No-02, Avenue -01',
    phone: '+880 123 456 789',
    email: 'info@example.com',
  },
  {
    id: 2,
    img: '/contact/contact-img-02.png',
    title: 'Italy Branch',
    address: ' House-167/170, Road No-02, Avenue -01',
    phone: '+06 123 456 789',
    email: 'info@example.com',
  },
]
