import React, { useState, useEffect } from "react";
import { RigidBody, MeshCollider } from "@react-three/rapier";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import Enter from "../pop-ups/Enter";
import StartGame from "../pop-ups/StartGame";
import Leaderboard from "../pop-ups/Leaderboard";
import { isAuthenticated } from "../pop-ups/Auth/Auth";

const Game = ({ isInHomePage, setPopUpStatus }) => {
  const game = useLoader(GLTFLoader, "/models/islands/game.gltf");
  const [showEnterPopup, setShowEnterPopup] = useState(false);
  const [showStartGame, setShowStartGame] = useState(false);
  const [enterKeyPressed, setEnterKeyPressed] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [isColliding, setIsColliding] = useState(false);
  const navigate = useNavigate();

  const handleIslandClick = () => {
    if (isAuthenticated()) {
      setPopUpStatus({ showStartGame: true, showLeaderboard: false });
    } else {
      navigate("/login");
      // console.log("Redirecting to login page");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && isColliding) {
      setEnterKeyPressed(true);
      setShowEnterPopup(false);
      if (isAuthenticated()) {
        setPopUpStatus({ showStartGame: true, showLeaderboard: false });
      } else {
        navigate("/login");
        // console.log("Redirecting to login page");
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isColliding, navigate]);

  useEffect(() => {
    if (isColliding && enterKeyPressed) {
      if (isAuthenticated()) {
        setPopUpStatus({ showStartGame: true, showLeaderboard: false });
      } else {
        navigate("/login");
        // console.log("Redirecting to login page");
      }
    }

    return () => {
      // Cleanup event listeners
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isColliding, enterKeyPressed, navigate]);

  useFrame(() => {
    if (isColliding) {
      setShowEnterPopup(true);
      handleEnterIsland();
    } else {
      setShowEnterPopup(false);
      handleExitIsland();
    }
  });

  const handleEnterIsland = () => {
    setShowEnterPopup(true);
  };

  const handleExitIsland = () => {
    setShowEnterPopup(false);
  };

  return (
    <>
      <RigidBody 
        type="fixed" 
        onClick={handleIslandClick}
        onCollisionEnter={() => {
          setIsColliding(true);
        }}
        onCollisionExit={() => {
          setIsColliding(false);
        }}
      >
        <MeshCollider type="hull">
          <primitive
            object={game.scene}
            scale={2}
            position={[150, 1, -90]}
            rotation-y={Math.PI}
          />
        </MeshCollider>
      </RigidBody>
      {showEnterPopup && (
        <Enter position={[150, 30, -90]} onKeyPress={handleKeyPress} />
      )}
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
