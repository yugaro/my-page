import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import HeaderHome from '@/components/header/home/HeaderHome'
import HeaderLockNote from '@/components/header/locknote/HeaderLockNote'

export const Header = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [currentPosition, setCurrentPosition] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const getScroll = () => {
      setCurrentPosition(
        Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        )
      )
    }
    window.addEventListener('scroll', getScroll)
    return () => window.removeEventListener('scroll', getScroll)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    } else {
      return
    }
  }, [])

  return (
    <>
      {router.pathname === '/locknote' ? (
        <HeaderLockNote posFlag={currentPosition <= windowSize.height * 0.4} />
      ) : (
        <HeaderHome posFlag={currentPosition <= windowSize.height * 0.8} />
      )}
    </>
  )
}

export default Header
