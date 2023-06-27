import React from 'react'
import TopHeading from '../Common/TopHeading'
import H2heading from '../Common/H2heading'
import CustomButton from '@/components/Common/CustomButton'
import Image from 'next/image'

function MenuList() {
  return (
    <div className="text-secondary bg-white w-full">
      <div className="max-w-layout mx-auto flex flex-col py-20">
        <div className="w-full flex justify-between">
          <div className="">
            <TopHeading text="Menu List" />
            <H2heading text="Find Your Food Item" />
          </div>
          <CustomButton name="view-more" text="View More" color="secondary" />
        </div>
        <div className=" grid grid-cols-12 gap-10">
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <div className="col-span-4" key={item}>
                <div className="">
                  <Image
                    src={'/MenuItem/food-item-1.png'}
                    alt="food Item"
                    width={416}
                    height={320}
                  />
                </div>
                div.flex.items-center
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MenuList
