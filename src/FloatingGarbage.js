import React, { useRef, useEffect } from "react";
import { Bag, Banana, Bottle, Can, Net, Spray, Tube, Wine } from "./components/Garbage.js";

const models = [Bag, Banana, Bottle, Can, Net, Spray, Tube, Wine];
let directionMultiplierX = 1;
let directionMultiplierZ = 1;
let spinSpeedMultiplier = 1;

const getRandomPosition = () => ({
  x: (Math.random() * 100) * (Math.random() < 0.5 ? -1 : 1),
  y: 0,
  z: (Math.random() * 100) * (Math.random() < 0.5 ? -1 : 1),
});

const getRandomSpinSpeed = (boolean) => {
  if (boolean) {
    spinSpeedMultiplier = -1;
  }

  return {
    spinSpeed: (Math.random() / 100) * spinSpeedMultiplier,
  };
};

const getRandomMovement = (boolean) => {
  if (boolean) {
    const randomNumber = Math.random();
    directionMultiplierX = randomNumber < 0.5 ? (boolean ? 1 : -1) : (boolean ? -1 : 1);
    directionMultiplierZ = randomNumber < 0.5 ? (boolean ? 1 : -1) : (boolean ? -1 : 1);
  };

  return {
    x: 0.01 * directionMultiplierX,
    z: 0.01 * directionMultiplierZ,
  };
};

export const FloatingGarbage = () => {
  const groupRef = useRef();
  let spinCounter = 0;
  let spinThreshold = 2000;
  let boolean = false;

  const tick = () => {
    if (groupRef.current) {
      groupRef.current.children.forEach((modelRef, index) => {
        if (modelRef.isObject3D) {
          const randomMovement = getRandomMovement(boolean);
          modelRef.position.x += randomMovement.x;
          modelRef.position.z += randomMovement.z;
          const randomSpinspeed = getRandomSpinSpeed(boolean);
          modelRef.rotation.y += randomSpinspeed.spinSpeed;
          spinCounter++;
          if (boolean) {
            boolean = false;
          }
          if (spinCounter >= spinThreshold) {
            spinCounter = 0;
            boolean = true;
            spinThreshold = Math.random() * 100 + 2000;
          }
        }
      });
    }

    const animationId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(animationId);
    };
  };

  tick();

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.children.forEach((modelRef, index) => {
        if (modelRef.isObject3D) {
          const randomPosition = getRandomPosition();
          modelRef.position.set(randomPosition.x, randomPosition.y, randomPosition.z);
        }
      });
    }

    return () => {};
  }, []);

  return (
    <group ref={groupRef}>
      {models.map((Model, index) => (
        <Model key={index} name={`model_${index}`} />
      ))}
    </group>
  );
};
