import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import ArrowKeysPopup from "../components/pop-ups/ArrowKeys";
import { Cloud } from "../components/Cloud.js";
import { Iceberg } from "../components/Iceberg.js";
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
import { EcctrlJoystick } from "ecctrl";
import { isMobile, isTablet } from "react-device-detect";
import { ShareButton } from "../components/Buttons/ShareButton.js";
import { AboutButton } from "../components/Buttons/AboutButton.js";
import { AudioButton } from "../components/Buttons/AudioButton.js";
import { createGlobalState } from "react-hooks-global-state";
import TimerExpiredPopUp from "../components/pop-ups/TimerExpired.js";
import Timer from "../components/pop-ups/Timer.js";
import { useGlobalState, setGlobalState } from "../components/minigameComponents/globalstate.js"; // Adjust the path as needed


const HomePage = () => {
  const [popUpStatus, setPopUpStatus] = useState({
    showStartGame: false,
    showLeaderboard: false,
    showTimerExpiredPopUp: false,
    showTimer: false,
  });

  const [gameStarted] = useGlobalState("Gamestarted");

  const handleTimerExpired = () => {
    // console.log("Timer expired!");
    setPopUpStatus((prevStatus) => ({
      ...prevStatus,
      showTimer: false,
      showTimerExpiredPopUp: true,
    }));
  };

  const handleRestart = () => {
    setGlobalState('Gamestarted', true); // Restart the game
    setGlobalState('EndScore', 0); // Reset end score
    setGlobalState('CurrentScore', 0); // Reset current score
    setGlobalState('Timer', 60); // Reset timer to its initial value

    // console.log("Restarting the game...");
    setPopUpStatus({
      showStartGame: true,
      showLeaderboard: false,
      showTimerExpiredPopUp: false,
      showTimer: true,
    });
  };

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
        <Leva hidden={true} collapsed={true} />
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
            <Whale />
            <Story isInHomepage={true} />
            <Projects isInHomepage={true} />
            <Donate isInHomepage={true} />
            {/* Pass setPopUpStatus function to the Game component */}
            <Game setPopUpStatus={setPopUpStatus} isInHomePage={true} />
            <Cloud />
            <GarbageLine position-y={0} />

            {/* <GenerateGarbage /> */}
            <Iceberg />
          </Physics>
        </Canvas>

        {!isMobile && !isTablet && <ArrowKeysPopup />}
        {popUpStatus.showStartGame && (
          <StartGame
            onStartClick={() =>
              setPopUpStatus({
                showStartGame: false,
                showLeaderboard: true,
              })
            }
            onCloseClick={() => setPopUpStatus({ showStartGame: false })}
          />
        )}

        {popUpStatus.showLeaderboard && (
          <Leaderboard
            onStopClick={() => setPopUpStatus({ showLeaderboard: false })}
          />
        )}

        {gameStarted && (
          <Timer
            gameStarted={gameStarted}
            onTimerExpired={handleTimerExpired}
          />
        )}

        {popUpStatus.showTimerExpiredPopUp && (
          <TimerExpiredPopUp
            onRestart={handleRestart}
            onStop={() =>
              setPopUpStatus({
                showTimerExpiredPopUp: false,
              })
            }
          />
        )}

        <Menu setPopUpStatus={setPopUpStatus} />
        <ShareButton />
        <AudioButton />
        <AboutButton />
      </Suspense>
    </>
  );
};

export default HomePage;
