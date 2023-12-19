import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "@react-three/fiber";
import { useAnimations } from "@react-three/drei";

let angle = 0;

const getCircleMovement = () => {
  const radius = 0.3;
  const x = radius * Math.cos(angle);
  const z = radius * Math.sin(angle);
  angle += 0.01;

  return {
    x,
    z,
  };
};

export const Whale = () => {
  const whale = useLoader(GLTFLoader, "/models/Whale/whale.gltf");
  const animations = useAnimations(whale.animations, whale.scene);
  const whaleRef = useRef();

  useFrame(() => {
    const circleMovement = getCircleMovement();
    whaleRef.current.position.x += circleMovement.x;
    whaleRef.current.position.z += circleMovement.z;
  });

  useEffect(() => {
    const action = animations.actions.Swim;
    action.play();
  }, [animations]);

  return (
    <primitive
      object={whale.scene}
      scale={1.3}
      position={[50, 0, 0]}
      rotation={[-0.05, 0.5, 0]}
      ref={whaleRef}
    />
  );
};
