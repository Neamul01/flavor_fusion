import React from 'react'
import HomeLayout from '../Common/HomeLayout'
import TopHeading from '../Common/TopHeading'
import H2heading from '../Common/H2heading'
import Image from 'next/image'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import './experties.css'

const expoerties = [
  {
    id: 1,
    name: 'Mr. William John',
    title: 'Chef of Head',
    img: '/experties/chef-kitchen1.png',
    links: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },
  {
    id: 2,
    name: 'Mrs. Asha Haque',
    title: 'Chef of Head',
    img: '/experties/chef-kitchen2.png',
    links: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },
  {
    id: 3,
    name: 'Mr. Najmul Haque',
    title: 'Chef of Head',
    img: '/experties/chef-kitchen3.png',
    links: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },
]

function Experties() {
  return (
    <HomeLayout>
      <div className="mb-32">
        <div className=" flex flex-col items-center justify-center gap-3">
          <TopHeading text="Our Experties" />
          <H2heading text="Our Special Experties" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-10">
          {expoerties.map((item) => {
            return (
              <div
                key={item.id}
                className="col-span-4 border rounded-xl overflow-hidden experties"
              >
                <div className="relative w-full h-[300px] md:h-[340px]">
                  <Image src={item.img} alt="experts" fill />
                </div>
                <div className="flex items-center flex-col my-8 expoerties-profile">
                  <h3 className="text-2xl font-semibold capitalize hover:text-primary cursor-pointer">
                    {item.name}
                  </h3>
                  <p className="text-base text-secondary/75">{item.title}</p>
                  <ul>
                    <li>
                      <a
                        href={item.links.facebook}
                        className="text-secondary/75 hover:text-primary"
                      >
                        <BiLogoFacebook />
                      </a>
                    </li>
                    <li>
                      <a
                        href={item.links.instagram}
                        className="text-secondary/75 hover:text-primary"
                      >
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li>
                      <a
                        href={item.links.linkedin}
                        className="text-secondary/75 hover:text-primary"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a
                        href={item.links.twitter}
                        className="text-secondary/75 hover:text-primary"
                      >
                        <AiOutlineTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </HomeLayout>
  )
}

export default Experties
