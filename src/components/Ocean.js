import React from "react";

const Ocean = () => (
  <mesh>
    <boxGeometry args={[10750, 0.2, 10750]} />
    <meshBasicMaterial color={0x0065c4} flatShading={true} wireframe={false} />
  </mesh>
);

export default Ocean;
