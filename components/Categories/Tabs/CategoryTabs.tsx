'use client'

import React, { useState } from 'react'
import { Tabs } from '@mantine/core'
import { AiOutlineArrowRight } from 'react-icons/ai'
import TabItem from '../TabItem/TabItem'

type TabNames = {
  [key: string]: string
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

  const tabs = [
    {
      id: 1,
      name: tabNames.see,
      title: 'see food',
    },
    {
      id: 2,
      name: tabNames.vageterian,
      title: 'vageterian food',
    },
    {
      id: 3,
      name: tabNames.chinease,
      title: 'chinease food',
    },
    {
      id: 4,
      name: tabNames.meat,
      title: 'meat',
    },
  ]

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

        {/* all tabs */}
        {tabs.map((tab) => (
          <Tabs.Tab
            key={tab.id}
            value={tab.name}
            icon={<AiOutlineArrowRight className={activeTabStyle(tab.name)} />}
            className={`border-none flex flex-row-reverse justify-between ${activeTabStyle(
              tab.name
            )}`}
          >
            <span className={`uppercase ${activeTabStyle(tab.name)}`}>
              {tab.title}
            </span>
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {/* tab contents */}
      <div className="col-span-9 border rounded-xl p-6">
        {Object.keys(tabNames).map((tab) => (
          <Tabs.Panel key={tab} value={tabNames[tab]}>
            <TabItem tabName={tabNames[tab]} />
          </Tabs.Panel>
        ))}
      </div>
    </Tabs>
  )
}
