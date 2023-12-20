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
import {
  Bag,
  Banana,
  Bottle,
  Can,
  Net,
  Spray,
  Tube,
  Wine,
} from "../../helpers/Garbage";

const GarbageLine = ({ isInHomepage }) => {
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

  return (
    <>
      <RigidBody
        scale={5}
        type="fixed"
        colliders="hull"
        sensor
        position={[5, 2, 10]}
        onIntersectionEnter={() => addScore("line1") + console.log("collision")}
      >
        <MeshCollider>
          <Bag />
        </MeshCollider>
      </RigidBody>
      <RigidBody
        scale={5}
        type="fixed"
        colliders="hull"
        sensor
        position={[5, 2, 10]}
        onIntersectionEnter={() => addScore("line1") + console.log("collision")}
      >
        <MeshCollider>
          <Banana />
        </MeshCollider>
      </RigidBody>
      <RigidBody
        scale={5}
        type="fixed"
        colliders="hull"
        sensor
        position={[5, 2, 10]}
        onIntersectionEnter={() => addScore("line1") + console.log("collision")}
      >
        <MeshCollider>
          <Bottle />
        </MeshCollider>
      </RigidBody>
      <RigidBody
        scale={5}
        type="fixed"
        colliders="hull"
        sensor
        position={[5, 2, 10]}
        onIntersectionEnter={() => addScore("line1") + console.log("collision")}
      >
        <MeshCollider>
          <Can />
        </MeshCollider>
      </RigidBody>
      <RigidBody
        scale={5}
        type="fixed"
        colliders="hull"
        sensor
        position={[5, 2, 10]}
        onIntersectionEnter={() => addScore("line1") + console.log("collision")}
      >
        <MeshCollider>
          <Net />
        </MeshCollider>
      </RigidBody>
      <RigidBody
        scale={5}
        type="fixed"
        colliders="hull"
        sensor
        position={[5, 2, 10]}
        onIntersectionEnter={() => addScore("line1") + console.log("collision")}
      >
        <MeshCollider>
          <Spray />
        </MeshCollider>
      </RigidBody>
      <RigidBody
        scale={5}
        type="fixed"
        colliders="hull"
        sensor
        position={[5, 2, 10]}
        onIntersectionEnter={() => addScore("line1") + console.log("collision")}
      >
        <MeshCollider>
          <Tube />
        </MeshCollider>
      </RigidBody>
      <RigidBody
        scale={5}
        type="fixed"
        colliders="hull"
        sensor
        position={[5, 2, 10]}
        onIntersectionEnter={() => addScore("line1") + console.log("collision")}
      >
        <MeshCollider>
          <Wine />
        </MeshCollider>
      </RigidBody>
    </>
  );
};

export default GarbageLine;
