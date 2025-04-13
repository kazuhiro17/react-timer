import React from "react";

type TimerButtonsProps = {
  isActive: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
};

export const TimerButtons: React.FC<TimerButtonsProps> = ({
  isActive,
  onStart,
  onStop,
  onReset,
}) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={onStart} disabled={isActive}>
        スタート
      </button>
      <button onClick={onStop} disabled={!isActive}>
        ストップ
      </button>
      <button onClick={onReset}>リセット</button>
    </div>
  );
};
