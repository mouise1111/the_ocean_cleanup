// HomePage.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import ArrowKeysPopup from "../components/pop-ups/ArrowKeys";
import Ocean from "../components/Ocean.js";
import Boat from "../components/Boat.js";
import Story from "../components/Islands/Story.js";
import { FloatingGarbage } from "./FloatingGarbage.js";
import Lights from "./Lights.js";

const HomePage = () => (
  <>
    <Canvas>
      <Lights />
      <Boat />
      <Ocean />
      <Story isInHomepage={true} />
      <FloatingGarbage />
    </Canvas>
    <ArrowKeysPopup />
  </>
);
export default HomePage;
