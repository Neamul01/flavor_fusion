'use client'

import { useWindowSize } from '@/hooks/useWindowSize'
import { motion } from 'framer-motion'
import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Burger,
  rem,
  Button,
  Transition,
  Paper,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import AppLogo from './Common/AppLogo'

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
    link: '#about',
    label: 'About',
  },
  {
    link: '#menu',
    label: 'Menu',
  },
  {
    link: '#blog',
    label: 'Blog',
    links: [
      {
        link: '/faq',
        label: 'FAQ',
      },
      {
        link: '/demo',
        label: 'Book a demo',
      },
      {
        link: '/forums',
        label: 'Forums',
      },
    ],
  },
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

  // console.log(size)

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ))

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <BsChevronDown size="0.9rem" />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      )
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={`${classes.link} text-lg `}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    )
  })

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  }

  return (
    <div className="bg-transparent h-16 md:h-20 text-secondary border-none px-2 mt-1">
      <div
        className={`${classes.inner} h-full w-full max-w-layout mx-auto bg-white rounded-full md:px-8 px-4`}
      >
        <AppLogo />
        <Group spacing={5} className={`${classes.links}`}>
          {items}
        </Group>
        <div className=" cursor-pointer hidden md:block">
          <Button className="text-white bg-primary hover:bg-secondary transition-all rounded-full font-jost text-lg h-12 w-52">
            Find Reservation
          </Button>
        </div>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
        {/* <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => ( */}
        {/* {opened && ( */}
        <motion.div
          className={`${classes.dropdown} rounded-xl text-left bg-white h-screen`}
          animate={opened ? 'open' : 'closed'}
          variants={variants}
          // withBorder
          // style={styles}
        >
          {items}
        </motion.div>
        {/* )} */}
        {/* )}
        </Transition> */}
      </div>
    </div>
  )
}

export default MainHeader
