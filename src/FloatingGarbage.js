import React, { useRef } from "react";
import { Bag, Banana, Bottle, Can, Net, Spray, Tube, Wine } from "./components/Garbage.js";

const getRandomPosition = (boolean) => {
  const spinSpeedMultiplier = boolean ? 1 : -1;
  return {
    spinSpeed: (Math.random() / 100) * spinSpeedMultiplier,
    x: Math.random() / 50,
    z: Math.random() / 50,
  };
};

export const FloatingGarbage = () => {
  const groupRef = useRef();
  let spinCounter = 0;
  let spinThreshold = 150;
  let boolean = true

  const tick = () => {
    if (groupRef.current) {
      const randomPosition = getRandomPosition(boolean);
      groupRef.current.rotation.y += randomPosition.spinSpeed;
      groupRef.current.position.x += randomPosition.x;
      groupRef.current.position.z += randomPosition.z;
      
      spinCounter++;
      if (spinCounter >= spinThreshold) {
        const randomPosition = getRandomPosition(boolean);
        groupRef.current.rotation.y += randomPosition.spinSpeed;
        groupRef.current.position.x += randomPosition.x;
        groupRef.current.position.z += randomPosition.z;
        spinCounter = 0;
        boolean = boolean ? false : true;
        spinThreshold = Math.random() * 100 + 100;
      }
    }

    window.requestAnimationFrame(tick);
  };

  React.useEffect(() => {
    tick();
  }, []);

  return (
    <group ref={groupRef}>
      <Bag />
      <Banana />
      <Bottle />
      <Can />
      <Net />
      <Spray />
      <Tube />
      <Wine />
    </group>
  );
};
