'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import NotificationDropdown from '@/components/Admin/Dropdowns/NotificationDropdown'
import UserDropdown from '@/components/Admin/Dropdowns/UserDropdown'
import AppLogo from '@/components/Common/AppLogo'

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState(false)
  const router = usePathname()

  const adminRoutes = adminPages.map((page) => {
    return (
      <li key={page.id} className="items-center">
        <Link
          href={page.href}
          className={
            'text-xs uppercase py-3 font-bold block ' +
            (router.indexOf(page.href) !== -1
              ? 'text-primary bg-secondary/10 rounded-lg hover:text-lightBlue-600'
              : 'text-secondary/80 hover:text-blueGray-500')
          }
          onClick={() => setCollapseShow(false)}
        >
          <i
            className={
              'fas fa-tv mr-2 text-sm ' +
              (router.indexOf(page.href) !== -1
                ? 'opacity-75'
                : 'text-blueGray-300')
            }
          ></i>{' '}
          {page.name}
        </Link>
      </li>
    )
  })

  const collapseMenu = (
    <button
      className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
      type="button"
      onClick={() => setCollapseShow(!collapseShow)}
    >
      <i className="fas fa-bars"></i>i
    </button>
  )

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          {collapseMenu}
          {/* Brand logo */}
          <AppLogo />
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          {collapseShow === false ? null : (
            <div
              className={
                'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded bg-white m-2 py-3 px-6'
              }
            >
              {/* Collapse header */}
              <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                <div className="flex flex-wrap justify-between">
                  <div className="flex justify-end">{collapseMenu}</div>
                  <AppLogo />
                </div>
              </div>
              {/* Form */}
              <form className="mt-6 mb-4 md:hidden">
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Search"
                    className="px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                  />
                </div>
              </form>

              {/* Divider */}
              <hr className="my-4 md:min-w-full" />
              {/* Navigation */}
              <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                {adminRoutes}
              </ul>

              {/* Divider */}
              <hr className="my-4 md:min-w-full" />
              {/* Heading */}
              <h6 className="md:min-w-full text-primary text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                Auth Pages
              </h6>
              {/* Navigation */}

              <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                <li className="items-center">
                  <Link legacyBehavior href="/auth/login">
                    <a
                      href="#pablo"
                      className="text-secondary/80 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                    >
                      <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{' '}
                      Login
                    </a>
                  </Link>
                </li>

                <li className="items-center">
                  <Link legacyBehavior href="/auth/register">
                    <a
                      href="#pablo"
                      className="text-secondary/80 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                    >
                      <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>{' '}
                      Register
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

const adminPages = [
  {
    id: 1,
    name: 'Dashboard',
    href: '/admin/dashboard',
  },
  {
    id: 2,
    name: 'Settings',
    href: '/admin/settings',
  },
  {
    id: 3,
    name: 'Tables',
    href: '/admin/tables',
  },
]
