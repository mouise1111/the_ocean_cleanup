import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "@react-three/fiber";
import { useAnimations } from "@react-three/drei";

export const Cloud = () => {
    const cloud = useLoader(GLTFLoader, "/models/cloud/cloud.gltf")
    const cloudRef = useRef();


 return (
    <primitive
      object={cloud.scene}
      scale={1.3}
      position={[-100, 0, 70]}
      rotation={[-0.05, 0, 0]}
      ref={cloudRef}
    />
  );
};