import { Textarea } from '@mantine/core'
import React from 'react'

export default function CustomTextArea() {
  return (
    <Textarea
      rows={18}
      placeholder="Message ..."
      className="z-20 relative bg-secondary"
    />
  )
}
