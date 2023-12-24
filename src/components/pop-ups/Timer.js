// Timer.js
import React, { useEffect, useState } from 'react';
import { setGlobalState } from "../minigameComponents/globalstate";

const Timer = ({ onTimerExpired, onRestart, gameStarted }) => {
  const [timer, setTimer] = useState(60);
  const [timerExpired, setTimerExpired] = useState(false);

  const handleRetartGameClick = () => {
    setTimer(60); // Reset the timer to 60 seconds
    setGlobalState('Gamestarted', true);
    setTimerExpired(false); // Reset the timer expiration flag
    if (onRestart) {
      onRestart(); // Call the onRestart prop if it's provided
    }
  };

  useEffect(() => {
    let timerInterval;

    if (gameStarted && timer > 0) {
      timerInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && gameStarted && !timerExpired) {
      setGlobalState('Gamestarted', false);
      setTimerExpired(true);
      if (onTimerExpired) {
        onTimerExpired();
      }
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [gameStarted, timer, onTimerExpired, timerExpired]);

  useEffect(() => {
    if (timerExpired && onRestart) {
        handleRetartGameClick(); // This will trigger the handleRetartGameClick function
    }
  }, [timerExpired, onRestart]);

  console.log("Rendering Timer...");

  return (
    <div className="fixed z-50 flex flex-col items-center justify-center top-2 transform -translate-x-1/2 text-sky-900 border-8 border-amber-500 border-opacity-75 bg-amber-100 bg-opacity-75 rounded-xl left-1/2 w-96">
      {timer} seconds
    </div>
  );
};

export default Timer;

// setTimerExpired(true); 