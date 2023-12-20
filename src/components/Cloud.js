import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "@react-three/fiber";
import { useAnimations } from "@react-three/drei";

export const Cloud = () => {
  const cloud = useLoader(GLTFLoader, "/models/cloud/cloud.gltf");
  const cloudRef = useRef();

  // Use useFrame to animate the cloud's position
  useFrame((state, delta) => {
    // Adjust the speed and range of the movement as needed
    const speed = 0.4;
    const range = 5;

    // Update the cloud's position based on a sine wave
    cloudRef.current.position.y = Math.sin(state.clock.elapsedTime * speed) * range;
  });

  return (
    <primitive
      object={cloud.scene}
      scale={1.3}
      position={[-200, 100, 20]}
      rotation={[-0.05, 0, 0]}
      ref={cloudRef}
    />
  );
};
