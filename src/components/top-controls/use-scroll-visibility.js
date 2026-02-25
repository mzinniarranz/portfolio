import { useState, useEffect } from 'react'

export function useScrollVisibility(elementId) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const element = document.querySelector(`#${elementId}`)
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0,
    })

    observer.observe(element)
    return () => observer.disconnect()
  }, [elementId])

  return { isVisible }
}
