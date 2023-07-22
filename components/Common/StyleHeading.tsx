import React, { use } from 'react'
import HomeLayout from '../Layouts/Layout'
import styles from './styles.module.css'
import { Anchor, Breadcrumbs } from '@mantine/core'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { usePathname } from 'next/navigation'

type BreadcrumbsItem = {
  title: string
  href: string
}

function Heading({
  text,
  breadcrumbsItems,
}: {
  text: string
  breadcrumbsItems: BreadcrumbsItem[]
}) {
  const routes = usePathname()
  // console.log(routes)

  const items = breadcrumbsItems.map((item, index) => (
    <Anchor
      className={`text-white z-20 ${
        routes.includes('/menu' || '/about') && styles.activeBroadcrumb
      }`}
      href={item.href}
      key={index}
    >
      {item.title}
    </Anchor>
  ))

  return (
    <div
      className={`${styles.syleheading} h-[33rem] md:h-[38rem] bg-[url('/about/bredcumb-bg.png')] relative -mt-20 bg-cover bg-no-repeat] flex items-end`}
    >
      <HomeLayout bg="secondary" className="flex flex-col pb-32">
        <h2 className={`z-20 text-6xl font-semibold capitalize text-white`}>
          {text}
        </h2>
        <div className="flex gap-4 z-20">
          <Breadcrumbs
            className={`text-white z-20 ${styles.breadcrumbs}`}
            separator={<MdKeyboardDoubleArrowRight />}
            mt="xs"
          >
            {items}
          </Breadcrumbs>
        </div>
      </HomeLayout>
    </div>
  )
}

export default Heading
