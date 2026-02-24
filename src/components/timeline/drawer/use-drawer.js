import { useEffect, useRef } from 'react'

export function useDrawer(isOpen, onClose) {
  const drawerRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const handler = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) return
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && drawerRef.current) {
      drawerRef.current.focus()
    }
  }, [isOpen])

  return { drawerRef }
}
