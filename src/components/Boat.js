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
  const [garbageLinesVisibility, setGarbageLinesVisibility] = useState({
    line1: true,
    line2: true,
    line3: true,
    line4: true,
    line5: true,
    line6: true
  });
  const addScore = (lineId) => {
    if (!gameStarted) {
      setGameStarted(true); // Start the game on the first input
      // Start the timer when the game starts
      setTimeout(() => {
        console.log('Final Score:', currentScore.current); // Output the score using the ref
        setScore(0); // Reset the score state
        currentScore.current = 0; // Reset the score ref
        setGameStarted(false); // Reset game start state
      }, 8000); // 60,000 milliseconds = 1 minute
    }
    const newScore = currentScore.current + 100;
    currentScore.current = newScore; // Update the ref
    setScore(newScore); // Update the state
    setGarbageLinesVisibility(prevState => ({
      ...prevState,
      [lineId]: false
    }));
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
            <primitive object={gltf.scene} position-y={0} scale={1.8} />
          </Ecctrl>
        </KeyboardControls>
        {/* ocean collider */}
        <CuboidCollider
          type="fixed"
          position={[0, 0, 0]}
          args={[750, 1, 750]}
        />
        {/* story island collider */}
        <CuboidCollider
          type="fixed"
          position={[-48, 0, 85]}
          args={[49, 2, 36]} 
        />
        {/* projects island collider */}
        <CuboidCollider
          type="fixed"
          position={[110, 0, 300]}
          args={[90, 2, 70]}
        />
        {/* projects garbageLine */}
        {garbageLinesVisibility.line1 && (
          <CuboidCollider
            type="fixed"
            position={[-80, 0, 150]} 
            args={[3, 2, 4]} onCollisionEnter={() => addScore('line1')}
          />
        )}
        {garbageLinesVisibility.line2 && (
          <CuboidCollider
            type="fixed"
            position={[-60, 0, 250]} 
            args={[3, 2, 4]} onCollisionEnter={() => addScore('line2')}
          />
        )}
        {garbageLinesVisibility.line3 && (
          <CuboidCollider
            type="fixed"
            position={[-70, 0, 200]} 
            args={[3, 2, 4]} onCollisionEnter={() => addScore('line3')}
          />
        )}
        {garbageLinesVisibility.line4 && (
          <CuboidCollider
            type="fixed"
            position={[-50, 0, 300]} 
            args={[3, 2, 4]} onCollisionEnter={() => addScore('line4')}
          />
        )}
        {garbageLinesVisibility.line5 && (
          <CuboidCollider
            type="fixed"
            position={[-20, 0, 350]} 
            args={[3, 2, 4]} onCollisionEnter={() => addScore('line5')}
          />
        )}
        {garbageLinesVisibility.line6 && (
          <CuboidCollider
            type="fixed"
            position={[-10, 0, 390]} 
            args={[3, 2, 4]} onCollisionEnter={() => addScore('line6')}
          />
        )}





      </Physics>
    </>
  );
};

export default Boat;
