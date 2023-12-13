import React, { useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

const Boat = () => {
  const [position, setPosition] = useState([0, 0, 0]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
          setPosition((prev) => [prev[0], prev[1], prev[2] + 0.1]);
          break;
        case "ArrowDown":
          setPosition((prev) => [prev[0], prev[1], prev[2] - 0.1]);
          break;
        case "ArrowLeft":
          setPosition((prev) => [prev[0] + 0.1, prev[1], prev[2]]);
          break;
        case "ArrowRight":
          setPosition((prev) => [prev[0] - 0.1, prev[1], prev[2]]);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const gltf = useLoader(GLTFLoader, "/models/interceptor-final.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={1} position={position} />
    </>
  );
};

export default Boat;
