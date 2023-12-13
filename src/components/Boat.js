import React, { useEffect, useState } from "react";
import { Box } from "@react-three/drei";

const Boat = () => {
  const [position, setPosition] = useState([0, 0, 0]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
          setPosition((prev) => [prev[0], prev[1], prev[2] - 1]);
          break;
        case "ArrowDown":
          setPosition((prev) => [prev[0], prev[1], prev[2] + 1]);
          break;
        case "ArrowLeft":
          setPosition((prev) => [prev[0] - 1, prev[1], prev[2]]);
          break;
        case "ArrowRight":
          setPosition((prev) => [prev[0] + 1, prev[1], prev[2]]);
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

  return (
    <Box args={[1, 1, 1]} position={position}>
      <meshStandardMaterial color={"#bada55"} />
    </Box>
  );
};

export default Boat;
