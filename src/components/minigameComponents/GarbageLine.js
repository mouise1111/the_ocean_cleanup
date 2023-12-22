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
  <GarbageModel
    name="bag"
    path="/models/garbage/bag.gltf"
    scale={1}
    position={position}
  />
);
export const Banana = ({ position }) => (
  <GarbageModel
    name="banana"
    path="/models/garbage/banana.gltf"
    scale={2}
    position={position}
  />
);
export const Bottle = ({ position }) => (
  <GarbageModel
    name="bottle"
    path="/models/garbage/bottle.gltf"
    scale={1}
    position={position}
  />
);
export const Can = ({ position }) => (
  <GarbageModel
    name="can"
    path="/models/garbage/can.gltf"
    scale={2}
    position={position}
  />
);
export const Net = ({ position }) => (
  <GarbageModel
    name="nets"
    path="/models/garbage/net.gltf"
    scale={1}
    position={position}
  />
);
export const Spray = ({ position }) => (
  <GarbageModel
    name="spray"
    path="/models/garbage/spray.gltf"
    scale={1.5}
    position={position}
  />
);
export const Tube = ({ position }) => (
  <GarbageModel
    name="tube"
    path="/models/garbage/tube.gltf"
    scale={1}
    position={position}
  />
);
export const Wine = ({ position }) => (
  <GarbageModel
    name="wine"
    path="/models/garbage/wine.gltf"
    scale={2}
    position={position}
  />
);
export const Brush = ({ position }) => (
  <GarbageModel
    name="brush"
    path="/models/brush.gltf"
    scale={1}
    position={position}
  />
);
//#endregion

// collision + rendering handler
const GarbageModel = ({ path, scale, position }) => {
  const { scene } = useLoader(GLTFLoader, path);

  const [collisionCount, setCollisionCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // New state for visibility
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const SCORE_PER_COLLISION = 100; // Score per collision


  const handleCollision = (event) => {
    setIsVisible(false); // Set visibility to false on collision
    if (!gameStarted) {
      setGameStarted(true);
      setTimeout(() => {
        setGameEnded(true);
      }, 8000);
    }

    if (!gameEnded) {
      setCollisionCount(prevCount => prevCount + 1);
      console.log("You collected a trash, you receive " + SCORE_PER_COLLISION + " dollars!"); // Log score per collision
    }
  };
  useEffect(() => {
    if (gameEnded) {
      console.log("Game ended. Final score: " + collisionCount * SCORE_PER_COLLISION);
    }
  }, [gameEnded, collisionCount]);

  useEffect(() => {
    if (collisionCount > 0 && !gameEnded) {
      console.log("You collected a trash, you receive " + collisionCount * 100 + " dollars!");
    }
  }, [collisionCount, gameEnded]);

  return isVisible ? ( // Render based on visibility
    <RigidBody
      type="fixed"
      scale={5}
      position={position}
      sensor
      onIntersectionEnter={(event) => handleCollision(event)}
      
    >
      <Clone object={scene} />
    </RigidBody>
  ) : null;
};

const getRandomPosition = () => ({
  x: Math.random() * 500 * (Math.random() < 0.5 ? -1 : 1),
  y: 0,
  z: Math.random() * 500 * (Math.random() < 0.5 ? -1 : 1),
});
const GarbageLine = ({ isInHomepage }) => {
  const navigate = useNavigate();
  const { camera } = useThree();
  const [isAsleep, setIsAsleep] = useState(false);

  // controls the visibility of the objects:



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
            // onIntersectionEnter={() => addScore(1)}
            // onIntersectionEnter={() => console.log("collision")}
            // addScore={() => {
            //   addScore(1);
            // }}
          />
        );
        break;
      case 1:
        models.push(
          <Banana
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
      case 2:
        models.push(
          <Bottle
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
      case 3:
        models.push(
          <Can
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
      case 4:
        models.push(
          <Net
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
      case 5:
        models.push(
          <Spray
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
      case 6:
        models.push(
          <Tube
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
      case 7:
        models.push(
          <Wine
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
      case 8:
        models.push(
          <Brush
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
      default:
        models.push(
          <Bottle
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
    }
  }

  return <>{models}</>;
};
export default GarbageLine;
