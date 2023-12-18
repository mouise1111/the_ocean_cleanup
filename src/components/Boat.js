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
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position-y={30}
        position-z={-45}
        rotation-x={0.6}
        rotation-y={Math.PI}
      />
      <Physics debug={false} timeStep="vary">
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
          args={[49, 2, 36]}
        />
      </Physics>
    </>
  );
};

export default Boat;
