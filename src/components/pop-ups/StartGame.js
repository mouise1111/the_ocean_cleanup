import React from "react";
import { setGlobalState } from "../minigameComponents/globalstate";


const StartGame = ({ onStartClick, onCloseClick }) => {

  const handleStartGameClick = () => {
    setGlobalState('Gamestarted', true); // Update the global state
    if (onStartClick) {
      onStartClick(); // Call the onStartClick prop if it's provided
    }
  };


  return (
    <div className="flex flex-col items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-8 border-amber-300 bg-amber-100 rounded-3xl p-8 w-96">
      <button 
        className="close-button absolute top-1 right-1 px-3 py-1 text-lg bg-red-500 text-white rounded-lg" 
        onClick={onCloseClick}
      >
        
      </button>
      <h2 className="text-center text-4xl text-amber-600 joti-one mb-4">
        In this game you'll have to clean up as much garbage from the ocean as you can in just one minute. Good Luck!
      </h2>
      <button
        className="px-5 py-3 text-lg bg-emerald-600 text-white rounded-lg"
        onClick={handleStartGameClick}
      >
        Start Game
      </button>
    </div>
  );
};

export default StartGame;
