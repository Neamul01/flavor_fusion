import { Textarea } from '@mantine/core'
import React from 'react'
import '../customText.css'
import { twMerge } from 'tailwind-merge'

export default function CustomTextArea({
  minRows,
  maxRows,
  placeholder,
  className,
  props,
}: {
  minRows?: number
  maxRows?: number
  placeholder?: string
  className?: string
  props?: any
}) {
  return (
    <Textarea
      {...props}
      minRows={minRows}
      maxRows={maxRows}
      placeholder={placeholder}
      className={twMerge(
        'z-20 relative bg-secondary custom-text-area',
        className
      )}
    />
  )
}
