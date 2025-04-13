import { TimerButtons } from './TimerButtons'
import { useTimer } from '../hooks/useTimer'

const formatTime = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  const paddedMinutes = String(minutes).padStart(2, '0')
  const paddedSeconds = String(seconds).padStart(2, '0')
  return `${paddedMinutes}:${paddedSeconds}`
}

export const Timer = () => {
  const { seconds, isActive, start, stop, reset } = useTimer()

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>⏱ {formatTime(seconds)}</h1>
      <TimerButtons
        isActive={isActive}
        onStart={start}
        onStop={stop}
        onReset={reset}
      />
    </div>
  )
}

