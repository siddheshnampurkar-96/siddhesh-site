'use client'

import { useEffect, useRef, useState } from 'react'

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  const rafRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!start || hasRun.current) return
    hasRun.current = true

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp

      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOut(progress)

      setCount(Math.round(easedProgress * target))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [start, target, duration])

  return count
}
