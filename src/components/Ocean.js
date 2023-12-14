import React from "react";
const Ocean = () => (
  <mesh position-y={0}>
    <boxGeometry args={[250, 0.2, 250]} />
    <meshBasicMaterial color={0x0065c4} flatShading={true} wireframe={false} />
  </mesh>
);

export default Ocean;
