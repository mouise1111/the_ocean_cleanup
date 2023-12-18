import React from "react";

const Ocean = () => (
  <mesh position={(0, -6, 0)}>
    <boxGeometry args={[1300, 0.2, 1300]} />
    <meshBasicMaterial color={0x0065c4} flatShading={true} wireframe={false} />
  </mesh>
);

export default Ocean;
