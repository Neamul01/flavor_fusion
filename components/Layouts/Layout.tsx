import React from 'react'

type Props = {
  children: any
  color?: string
  bg?: 'white' | 'secondary' | string
  parentClass?: string
  className?: string
}
function HomeLayout({
  children,
  color = 'secondary',
  bg = 'white',
  parentClass,
  className,
}: Props) {
  return (
    <div className={`text-${color} bg-${bg} w-full ${parentClass}  px-3`}>
      {/* overflow-hidden */}
      <div className={`max-w-layout mx-auto ${className}`}>{children}</div>
    </div>
  )
}

export default HomeLayout
