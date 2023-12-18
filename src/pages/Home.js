// HomePage.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import ArrowKeysPopup from "../components/pop-ups/ArrowKeys";
import Ocean from "../components/Ocean.js";
import Boat from "../components/Boat.js";
import Story from "../components/Islands/Story.js";

const HomePage = () => (
  <>
    <Canvas>
      <directionalLight intensity={2} />
      <ambientLight />
      <Boat />
      <Ocean />
      <Story isInHomepage={true} />
    </Canvas>
    <ArrowKeysPopup />
  </>
);

export default HomePage;
