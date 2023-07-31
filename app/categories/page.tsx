import CategoryTabs from '@/components/Categories/Tabs/CategoryTabs'
import Heading from '@/components/Common/StyleHeading'
import Layout from '@/components/Layouts/Layout'
import React from 'react'

export default function page() {
  return (
    <div>
      <Heading
        text="Categories"
        breadcrumbsItems={[
          { title: 'Home', href: '/' },
          { title: 'Categories', href: '/categories' },
        ]}
      />
      <Layout className="py-20">
        <CategoryTabs />
      </Layout>
    </div>
  )
}
