import { Divider } from '@mantine/core'
import React from 'react'

export default function TabItem({ tabName }: { tabName: string }) {
  return (
    <div className="grid md:grid-cols-12 relative">
      <div className="col-span-6">
        <p className="">{tabName} tab content</p>
        <p className="">{tabName} tab content</p>
      </div>
      <div className="col-span-6">
        <p className="">{tabName} tab content</p>
      </div>

      <div className="absolute left-[45%] top-0 h-full">
        <Divider
          my="xs"
          color="gray"
          labelPosition="left"
          orientation="vertical"
          size={'xl'}
          className="h-full"
        />
      </div>
    </div>
  )
}
