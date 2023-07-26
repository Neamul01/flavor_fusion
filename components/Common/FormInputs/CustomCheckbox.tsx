import { Checkbox } from '@mantine/core'
import React from 'react'
import './customText.css'

export default function CustomCheckbox({
  size,
  label,
  props,
}: {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  label?: string
  props?: any
}) {
  return (
    <Checkbox
      className="z-20 relative text-white custom-checkbox"
      size={size && size}
      label={label && label}
    />
  )
}
