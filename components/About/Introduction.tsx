import React from 'react'
import TopHeading from '../Home/Common/TopHeading'
import H2heading from '../Home/Common/H2heading'
import HomeLayout from '../Layouts/Layout'
import Image from 'next/image'
import { GiSupersonicArrow } from 'react-icons/gi'
import { BsCheck2Circle } from 'react-icons/bs'
import styles from './about.module.css'
import { motion } from 'framer-motion'

type Point = {
  id: number
  text: string
}

const points: Point[] = [
  {
    id: 1,
    text: 'Delicious Food.',
  },
  {
    id: 2,
    text: 'Cost Effective.',
  },
  {
    id: 3,
    text: 'Clean Environment.',
  },
  {
    id: 4,
    text: 'Expert Chef.',
  },
  {
    id: 5,
    text: 'Letraset Sheets.',
  },
  {
    id: 6,
    text: 'Quality Food.',
  },
]

function Introduction() {
  return (
    <div className="py-20 bg-white">
      <HomeLayout className="flex flex-col">
        <TopHeading text="Introduction of Flavor Fusion" />
        <H2heading text="We Are Experienced Restaurant." color="secondary" />
      </HomeLayout>
      <div className="max-w-layour_large mx-auto mt-9 flex flex-col md:flex-row items-center gap-6">
        {/* left image  */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className=" relative h-[19rem] md:h-[34.1875rem] w-[18rem] md:w-[33.125rem] rounded-tl-xl rounded-br-xl overflow-hidden"
        >
          <Image src={'/about/intro-left-img.png'} alt="chef" fill />
        </motion.div>
        {/* right content  */}
        <div className="flex flex-col gap-8 mx-4 md:mx-0">
          <div className="flex flex-col md:flex-row items-center gap-4 max-w-4xl">
            <div className="px-8 py-4 border border-secondary/10 rounded-tl-lg rounded-br-lg mr-auto md:mr-0">
              <GiSupersonicArrow className="text-primary text-2xl mb-2" />
              <h2 className="text-2xl font-semibold whitespace-nowrap">
                Our Mission
              </h2>
            </div>
            <p className="text-secondary/70 text-lg leading-6 md:leading-none">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
          <div className="flex h-full w-full justify-between">
            <div className="flex flex-col gap-8">
              <ul className="flex flex-col flex-wrap md:max-h-32 gap-2 md:gap-4 font-jost">
                {points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 ">
                    <BsCheck2Circle className="text-primary text-xl" />
                    <span className="text-lg text-secondary/80">
                      {point.text}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="author-area relative">
                <div
                  className={`${styles.authorContent} md:after:top-[84%] after:top-[91%] md:after:left-[10%] after:left-[22%] max-w-xl md:mr-8 border border-secondary/10 p-6 rounded-xl`}
                >
                  <p className="text-xl text-secondary/60 font-normal text-center font-jost">
                    &quot;Welcome our restaurant! Our Restaurant is the best as
                    like delicious food, nutrition food etc in world-wide.&quot;
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center ml-12">
                <Image
                  src={'/about/intro-author.png'}
                  alt="author"
                  height={70}
                  width={70}
                  className="rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="text-2xl font-semibold">Mr. Noman</h2>
                  <p className="text-sm text-secondary/60">CEO & Founder</p>
                </div>
              </div>
            </div>
            {/* right image  */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="hidden md:block"
            >
              <Image
                src={'/about/intro-right-img.png'}
                alt="intro right"
                width={370}
                height={382}
                className="rounded-tl-xl rounded-br-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
