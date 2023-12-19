import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { useNavigate } from "react-router-dom";
import { useThree } from "react-three-fiber";
import React, { useEffect, useState, useRef } from "react";
import {
  CuboidCollider,
  BallCollider,
} from "@react-three/rapier";
const GarbageLine = ({ isInHomepage}) => {
  const navigate = useNavigate();
  const { camera } = useThree();

  
  const Bananagltf = useLoader(GLTFLoader, "/models/banana.gltf");
  const baggltf = useLoader(GLTFLoader, "/models/bag.gltf");
  const bottlegltf = useLoader(GLTFLoader, "/models/bottle.gltf");
  const cangltf = useLoader(GLTFLoader, "/models/can.gltf");
  const netgltf = useLoader(GLTFLoader, "/models/net.gltf");
  const spraygltf = useLoader(GLTFLoader, "/models/spray.gltf");
  const tubegltf = useLoader(GLTFLoader, "/models/tube.gltf");
  const winegltf = useLoader(GLTFLoader, "/models/wine.gltf");



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
    <Physics debug={true}>
      <RigidBody
        type="fixed"
        position={[-80, 0, 150]}
        colliders={"trimesh"}
        // restitution={2}
        // friction={1}
      >
        <primitive object={Bananagltf.scene} rotation-y={Math.PI / 2} scale={2} />
      </RigidBody>


      <RigidBody
        type="fixed"
        position={[-60, 0, 250]}
        colliders={"trimesh"}
        // restitution={2}
        // friction={1}
      >
        <primitive object={baggltf.scene} rotation-y={Math.PI / 2} scale={2} />
      </RigidBody>


      <RigidBody
        type="fixed"
        position={[-70, 0, 200]}
        colliders={"trimesh"}
        // restitution={2}
        // friction={1}
      >
        <primitive object={bottlegltf.scene} rotation-y={Math.PI / 2} scale={2} />
      </RigidBody>

      <RigidBody
        type="fixed"
        position={[-50, 0, 300]}
        colliders={"trimesh"}
        // restitution={2}
        // friction={1}
      >
        <primitive object={cangltf.scene} rotation-y={Math.PI / 2} scale={2} />
      </RigidBody>

      <RigidBody
        type="fixed"
        position={[-20, 0, 350]}
        colliders={"trimesh"}
        // restitution={2}
        // friction={1}
      >
        <primitive object={netgltf.scene} rotation-y={Math.PI / 2} scale={2} />
      </RigidBody>

      <RigidBody
        type="fixed"
        position={[-10, 0, 390]}
        colliders={"trimesh"}
        // restitution={2}
        // friction={1}
      >
        <primitive object={spraygltf.scene} rotation-y={Math.PI / 2} scale={2} />
      </RigidBody>
       {/* projects garbageLine */}
       {garbageLinesVisibility.line1 && (
          <CuboidCollider
            type="fixed"
            position={[-80, 0, 150]} 
            sensor
            args={[3, 2, 4]} onIntersectionEnter={() => addScore('line1') + console.log('i am called hihi')} 

          
          />
        )}
        {garbageLinesVisibility.line2 && (
          <CuboidCollider
            type="fixed"
            position={[-60, 0, 250]} 
            args={[3, 2, 4]} onCollisionEnter={() => addScore('line2')  }
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
  );
};


export default GarbageLine;
