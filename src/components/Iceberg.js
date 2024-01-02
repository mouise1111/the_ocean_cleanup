import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

export const Iceberg = () => {
  const iceberg = useLoader(GLTFLoader, "/models/iceberg.gltf");

  return (
    <RigidBody type="fixed" colliders="hull">
    <primitive
      object={iceberg.scene}
      scale={1.3}
      position={[-250, 0, -80]}
      rotation={[0, 7, 0]}
    />
    </RigidBody>
  );
};
