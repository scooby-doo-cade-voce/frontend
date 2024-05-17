import { useCallback, useEffect, useState } from 'react'

export const useIsMobile = (mobileScreenSize = 768) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  const checkIsMobile = useCallback(
    (event: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(event.matches)
    },
    [],
  )

  useEffect(() => {
    const mediaQueryList = window.matchMedia(
      `(max-width: ${mobileScreenSize}px)`,
    )

    checkIsMobile(mediaQueryList)
    mediaQueryList.addEventListener('change', checkIsMobile)

    return () => {
      mediaQueryList.removeEventListener('change', checkIsMobile)
    }
  }, [checkIsMobile, mobileScreenSize])

  return isMobile
}
