import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import ArrowKeysPopup from "../components/pop-ups/ArrowKeys";
import { Cloud } from "../components/Cloud.js";
import { Ocean } from "../components/Ocean.js";
import Boat from "../components/Boat.js";
import Story from "../components/Islands/Story.js";
import GarbageLine from "../components/minigameComponents/GarbageLine.js";
import Menu from "../components/pop-ups/menu/Menu.js";
import Projects from "../components/Islands/Projects.js";
import Game from "../components/Islands/Game.js";
import Lights from "../components/Lights.js";
import { Physics } from "@react-three/rapier";
import Donate from "../components/Islands/Donate.js";
import { Leva, folder, useControls } from "leva";
import { Whale } from "../components/Whale.js";
import { GenerateGarbage } from "../components/Garbage.js";
import Loader from "../pages/Loader.js";
import StartGame from "../components/pop-ups/StartGame.js";
import Leaderboard from "../components/pop-ups/Leaderboard.js";
import Ecctrl, { EcctrlJoystick } from "ecctrl";
import { isMobile, isTablet } from "react-device-detect";
import { ShareButton } from "../components/pop-ups/ShareButton.js";
import { AboutButton } from "../components/pop-ups/AboutButton.js";

const HomePage = () => {
  const [popUpStatus, setPopUpStatus] = useState({
    showStartGame: false,
    showLeaderboard: false,
  });

  // Debug UI
  const [gradientColors, setGradientColors] = useState({
    topColor: "#6BB1CC",
    bottomColor: "#FFFFFF",
  });

  const { topColor, bottomColor, isPhysics } = useControls({
    "Color Skybow": folder({
      topColor: {
        label: "Top Color",
        value: gradientColors.topColor,
        color: true,
      },
      bottomColor: {
        label: "Bottom Color",
        value: gradientColors.bottomColor,
        color: true,
      },
      isPhysics: {
        label: "Physics debugger",
        value: false,
      },
    }),
  });

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Leva hidden={false} collapsed={true} />
        {(isMobile || isTablet) && <EcctrlJoystick />}
        <Canvas
        // colorManagement
          style={{
            background: `linear-gradient(180deg, ${topColor} 0%, ${bottomColor} 100%)`,
          }}
        >
          <fog attach="fog" args={["#067caa", 200, 400]} />
          <Lights />
          <Physics debug={isPhysics} timeStep="vary">
            <Boat />
            <Ocean />
            {/* <Whale /> */}
            <Story isInHomepage={true} />
            <Projects isInHomepage={true} />
            <Donate isInHomepage={true} />
            {/* Pass setPopUpStatus function to the Game component */}
            <Game setPopUpStatus={setPopUpStatus} isInHomePage={true} />
            <Cloud />
            <GarbageLine position-y={0} />
            {/* <GenerateGarbage /> */}
          </Physics>
        </Canvas>
        {!isMobile && !isTablet && <ArrowKeysPopup />}
        {popUpStatus.showStartGame && (
        <StartGame 
          onStartClick={() => setPopUpStatus({ showStartGame: false, showLeaderboard: true })} 
          onCloseClick={() => setPopUpStatus({ showStartGame: false})} 
        />
        )}
        {popUpStatus.showLeaderboard && (
          <Leaderboard
            onStopClick={() => setPopUpStatus({ showLeaderboard: false })}
          />
          )}
        <Menu />
        <ShareButton />
        <AboutButton />
      </Suspense>
    </>
  );
};

export default HomePage;
