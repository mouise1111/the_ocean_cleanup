import React, { useState, useEffect } from "react";
import { setGlobalState } from "../minigameComponents/globalstate";

const Leaderboard = ({ onStopClick }) => {

  // const handleStopClick = () => {
  //   // You can add any logic related to stopping the game here
  //   setShowLeaderboard(false);
  // };
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  fetch('http://localhost:3030/ScoreBoard')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Data is already sorted and limited to top 5, so just format it
      const formattedData = data.map(item => ({
        name: item.username,
        score: item.highscore
      }));
      setPlayers(formattedData);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error:', error);
      setError(error);
      setLoading(false);
    });
}, []);
  
  

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
      <div className="absolute left-5 bottom-5 px-4 py-2 border-8 border-amber-300 bg-amber-100 rounded-3xl">
        <h2 className="p-2 mb-2 text-4xl text-amber-600 joti-one">Leaderboard</h2>
        <ul className="p-4 mb-2 rounded-lg bg-amber-200">
          {sortedPlayers.map((player, index) => (
            <li
              key={index}
              className={`mb-1 flex flex-row px-2 py-2 justify-between text-sky-800 border-sky-500 text-lg ${
                player.name === "You"
                  ? " border-b-4 font-bold"
                  : " border-b-2 font-medium"
              }`}
            >
              <span className="block basis-1/5">{index + 1}</span>
              <span className="block basis-2/5">{player.name}</span>
              <span className="block basis-2/5 text-right">{player.score}</span>
            </li>
          ))}
        </ul>
        <button
        onClick={() => {
          onStopClick();
          // Set the global state to false when the button is clicked
          setGlobalState("Gamestarted", false);
        }}
        className="px-4 py-2 mt-4 text-lg bg-red-500 text-white rounded-lg"
      >
        Stop Game
      </button>
      </div>
  );
};

export default Leaderboard;
