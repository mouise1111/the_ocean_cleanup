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

  const rotationY = (angle - Math.PI / 2) * -1;

  return {
    x,
    z,
    rotation: [0, rotationY, 0],
  };
};

export const Whale = () => {
  const whale = useLoader(GLTFLoader, "/models/whale/whale.gltf");
  const animations = useAnimations(whale.animations, whale.scene);
  const whaleRef = useRef();

  useFrame(() => {
    const circleMovement = getCircleMovement();
    whaleRef.current.position.x += circleMovement.x;
    whaleRef.current.position.z += circleMovement.z;
    whaleRef.current.rotation.set(...circleMovement.rotation);
  });

  useEffect(() => {
    const action = animations.actions.Swim;
    action.play();
  }, [animations]);

  return (
    <primitive
      object={whale.scene}
      scale={1.5}
      position={[50, 0, 0]}
      rotation={[-0.05, 0, 0]}
      ref={whaleRef}
    />
  );
};
