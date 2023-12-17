import React from "react";

const Ocean = () => (
  <mesh>
    <boxGeometry args={[750, 0.2, 750]} />
    <meshBasicMaterial color={0x0065c4} flatShading={true} wireframe={false} />
  </mesh>
);

export default Ocean;
