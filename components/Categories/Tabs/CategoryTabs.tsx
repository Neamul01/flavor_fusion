'use client'

import React, { useState } from 'react'
import { Tabs } from '@mantine/core'
import { AiOutlineArrowRight } from 'react-icons/ai'

type TabNames = {
  see: string
  vageterian: string
  chinease: string
  meat: string
}

export default function CategoryTabs() {
  const [activeTab, setActiveTab] = useState<string | null>('see')

  const tabNames: TabNames = {
    see: 'see',
    vageterian: 'vageterian',
    chinease: 'chinease',
    meat: 'meat',
  }

  const activeTabStyle = (name: string) => {
    if (tabNames[name] === activeTab) return 'text-primary'
  }
  console.log('active tab', activeTabStyle('see'))
  return (
    <Tabs
      value={activeTab}
      onTabChange={setActiveTab}
      orientation="vertical"
      className="grid grid-cols-12 gap-4"
    >
      <Tabs.List className="border rounded-t-xl col-span-3 gap-3">
        <div className="px-6 py-4 flex items-center bg-primary rounded-tl-xl rounded-tr-xl">
          <p className="text-2xl font-bold text-white font-cormorant">
            Categoriy:
          </p>
        </div>
        {/* see food tab */}
        <Tabs.Tab
          value={tabNames.see}
          icon={
            <AiOutlineArrowRight className={activeTabStyle(tabNames.see)} />
          }
          className={`border-none flex flex-row-reverse justify-between ${activeTabStyle(
            tabNames.see
          )}`}
        >
          <span className={`uppercase ${activeTabStyle(tabNames.see)}`}>
            see food
          </span>
        </Tabs.Tab>
        {/* vageterian tab */}
        <Tabs.Tab
          value={tabNames.vageterian}
          icon={
            <AiOutlineArrowRight
              className={activeTabStyle(tabNames.vageterian)}
            />
          }
          className={`border-none flex flex-row-reverse justify-between ${activeTabStyle(
            tabNames.vageterian
          )}`}
        >
          <span className={`uppercase ${activeTabStyle(tabNames.vageterian)}`}>
            vageterian food
          </span>
        </Tabs.Tab>
        {/* chinease food tab */}
        <Tabs.Tab
          value={tabNames.chinease}
          icon={
            <AiOutlineArrowRight
              className={activeTabStyle(tabNames.chinease)}
            />
          }
          className={`border-none flex flex-row-reverse justify-between ${activeTabStyle(
            tabNames.chinease
          )}`}
        >
          <span className={`uppercase ${activeTabStyle(tabNames.chinease)}`}>
            chinease food
          </span>
        </Tabs.Tab>
        {/* meat tab */}
        <Tabs.Tab
          value={tabNames.meat}
          icon={
            <AiOutlineArrowRight className={activeTabStyle(tabNames.meat)} />
          }
          className={`border-none flex flex-row-reverse justify-between ${activeTabStyle(
            tabNames.meat
          )}`}
        >
          <span className={`uppercase ${activeTabStyle(tabNames.meat)}`}>
            meat
          </span>
        </Tabs.Tab>
      </Tabs.List>

      <div className="col-span-9">
        <Tabs.Panel value="see">Gallery tab content</Tabs.Panel>
        <Tabs.Panel value="vageterian">Messages tab content</Tabs.Panel>
        <Tabs.Panel value="chinease">Settings tab content</Tabs.Panel>
        <Tabs.Panel value="meat">Settings tab content</Tabs.Panel>
      </div>
    </Tabs>
  )
}
