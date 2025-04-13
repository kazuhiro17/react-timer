import { useState, useRef, useEffect } from 'react'

export const useTimer = () => {
  const [seconds, setSeconds] = useState<number>(0)
  const [isActive, setIsActive] = useState<boolean>(false)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    if (isActive) {
      intervalRef.current = window.setInterval(() => {
        setSeconds(prev => prev + 1)
      }, 1000)
    } else if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isActive])

  const start = () => setIsActive(true)
  const stop = () => setIsActive(false)
  const reset = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
    }
    setSeconds(0)
    setIsActive(false)
  }

  return {
    seconds,
    isActive,
    start,
    stop,
    reset
  }
}
