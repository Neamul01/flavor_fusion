import { TextInput } from '@mantine/core'
import React from 'react'

export default function MantineTextInput({ formProps }: { formProps: any }) {
  return (
    <TextInput
      withAsterisk
      label="Email"
      placeholder="your@email.com"
      {...formProps}
    />
  )
}
