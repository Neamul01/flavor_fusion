import Image from 'next/image'
import React from 'react'
import { TfiLocationPin } from 'react-icons/tfi'
import { BiPhoneCall } from 'react-icons/bi'
import { Divider } from '@mantine/core'
import { AiOutlineMail } from 'react-icons/ai'

type ShopLocationCardProps = {
  title: string
  address: string
  phone: string
  email: string
  img: string
  id: number
}

export default function ShopLocationCard({
  location,
}: {
  location: ShopLocationCardProps
}) {
  return (
    <div className="flex">
      <Image
        src={location.img}
        width={368}
        height={375}
        alt="shop"
        className="rounded-tl-xl rounded-br-xl overflow-hidden"
      />
      <div className="border m-6 ml-0 px-5 py-8 rounded-tr-xl rounded-br-xl w-[20rem]">
        <div className=" inline-block">
          <h2 className=" text-3xl font-semibold">{location.title}</h2>
          <Divider
            my="xs"
            labelPosition="center"
            className="mt-0"
            color={'var(--primary-color)'}
            label={
              <p className="w-5 h-5 relative">
                <Image
                  src={'/sub-title-vec.svg'}
                  className="object-contain"
                  alt="vec"
                  fill
                />
              </p>
            }
          />
        </div>
        <div className="flex flex-col gap-4 mt-3">
          {/* address  */}
          <div className="flex items-center gap-2">
            <p className="border rounded-full border-primary p-1">
              <TfiLocationPin className="text-xl text-primary" />
            </p>
            <p className="text-secondary/80 hover:text-primary text-lg">
              {location.address}
            </p>
          </div>
          {/* phone  */}
          <div className="flex items-center gap-2">
            <p className="border rounded-full border-primary p-1">
              <BiPhoneCall className="text-xl text-primary" />
            </p>
            <a
              href={`tel:${location.phone}`}
              className="text-secondary/80 hover:text-primary text-lg"
            >
              {location.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <p className="border rounded-full border-primary p-1">
              <AiOutlineMail className="text-xl text-primary" />
            </p>
            <a
              href={`mailto:${location.email}`}
              className="text-secondary/80 hover:text-primary text-lg"
            >
              {location.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
