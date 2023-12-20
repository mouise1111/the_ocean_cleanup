import React, { useState, useEffect } from "react";

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Populate the players state variable with some dummy data
    setPlayers([
      { name: "Player 1", score: 100 },
      { name: "Player 2", score: 200 },
      { name: "Player 3", score: 150 },
      { name: "You", score: 175 },
      // Add more players as needed
    ]);
  }, []);

  // Sort the players array in descending order based on the score property
  const sortedPlayers = players.sort((a, b) => b.score - a.score);

  return (
    <div className="absolute px-4 py-2 border-8 border-amber-300 bottom-5 left-5 bg-amber-100 rounded-3xl">
      <h2 className="p-2 mb-2 text-4xl text-amber-600 joti-one">Leaderboard</h2>
      <ul className="p-4 mb-2 rounded-lg bg-amber-200">
        {/* <div className="flex flex-row justify-between gap-2 px-2">
            <h4>Rank</h4>
            <h4>Player</h4>
            <h4>Name</h4>
          </div> */}
        {sortedPlayers.map((player, index) => (
          <li
            key={index}
            className={`mb-1 flex flex-row just px-2 py-2 justify-between text-sky-800 border-sky-500 text-lg ${
              player.name === "You"
                ? " border-b-4 font-bold"
                : " border-b-2 font-medium"
            }`}
          >
            <span className="block basis-1/5">{index + 1}</span>
            <span className="block basis-2/5">{player.name}</span>
            <span className="block text-right basis-2/5">{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
