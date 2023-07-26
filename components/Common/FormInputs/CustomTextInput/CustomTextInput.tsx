import { TextInput } from '@mantine/core'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import './customTextInput.css'

export default function MantineTextInput({
  label,
  placeholder,
  formProps,
  className,
  props,
}: {
  label?: string
  placeholder?: string
  formProps: any
  className?: string
  props?: any
}) {
  return (
    <TextInput
      label={label && label}
      placeholder={placeholder && placeholder}
      size="lg"
      {...formProps}
      {...props}
      className={twMerge(
        'z-20 relative text-white bg-secondary custom-text-input',
        className
      )}
    />
  )
}
