'use client'

import React, { useEffect, useRef, useState } from 'react'

interface Props {
  finalValue: number
  duration: number
  className: string
}

const AnimatedValueOnScroll: React.FC<Props> = ({ finalValue, duration, className }) => {
  const [currentValue, setCurrentValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    let frameId = 0

    function startCounting() {
      if (hasStarted.current) return

      hasStarted.current = true
      let start: number | null = null

      function animate(timestamp: number) {
      start = start ?? timestamp
      const progress = Math.min((timestamp - start) / duration, 1)

      setCurrentValue(Math.round(progress * finalValue))

      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      }
    }

      frameId = requestAnimationFrame(animate)
    }

    function isNearViewport() {
      const element = ref.current
      if (!element) return false

      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight

      return rect.top <= viewportHeight + 160 && rect.bottom >= -160
    }

    function checkPosition() {
      if (isNearViewport()) startCounting()
    }

    if ('IntersectionObserver' in window && ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startCounting()
            observer.disconnect()
          }
        },
        { rootMargin: '160px 0px', threshold: 0 },
      )

      observer.observe(ref.current)
      checkPosition()

      return () => {
        observer.disconnect()
        cancelAnimationFrame(frameId)
      }
    }

    checkPosition()
    window.addEventListener('scroll', checkPosition, { passive: true })
    window.addEventListener('resize', checkPosition)

    return () => {
      window.removeEventListener('scroll', checkPosition)
      window.removeEventListener('resize', checkPosition)
      cancelAnimationFrame(frameId)
    }
  }, [duration, finalValue])

  return (
    <div ref={ref}>
      <span className={className}>{currentValue}</span>
    </div>
  )
}

export default AnimatedValueOnScroll
