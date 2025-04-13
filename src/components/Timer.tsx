import { TimerButtons } from "./TimerButtons";
import { useTimer } from "../hooks/useTimer";

export const Timer = () => {
  const { seconds, isActive, start, stop, reset } = useTimer();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>⏱ {seconds} 秒</h1>
      <TimerButtons
        isActive={isActive}
        onStart={start}
        onStop={stop}
        onReset={reset}
      />
    </div>
  );
};
