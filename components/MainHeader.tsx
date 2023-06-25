'use client'

import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Burger,
  rem,
  Button,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { BsChevronDown } from 'react-icons/bs'

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
  const { classes } = useStyles()

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

  return (
    <Header
      height={80}
      className="bg-white text-secondary rounded-full max-w-[100rem] mx-auto"
    >
      <div className={`${classes.inner} h-full w-full md:px-8 px-4`}>
        <Link href={'/'} className="w-44 cursor-pointer">
          <Image
            priority
            width={250}
            height={100}
            src="/flavor-fusion-logo2.png"
            alt="logo"
            className=" overflow-hidden object-contain"
          />
        </Link>
        <Group spacing={5} className={`${classes.links}`}>
          {items}
        </Group>
        <div className=" cursor-pointer">
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
      </div>
    </Header>
  )
}

export default MainHeader
