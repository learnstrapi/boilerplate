import { isLg, isMd, isSm, isXl, TWindowSize } from 'assets/media-queries'
import { isBrowser } from 'lib/utils/env'
import { useEffect, useState } from 'react'

export function useWindowSize() {
  function sizeString(windowSize: TWindowSize) {
    let size: string

    if (isSm(windowSize)) size = 'isSm'
    if (isMd(windowSize)) size = 'isMd'
    if (isLg(windowSize)) size = 'isLg'
    if (isXl(windowSize)) size = 'isXl'

    return size
  }

  function getSize() {
    return {
      width: isBrowser ? window.innerWidth : undefined,
      height: isBrowser ? window.innerHeight : undefined
    }
  }

  let [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isBrowser) {
      return
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { ...windowSize, size: sizeString(windowSize) }
}
