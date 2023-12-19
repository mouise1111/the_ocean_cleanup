import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { RigidBody, MeshCollider, Physics } from "@react-three/rapier";

// export const Ocean = () => (
//   // <mesh position={(0, -6, 0)}>
//   //   <boxGeometry args={[1300, 0.2, 1300]} />
//   //   <meshBasicMaterial color={0x0065c4} flatShading={true} wireframe={false} />
//   // </mesh>
// );

export const Ocean = () => {
  const ocean = useLoader(GLTFLoader, "/models/ocean.gltf");
  return (
    <Physics debug="true">
      <RigidBody type="fixed">
        <MeshCollider type="hull">
        <primitive object={ocean.scene} scale={10} position={ [0, -20, 0] } />
        </MeshCollider>
      </RigidBody>
    </Physics>
  );
};

// export default Ocean;
