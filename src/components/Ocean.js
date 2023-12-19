import React from "react";
import { MeshCollider, RigidBody } from "@react-three/rapier";

const Ocean = () => (
  <RigidBody type="fixed">
    <MeshCollider type="cuboid">
      <mesh>
        <boxGeometry args={[1300, 1, 1300]} />
        <meshBasicMaterial color={0x0065c4} />
      </mesh>
    </MeshCollider>
  </RigidBody>
);

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
