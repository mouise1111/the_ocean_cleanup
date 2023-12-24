import React from 'react';

const TimerExpiredPopUp = ({ onRestart, onStop }) => {
    console.log("Rendering TimerExpiredPopUp...");
    return (
    <div className="fixed z-50 flex flex-col items-center justify-center p-8 transform -translate-x-1/2  border-8 border-amber-300 bg-amber-100 rounded-3xl top-1/4 left-1/2 w-96">
      <p className="mb-1 flex flex-row px-2 py-2 joti-one text-4xl text-sky-800 border-sky-500">Time's up!</p>
      <div className="mt-4 flex flex-row space-x-4">
            <button
                className="action-button bg-emerald-600 text-white px-8 py-2 mt-4 mr-2 rounded"
                onClick={onRestart}
            >
                Restart
            </button>
            <button
                className="action-button bg-red-500 text-white px-4 py-2 mt-4 mr-2 rounded"
                onClick={onStop}
            >
                Stop Game
            </button>
        </div>
    </div>
  );
};

export default TimerExpiredPopUp;
