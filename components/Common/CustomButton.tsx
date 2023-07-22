'use client'
import { Button } from '@mantine/core'
import React from 'react'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import { twMerge } from 'tailwind-merge'

type Props = {
  name: string
  text: string
  icon?: any
  color?: 'primary' | 'secondary'
  className?: string
  withIcon?: boolean
  onClick?: () => void
  disabled?: boolean
}
function CustomButton(props: Props) {
  const {
    name,
    text = 'Discover more',
    icon,
    color = 'primary',
    className,
    withIcon = true,
    onClick,
    disabled = false,
  } = props
  const Icon = icon ? icon : <BsArrowUpRightCircle size={'1.3rem'} />
  return (
    <Button
      leftIcon={withIcon ? Icon : null}
      name={name}
      className={`${
        color === 'secondary' ? 'text-secondary' : 'text-primary'
      } ${twMerge(
        'border-primary rounded-full hover:bg-primary hover:text-white capitalize font-jost',
        className
      )}`}
      size="lg"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </Button>
  )
}

export default CustomButton
