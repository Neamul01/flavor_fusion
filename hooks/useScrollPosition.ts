import { useEffect, useState } from 'react'

export function useScrollPosition(): number {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    // Handler to update scroll position
    function handleScroll() {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop)
    }

    // Add event listener
    window.addEventListener('scroll', handleScroll)

    // Call handler right away so state gets updated with initial scroll position
    handleScroll()

    // Clean up event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollPosition
}
