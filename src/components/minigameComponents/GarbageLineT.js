import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useNavigate } from "react-router-dom";
import { useThree } from "react-three-fiber";
import React, { useEffect, useState, useRef } from "react";
import {
  CuboidCollider,
  BallCollider,
  MeshCollider,
} from "@react-three/rapier";
import { Clone } from "@react-three/drei";

//#region import models
export const Bag = ({ position }) => (
  <GarbageModel path="/models/garbage/bag.gltf" scale={1} position={position} />
);
export const Banana = ({ position }) => (
  <GarbageModel
    path="/models/garbage/banana.gltf"
    scale={2}
    position={position}
  />
);
export const Bottle = ({ position }) => (
  <GarbageModel
    path="/models/garbage/bottle.gltf"
    scale={1}
    position={position}
  />
);
export const Can = ({ position }) => (
  <GarbageModel path="/models/garbage/can.gltf" scale={2} position={position} />
);
export const Net = ({ position }) => (
  <GarbageModel path="/models/garbage/net.gltf" scale={1} position={position} />
);
export const Spray = ({ position }) => (
  <GarbageModel
    path="/models/garbage/spray.gltf"
    scale={1.5}
    position={position}
  />
);
export const Tube = ({ position }) => (
  <GarbageModel
    path="/models/garbage/tube.gltf"
    scale={1}
    position={position}
  />
);
export const Wine = ({ position }) => (
  <GarbageModel
    path="/models/garbage/wine.gltf"
    scale={2}
    position={position}
  />
);
export const Brush = ({ position }) => (
  <GarbageModel path="/models/brush.gltf" scale={1} position={position} />
);
//#endregion

const GarbageModel = ({ path, scale, position }) => {
  const { scene } = useLoader(GLTFLoader, path);
  return (
    <RigidBody
      type="fixed"
      scale={scale}
      position={position}
      sensor
      onIntersectionEnter={() => console.log("collision")}
    >
      <MeshCollider>
        <Clone object={scene} />
      </MeshCollider>
    </RigidBody>
  );
};

const getRandomPosition = () => ({
  x: Math.random() * 500 * (Math.random() < 0.5 ? -1 : 1),
  y: -2,
  z: Math.random() * 500 * (Math.random() < 0.5 ? -1 : 1),
});
const GarbageLineT = ({ isInHomepage }) => {
  const navigate = useNavigate();
  const { camera } = useThree();
  const [isAsleep, setIsAsleep] = useState(false);

  // controls the visibility of the objects:
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const currentScore = useRef(0); // Ref to track the current score
  const [garbageLinesVisibility, setGarbageLinesVisibility] = useState({
    line1: true,
    line2: true,
    line3: true,
    line4: true,
    line5: true,
    line6: true,
  });
// isn't called
  const addScore = (lineId) => {
    if (!gameStarted) {
      setGameStarted(true); // Start the game on the first input
      console.log("Game started");
      // Start the timer when the game starts
      setTimeout(() => {
        console.log("Final Score:", currentScore.current); // Output the score using the ref
        setScore(0); // Reset the score state
        currentScore.current = 0; // Reset the score ref
        setGameStarted(false); // Reset game start state
        console.log("Game stopped"); // Log when the game stops
      }, 8000); // 60,000 milliseconds = 1 minute
    }
    const newScore = currentScore.current + 100;
    currentScore.current = newScore; // Update the ref
    setScore(newScore); // Update the state
    setGarbageLinesVisibility((prevState) => ({
      ...prevState,
      [lineId]: false,
    }));
  };

  const numModels = 100;
  const models = [];

  for (let i = 0; i < numModels; i++) {
    const randomPosition = getRandomPosition();
    const randomCase = Math.floor(Math.random() * 9);

    switch (randomCase) {
      case 0:
        models.push(
          <Bag
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
            onIntersectionEnter={() => addScore(1)}
          />
        );
        break;
      case 1:
        models.push(
          <Banana
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
            onIntersectionEnter={() => addScore(1)}
          />
        );
        break;
      case 2:
        models.push(
          <Bottle
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
            onIntersectionEnter={() => addScore(1)}
          />
        );
        break;
      case 3:
        models.push(
          <Can
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
            onIntersectionEnter={() => addScore(1)}
          />
        );
        break;
      case 4:
        models.push(
          <Net
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
            onIntersectionEnter={() => addScore(1)}
          />
        );
        break;
      case 5:
        models.push(
          <Spray
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
            onIntersectionEnter={() => addScore(1)}
          />
        );
        break;
      case 6:
        models.push(
          <Tube
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
            onIntersectionEnter={() => addScore(1)}
          />
        );
        break;
      case 7:
        models.push(
          <Wine
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
            onIntersectionEnter={() => addScore(1)}
          />
        );
        break;
      case 8:
        models.push(
          <Brush
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
            onIntersectionEnter={() => addScore(1)}
          />
        );
        break;
      default:
        models.push(
          <Bottle
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
            onIntersectionEnter={() => addScore(1)}
          />
        );
        break;
    }
  }

  return <>{models}</>;
};
export default GarbageLineT;
