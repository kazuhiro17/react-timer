import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [seconds, setSeconds] = useState<number>(0)
  const [isActive, setIsActive] = useState<boolean>(false)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    if (isActive) {
      intervalRef.current = window.setInterval(() => {
        setSeconds((prev) => prev + 1)
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

  const handleReset = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
    }
    setSeconds(0)
    setIsActive(false)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>⏱ {seconds} 秒</h1>
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setIsActive(true)} disabled={isActive}>
          スタート
        </button>
        <button onClick={() => setIsActive(false)} disabled={!isActive}>
          ストップ
        </button>
        <button onClick={handleReset}>
          リセット
        </button>
      </div>
    </div>
  )
}

export default App
