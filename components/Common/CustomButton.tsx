'use client'
import { Button } from '@mantine/core'
import React from 'react'
import { BsArrowUpRightCircle } from 'react-icons/bs'

type Props = {
  name: string
  text: string
  icon?: any
  color?: 'primary' | 'secondary'
  customClass?: string
  withIcon?: boolean
}
function CustomButton(props: Props) {
  const {
    name,
    text = 'Discover more',
    icon,
    color = 'primary',
    customClass,
    withIcon = true,
  } = props
  const Icon = icon ? icon : <BsArrowUpRightCircle size={'1.3rem'} />
  return (
    <Button
      leftIcon={withIcon ? Icon : null}
      name={name}
      className={`text-${
        color === 'secondary' ? 'secondary' : 'primary'
      } border-primary rounded-full hover:bg-primary hover:text-white capitalize font-jost ${customClass}`}
      size="lg"
    >
      {text}
    </Button>
  )
}

export default CustomButton
