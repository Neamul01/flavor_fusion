'use client'

import React, { useState } from 'react'
import { Tabs } from '@mantine/core'

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
      <Tabs.List className="border rounded-t-xl col-span-3">
        <div className="px-6 py-4 flex items-center bg-primary rounded-tl-xl rounded-tr-xl">
          <p className="text-2xl font-bold text-white font-cormorant">
            Categoriy:
          </p>
        </div>
        <Tabs.Tab
          value={tabNames.see}
          color={activeTabStyle(tabNames.see)}
          className={`border-none ${activeTabStyle(tabNames.see)}`}
        >
          <span className={` ${activeTabStyle(tabNames.see)}`}>Gallery</span>
        </Tabs.Tab>
        <Tabs.Tab
          color={'var(--primary-color)'}
          value={tabNames.vageterian}
          className="border-none"
        >
          Messages
        </Tabs.Tab>
        <Tabs.Tab
          color="white"
          value={tabNames.chinease}
          className="border-none"
        >
          Settings
        </Tabs.Tab>
        <Tabs.Tab value={tabNames.meat} className="border-none">
          Settings
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
