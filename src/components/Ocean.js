import React from "react";
const Ocean = () => (
  <mesh position-y={-5} rotation-x={-Math.PI * 0.5} scale={10}>
    <planeGeometry args={[30, 30, 50, 50]} />
    <meshBasicMaterial color={0x00aacc} flatShading={true} wireframe={false} />
  </mesh>
);

export default Ocean;
