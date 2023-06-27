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
        <div className=" grid grid-cols-12 gap-y-8 mt-12">
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <div
                className="col-span-4 border rounded-xl max-w-[26rem]"
                key={item}
              >
                <div className="border rounded-t-xl overflow-hidden">
                  <Image
                    src={'/MenuItem/food-item-1.png'}
                    alt="food Item"
                    width={416}
                    height={320}
                  />
                </div>
                <div className="flex flex-col items-center mt-4 mb-6">
                  <h2 className="text-3xl font-cormorant font-semibold my-4">
                    Full Chicken
                  </h2>
                  <p className="text-secondary/75 leading-7 font-jost max-w-[15.625rem] text-center">
                    It is a long established fact that a reader will be
                    distracted.
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MenuList
