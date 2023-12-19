// HomePage.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import ArrowKeysPopup from "../components/pop-ups/ArrowKeys";
import Ocean from "../components/Ocean.js";
import Boat from "../components/Boat.js";
import Story from "../components/Islands/Story.js";
import Lights from "../components/Lights.js";
import { FloatingGarbage } from "../components/FloatingGarbage.js";

const HomePage = () => (
  <>
    <Canvas>
      <Lights />
      <Boat />
      <Ocean />
      <FloatingGarbage />
      <Story isInHomepage={true} />
    </Canvas>
    <ArrowKeysPopup />
  </>
);

export default HomePage;
