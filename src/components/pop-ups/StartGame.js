import React from "react";
import { Html } from "@react-three/drei";

const StartGame = ({ setShowStartGame, setShowLeaderboard }) => {
  const handleStartClick = () => {
    setShowStartGame(false);
    setShowLeaderboard(true);
  };

  return (
    <Html>
    <div className="flex flex-col items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-8 border-amber-300 bg-amber-100 rounded-3xl p-8 w-96">
      <h2 className="text-center text-4xl text-amber-600 joti-one mb-4">
        In this game you'll have to clean up as much garbage from the ocean as you can in just one minute. Good Luck!
      </h2>
      <button
        onClick={handleStartClick}
        className="px-4 py-2 text-lg bg-red-500 text-white rounded-lg"
      >
        Start Game
      </button>
    </div></Html>
  );
};

export default StartGame;
