// HomePage.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import ArrowKeysPopup from "../components/pop-ups/ArrowKeys";
import Ocean from "../components/Ocean.js";
import Boat from "../components/Boat.js";
import Story from "../components/Islands/Story.js";
import Menu from "../components/pop-ups/menu/Menu.js";
import Projects from "../components/Islands/Projects.js";

const HomePage = () => (
  <>
    <Canvas>
      <directionalLight intensity={2} />
      <ambientLight />
      <Boat />
      <Ocean />
      <Story isInHomepage={true} />
      <Projects isInHomepage={true} />
    </Canvas>
    <ArrowKeysPopup />
    <Menu />
  </>
);

export default HomePage;
