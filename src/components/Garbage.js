import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

const Garbage = () => {
  const bagGltf = useLoader(GLTFLoader, "/models/bag.gltf");
  const bananaGltf = useLoader(GLTFLoader, "/models/banana.gltf");
  const bottleGltf = useLoader(GLTFLoader, "/models/bottle.gltf");
  const canGltf = useLoader(GLTFLoader, "/models/can.gltf");
  const netGltf = useLoader(GLTFLoader, "/models/net.gltf");
  const sprayGltf = useLoader(GLTFLoader, "/models/spray.gltf");
  const tubeGltf = useLoader(GLTFLoader, "/models/tube.gltf");
  const wineGltf = useLoader(GLTFLoader, "/models/wine.gltf");

  return (
    <group>
      <primitive object={bagGltf.scene} scale={0.4} flatShading />
      <primitive object={bananaGltf.scene} scale={1} flatShading />
      <primitive object={bottleGltf.scene} scale={0.4} flatShading />
      <primitive object={canGltf.scene} scale={1} flatShading />
      <primitive object={netGltf.scene} scale={0.6} flatShading />
      <primitive object={sprayGltf.scene} scale={1} flatShading />
      <primitive object={tubeGltf.scene} scale={1} flatShading />
      <primitive object={wineGltf.scene} scale={0.8} flatShading />
    </group>
  );
};

export default Garbage;
