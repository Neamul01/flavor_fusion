import { useState, useEffect } from 'react'

interface WindowSize {
  width: number | undefined
  height: number | undefined
}

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // Handler to update window size
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
