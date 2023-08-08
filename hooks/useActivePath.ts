import { usePathname } from 'next/navigation'

export const useActivePath = () => {
  const path = usePathname()
  const newPath = path
    .split('/')
    .filter((item) => item !== '')
    .map((item) => `/${item}`)
  if (newPath.length === 0) return ['/']
  return newPath
}
