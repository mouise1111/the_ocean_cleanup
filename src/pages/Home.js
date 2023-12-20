import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import ArrowKeysPopup from "../components/pop-ups/ArrowKeys";
import { Ocean } from "../components/Ocean.js";
import Boat from "../components/Boat.js";
import Story from "../components/Islands/Story.js";
import Menu from "../components/pop-ups/menu/Menu.js";
import Projects from "../components/Islands/Projects.js";
import Lights from "./Lights.js";
import { Physics } from "@react-three/rapier";
import Donate from "../components/Islands/Donate.js";
import { Leva, folder, useControls } from "leva";

import { Whale } from "../components/Whale.js";
import { GenerateGarbage } from "../components/Garbage.js";

const HomePage = () => {
  // Debug UI
  const [gradientColors, setGradientColors] = useState({
    topColor: "#6BB1CC",
    bottomColor: "#FFFFFF",
  });

  const { topColor, bottomColor } = useControls({
    "Color Skybow": folder({
      topColor: { label: "Top Color", value: gradientColors.topColor, color: true },
      bottomColor: { label: "Bottom Color", value: gradientColors.bottomColor, color: true },
    }),
  });
  return (
    <>
      <Canvas
        colorManagement
        style={{ background: `linear-gradient(180deg, ${topColor} 0%, ${bottomColor} 100%)` }}
      >
        <Lights />
        <Physics debug={false} timeStep="vary">
          <Boat />
          <Ocean />
          <Whale />
          <Story isInHomepage={true} />
          <Projects isInHomepage={true} />
          <Donate isInHomepage={true} />
          <GenerateGarbage />
        </Physics>
      </Canvas>
      <ArrowKeysPopup />
      <Menu />
    </>
  );
};

export default HomePage;
