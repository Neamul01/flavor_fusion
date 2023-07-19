import React from 'react'

type Props = {
  children: any
  color?: string
  bg?: 'white' | 'secondary'
  parentClass?: string
  customClass?: string
}
function HomeLayout({
  children,
  color = 'secondary',
  bg = 'white',
  parentClass,
  customClass,
}: Props) {
  return (
    <div className={`text-${color} bg-${bg} w-full ${parentClass}  px-3`}>
      {/* overflow-hidden */}
      <div className={`max-w-layout mx-auto ${customClass}`}>{children}</div>
    </div>
  )
}

export default HomeLayout
