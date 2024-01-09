import React, { useEffect, useState } from "react";
import { useGlobalState, setGlobalState } from "../Minigame/globalstate";

const Timer = ({ onTimerExpired, onRestart }) => {
  const [timerExpired, setTimerExpired] = useState(false);
  const [CurrentScore] = useGlobalState("CurrentScore"); // Access EndScore from global state

  const [timer, setTimer] = useGlobalState("Timer"); // Global state
  const [gameStarted] = useGlobalState("Gamestarted"); // Global state, ensure this is the only declaration

  const handleRetartGameClick = () => {
    setTimer(60);
    setGlobalState("Gamestarted", true);
    setTimerExpired(false);
    if (onRestart) {
      onRestart();
    }
  };

  useEffect(() => {
    let timerInterval;
    if (gameStarted && timer > 0) {
      timerInterval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (timer === 0 && gameStarted) {
      // Handle timer expiration logic here
      if (onTimerExpired) {
        onTimerExpired();
      }
    }
    return () => clearInterval(timerInterval);
  }, [gameStarted, timer, setTimer, onTimerExpired]);

  useEffect(() => {
    if (timerExpired && onRestart) {
      handleRetartGameClick();
    }
  }, [timerExpired, onRestart]);

  return (
    <div className="fixed z-50 flex flex-col items-center justify-center top-2 transform -translate-x-1/2 text-sky-900 border-8 border-amber-500 border-opacity-75 bg-amber-100 bg-opacity-75 rounded-xl left-1/2 w-96">
      {timer} seconds - Score: {CurrentScore}
    </div>
  );
};

export default Timer;
