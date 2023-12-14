import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

export const Bag = () => {
  const bag = useLoader(GLTFLoader, "/models/bag.gltf");
  return <primitive object={bag.scene} scale={0.4} />;
};

export const Banana = () => {
  const banana = useLoader(GLTFLoader, "/models/banana.gltf");
  return <primitive object={banana.scene} scale={0.4} />;
};

export const Bottle = () => {
  const bottle= useLoader(GLTFLoader, "/models/bottle.gltf");
  return <primitive object={bottle.scene} scale={0.4} />;
};

export const Can = () => {
  const can= useLoader(GLTFLoader, "/models/can.gltf");
  return <primitive object={can.scene} scale={1} />;
};

export const Net = () => {
  const net= useLoader(GLTFLoader, "/models/net.gltf");
  return <primitive object={net.scene} scale={0.6} />;
};

export const Spray = () => {
  const spray= useLoader(GLTFLoader, "/models/spray.gltf");
  return <primitive object={spray.scene} scale={1} />;
};

export const Tube = () => {
  const tube= useLoader(GLTFLoader, "/models/tube.gltf");
  return <primitive object={tube.scene} scale={1} />;
};

export const Wine = () => {
  const wine= useLoader(GLTFLoader, "/models/wine.gltf");
  return <primitive object={wine.scene} scale={0.8} />;
};
