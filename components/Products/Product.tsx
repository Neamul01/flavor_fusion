'use client'
import React from 'react'
import Layout from '../Layouts/Layout'
import { useParams } from 'next/navigation'

export default function Product({ params }: { params: string }) {
  //   const params = useParams()
  return (
    <Layout bg="white" color="secondary">
      product {params}
    </Layout>
  )
}
