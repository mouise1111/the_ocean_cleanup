import React, { useEffect, useState, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useThree, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

const Boat = () => {
  const { camera } = useThree();
  const boatRef = useRef();
  const [position, setPosition] = useState([0, 0, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [targetPosition, setTargetPosition] = useState([0, 0, 0]);
  const [targetRotation, setTargetRotation] = useState([0, 0, 0]);
  const positionRef = useRef([0, 0, 0]);
  const rotationRef = useRef([0, 0, 0]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      let newTargetPosition = [...targetPosition];
      let newTargetRotation = [...targetRotation];
      switch (event.key) {
        case "ArrowUp":
          newTargetPosition[2] += 1;
          newTargetRotation[1] = Math.PI * 2;
          break;
        case "ArrowDown":
          newTargetPosition[2] -= 1;
          newTargetRotation[1] = Math.PI;
          break;
        case "ArrowLeft":
          newTargetPosition[0] += 1;
          newTargetRotation[1] = Math.PI / 2;
          break;
        case "ArrowRight":
          newTargetPosition[0] -= 1;
          newTargetRotation[1] = Math.PI * 1.5;
          break;
        default:
          break;
      }
      setTargetPosition(newTargetPosition);
      setTargetRotation(newTargetRotation);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [targetPosition, targetRotation]);

  useFrame(() => {
    positionRef.current = positionRef.current.map((pos, i) =>
      THREE.MathUtils.lerp(pos, targetPosition[i], 0.1)
    );
    rotationRef.current = rotationRef.current.map((rot, i) =>
      THREE.MathUtils.lerp(rot, targetRotation[i], 0.1)
    );
    setPosition(positionRef.current);
    setRotation(rotationRef.current);
    if (boatRef.current) {
      camera.lookAt(boatRef.current.position);
    }
  });
  const gltf = useLoader(GLTFLoader, "/models/interceptor.gltf");

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position-x={positionRef.current[0]}
        position-y={positionRef.current[1] + 5}
        position-z={positionRef.current[2] - 20}
        rotation-y={Math.PI}
      />

      <primitive
        object={gltf.scene}
        scale={1}
        position-y={1}
        position={positionRef.current}
        rotation={rotationRef.current}
      />
    </>
  );
};

export default Boat;
