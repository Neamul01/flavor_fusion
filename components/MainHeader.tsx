'use client'

import { useWindowSize } from '@/hooks/useWindowSize'
import { motion } from 'framer-motion'
import { createStyles, Group, Burger, rem, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import AppLogo from './Common/AppLogo'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useScrollPosition } from '@/hooks/useScrollPosition'

const useStyles = createStyles((theme) => ({
  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    fontWeight: 500,

    '&:hover': {
      color: 'var(--primary-color)',
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
  // dropdown
  dropdown: {
    position: 'absolute',
    top: 65,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}))

interface HeaderSearchProps {
  links: {
    link: string
    label: string
    links: { link: string; label: string }[]
  }[]
}
const links = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/about',
    label: 'About',
  },
  {
    link: '/menu',
    label: 'Menu',
  },
  {
    link: '/categories',
    label: 'Categories',
  },
  // {
  //   link: '/blog',
  //   label: 'Blog',
  //   links: [
  //     {
  //       link: '/faq',
  //       label: 'FAQ',
  //     },
  //     {
  //       link: '/demo',
  //       label: 'Book a demo',
  //     },
  //     {
  //       link: '/forums',
  //       label: 'Forums',
  //     },
  //   ],
  // },
  {
    link: '/contact',
    label: 'Contact',
  },
]

function MainHeader() {
  const [opened, { toggle }] = useDisclosure(false)
  const [active, setActive] = useState(links[0].link)
  const { classes } = useStyles()
  const size = useWindowSize()
  const router = useRouter()
  const route = usePathname()
  const path = usePathname()
  const scrollPostition = useScrollPosition()

  // console.log('scrool position', scrollPostition)
  // console.log(size)

  const items = links.map((link) => {
    // const menuItems = link.links?.map((item) => (
    //   <Menu.Item key={item.link}>{item.label}</Menu.Item>
    // ))

    // if (menuItems) {
    //   return (
    //     <Menu
    //       key={link.label}
    //       trigger="hover"
    //       transitionProps={{ exitDuration: 0 }}
    //       withinPortal
    //     >
    //       <Menu.Target>
    //         <Link href={link.link} className={classes.link}>
    //           <Center>
    //             <span className={classes.linkLabel}>{link.label}</span>
    //             <BsChevronDown size="0.9rem" />
    //           </Center>
    //         </Link>
    //       </Menu.Target>
    //       <Menu.Dropdown>{menuItems}</Menu.Dropdown>
    //     </Menu>
    //   )
    // }

    return (
      <Link
        key={link.label}
        href={link.link}
        className={`${classes.link} text-lg `}
      >
        {link.label}
      </Link>
    )
  })

  const itemsToggle = links.map((link) => {
    // console.log(path.split('/').length)
    return (
      <Link
        key={link.label}
        href={link.link}
        className={`${classes.link} ${
          path === link.link && 'bg-secondary/20 text-primary'
        } text-lg`}
      >
        {link.label}
      </Link>
    )
  })

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  }

  return (
    <>
      {route.split('/').includes('admin') ? null : (
        <div
          className={`flex items-center w-full bg-transparent h-16 md:h-20 text-secondary border-none md:px-2 mt-1 z-50 top-0 ${
            scrollPostition > 119 && 'fixed transition-transform duration-500'
          }`}
        >
          <div
            className={`${
              classes.inner
            } h-full w-full max-w-layout mx-auto bg-white md:rounded-full md:px-8 px-4 ${
              scrollPostition > 119 &&
              'border-b shadow-xl transition-transform duration-500'
            }`}
          >
            <AppLogo />
            <Group spacing={5} className={`${classes.links}`}>
              {items}
            </Group>
            <div className=" cursor-pointer hidden md:block">
              <Button
                onClick={() => router.push('/contact')}
                className="text-white bg-primary hover:bg-secondary transition-all rounded-full font-jost text-lg h-12 w-52"
              >
                Contact Now
              </Button>
            </div>
            <Burger
              opened={opened}
              onClick={toggle}
              className={`${classes.burger} md:hidden`}
              size="sm"
            />
            <motion.div
              className={`${classes.dropdown} text-left bg-white flex flex-col gap-2 p-2`}
              animate={opened ? 'open' : 'closed'}
              initial={{ opacity: 0 }}
              variants={variants}
              onClick={() => toggle()}
            >
              {itemsToggle}
            </motion.div>
          </div>
        </div>
      )}
    </>
  )
}

export default MainHeader
