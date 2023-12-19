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

export default Ocean;
