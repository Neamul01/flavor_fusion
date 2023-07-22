import Image from 'next/image'
import React from 'react'
import { TfiLocationPin } from 'react-icons/tfi'
import { BiPhoneCall } from 'react-icons/bi'
import { Divider } from '@mantine/core'

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
          <Divider my="xs" label="Label in the center" labelPosition="center" />
        </div>
        {/* address  */}
        <div className="mt-2">
          <div className="flex items-center gap-2">
            <p className="">
              <TfiLocationPin className="text-3xl text-primary" />
            </p>
            <p className="text-secondary/80 hover:text-primary text-lg">
              Mirpur DOHS, House-167/170, Road No-02, Avenue -01
            </p>
          </div>
        </div>
        {/* phone  */}
        <div className="mt-2">
          <div className="flex items-center gap-2">
            <p className="">
              <TfiLocationPin className="text-3xl text-primary" />
            </p>
            <a
              href="tel:+844847393"
              className="text-secondary/80 hover:text-primary text-lg"
            >
              +844847393
            </a>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex items-center gap-2">
            <p className="">
              <BiPhoneCall className="text-3xl text-primary" />
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
