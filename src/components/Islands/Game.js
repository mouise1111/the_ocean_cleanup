import React, { useState } from "react";
import { RigidBody, MeshCollider } from "@react-three/rapier";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import StartGame from "../pop-ups/StartGame";
import Leaderboard from "../pop-ups/Leaderboard";

const Game = ({ isInHomePage, setPopUpStatus }) => {
  const game = useLoader(GLTFLoader, "/models/islands/game.gltf");
  const [showStartGame, setShowStartGame] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const handleIslandClick = () => {
    setShowStartGame(true);
  };

  return (
    <>
      <RigidBody type="fixed" onClick={handleIslandClick}>
        <MeshCollider type="trimesh">
          <primitive
            object={game.scene}
            scale={2}
            position={[150, 1, -90]}
            rotation-y={Math.PI}
          />
        </MeshCollider>
      </RigidBody>
      {isInHomePage && showStartGame && (
        <StartGame
          setShowStartGame={() => setShowStartGame(false)}
          setShowLeaderboard={() => setShowLeaderboard(true)}
        />
      )}
      {isInHomePage && showLeaderboard && (
        <Leaderboard setShowLeaderboard={() => setShowLeaderboard(false)} />
      )}
    </>
  );
};

export default Game;
