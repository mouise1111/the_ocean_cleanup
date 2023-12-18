import React, { useEffect, useState, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useThree, useFrame } from "@react-three/fiber";
import { KeyboardControls, PerspectiveCamera } from "@react-three/drei";
import {
  Physics,
  RigidBody,
  CuboidCollider,
  BallCollider,
} from "@react-three/rapier";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
const Boat = () => {
  const { camera } = useThree();

  const gltf = useLoader(GLTFLoader, "/models/interceptor.gltf");
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "run", keys: ["Shift"] },
    // Optional animation key map
  ];

  // score part
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const currentScore = useRef(0); // Ref to track the current score

  const addScore = () => {
    if (!gameStarted) {
      setGameStarted(true); // Start the game on the first input
      // Start the timer when the game starts
      setTimeout(() => {
        console.log('Final Score:', currentScore.current); // Output the score using the ref
        setScore(0); // Reset the score state
        currentScore.current = 0; // Reset the score ref
        setGameStarted(false); // Reset game start state
      }, 6000); // 60,000 milliseconds = 1 minute
    }
    const newScore = currentScore.current + 100;
    currentScore.current = newScore; // Update the ref
    setScore(newScore); // Update the state
  };

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position-y={30}
        position-z={-45}
        rotation-x={0.6}
        rotation-y={Math.PI}
      />
      <Physics debug={true} timeStep="vary">
        <KeyboardControls map={keyboardMap}>
          <Ecctrl sprintMult={2} maxVelLimit={20} turnSpeed={10}>
            <primitive object={gltf.scene} position-y={2.5} scale={1.8} />
          </Ecctrl>
        </KeyboardControls>
        {/* ocean collider */}
        <CuboidCollider
          type="fixed"
          position={[0, -2.5, 0]}
          args={[750, 1, 750]}
        />
        {/* story island collider */}
        <CuboidCollider
          type="fixed"
          position={[-48, 0, 85]}
          args={[49, 2, 36]} onCollisionEnter={addScore}
        />
      </Physics>
    </>
  );
};

export default Boat;
