import React from 'react'

type Props = {
  children: any
  color?: string
  bg?: string
  parentClass?: string
  customClass?: string
}
function HomeLayout({
  children,
  color = 'secondary',
  bg = 'white' || 'secondary',
  parentClass,
  customClass,
}: Props) {
  return (
    <div className={`text-${color} bg-${bg} w-full ${parentClass}`}>
      <div className={`max-w-layout mx-auto ${customClass}`}>{children}</div>
    </div>
  )
}

export default HomeLayout
