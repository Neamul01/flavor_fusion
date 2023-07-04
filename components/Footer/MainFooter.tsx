'use client'

import React from 'react'
import HomeLayout from '../Home/Common/HomeLayout'
import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
} from '@mantine/core'
import AppLogo from '../Common/AppLogo'
import { BsTwitter } from 'react-icons/bs'
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
} from 'react-icons/bi'

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: 'block',
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}))
const AddressInfo = {
  title: 'Address Info',
  links: [
    {
      label: 'Features',
      link: '#',
    },
    {
      label: 'Pricing',
      link: '#',
    },
    {
      label: 'Support',
      link: '#',
    },
    {
      label: 'Forums',
      link: '#',
    },
  ],
}

const facilities = {
  title: 'Our Facilities',
  links: [
    {
      label: 'Bangladeshi Menu',
      link: '#',
    },
    {
      label: 'Chainease Food',
      link: '#',
    },
    {
      label: 'Italian Menu',
      link: '#',
    },
    {
      label: 'Private Event',
      link: '#',
    },
    {
      label: 'Indian Event',
      link: '#',
    },
    {
      label: 'Best Offer',
      link: '#',
    },
    {
      label: 'Popular Item',
      link: '#',
    },
    {
      label: 'Regular Food',
      link: '#',
    },
    {
      label: 'New Food',
      link: '#',
    },
    {
      label: 'Special Food',
      link: '#',
    },
  ],
}

function MainFooter() {
  const { classes } = useStyles()

  const groups = () => {
    const links = AddressInfo.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={`${classes.link} text-lg font-jost`}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ))

    return (
      <div className={classes.wrapper}>
        <Text<'h2'>
          component="h2"
          className={`${classes.title} mb-6 text-4xl  text-white font-cormorant w-56`}
        >
          {AddressInfo.title}
        </Text>
        {links}
      </div>
    )
  }

  const facility = () => {
    const links = facilities.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={`${classes.link} text-lg font-jost`}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ))

    return (
      <div className={`${classes.wrapper} text-white flex-wrap`}>
        <Text<'h2'>
          component="h2"
          className={`${classes.title} mb-6 text-4xl  text-white font-cormorant w-56`}
        >
          {facilities.title}
        </Text>
        <div className="max-h-56 flex flex-wrap gap-x-6 flex-col">{links}</div>
      </div>
    )
  }

  return (
    <HomeLayout bg="secondary" color="white">
      <footer className={classes.footer}>
        <div className={`${classes.inner} py-16 w-full`}>
          <div className={`${classes.groups}`}>{facility()}</div>

          <div className={`${classes.logo} flex items-center`}>
            <div className="">
              <AppLogo />
              <Text size="" color="dimmed" className={classes.description}>
                Build fully functional accessible web applications faster than
                ever
              </Text>
            </div>
          </div>

          <div className={classes.groups}>{groups()}</div>
        </div>
        <div className={classes.afterFooter}>
          <Text color="dimmed" size="sm">
            @{new Date().getFullYear()} Flavor Fusion All rights reserved.
          </Text>

          <Group
            spacing={10}
            className={classes.social}
            position="right"
            noWrap
            classNames={'text-white'}
          >
            <ActionIcon
              size="md"
              className="border p-0 rounded-full border-primary hover:bg-primary text-white"
            >
              <BiLogoFacebook />
            </ActionIcon>
            <ActionIcon
              size="md"
              className="border p-0 rounded-full border-primary hover:bg-primary text-white"
            >
              <BiLogoInstagramAlt />
            </ActionIcon>
            <ActionIcon
              size="md"
              className="border p-0 rounded-full border-primary hover:bg-primary text-white"
            >
              <BiLogoLinkedin />
            </ActionIcon>
            <ActionIcon
              size="md"
              className="border p-0 rounded-full border-primary hover:bg-primary text-white"
            >
              <BsTwitter />
            </ActionIcon>
          </Group>
        </div>
      </footer>
    </HomeLayout>
  )
}

export default MainFooter
