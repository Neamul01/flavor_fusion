import Image from 'next/image'
import React from 'react'
import { TfiLocationPin } from 'react-icons/tfi'
import { BiPhoneCall } from 'react-icons/bi'
import { Divider } from '@mantine/core'
import { AiOutlineMail } from 'react-icons/ai'

const address = [
  {
    id: 1,
    title: 'Washington Branch',
    address: 'Mirpur DOHS, House-167/170, Road No-02, Avenue -01',
    phone: '+844847393',
    email: '',
  },
]

export default function ShopLocationCard() {
  return (
    <div className="flex">
      <Image
        src="/contact/contact-img-01.png"
        width={368}
        height={375}
        alt="shop"
        className="rounded-tl-xl rounded-br-xl overflow-hidden"
      />
      <div className="border m-6 ml-0 px-5 py-8 rounded-tr-xl rounded-br-xl w-[20rem]">
        <div className="">
          <h2 className="text-3xl font-semibold">Washington Branch</h2>
          <Divider
            my="xs"
            label="Label in the center"
            labelPosition="center"
            className="mt-0"
            color={'var(--primary-color)'}
          />
        </div>
        <div className="flex flex-col gap-4 mt-3">
          {/* address  */}
          <div className="flex items-center gap-2">
            <p className="border rounded-full border-primary p-1">
              <TfiLocationPin className="text-xl text-primary" />
            </p>
            <p className="text-secondary/80 hover:text-primary text-lg">
              Mirpur DOHS, House-167/170, Road No-02, Avenue -01
            </p>
          </div>
          {/* phone  */}
          <div className="flex items-center gap-2">
            <p className="border rounded-full border-primary p-1">
              <BiPhoneCall className="text-xl text-primary" />
            </p>
            <a
              href="tel:+844847393"
              className="text-secondary/80 hover:text-primary text-lg"
            >
              +844847393
            </a>
          </div>
          <div className="flex items-center gap-2">
            <p className="border rounded-full border-primary p-1">
              <AiOutlineMail className="text-xl text-primary" />
            </p>
            <a
              href="mailto:info@example.com"
              className="text-secondary/80 hover:text-primary text-lg"
            >
              info@example.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
