import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { MeshCollider, RigidBody } from "@react-three/rapier";

export const Ocean = () => {
  const ocean = useLoader(GLTFLoader, "/models/ocean.gltf");
  return (
    <RigidBody type="fixed">
      <MeshCollider type="trimesh">
      <primitive object={ocean.scene} position={ [0, 90, 0] } />
      </MeshCollider>
    </RigidBody>
  );
};
