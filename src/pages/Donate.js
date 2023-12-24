import React from "react";
import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { Ocean } from "../components/Ocean";
import Donate from "../components/Islands/Donate";
import { DonatePopUp } from "../components/pop-ups/DonatePopUp";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";

const DonatePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    // Navigate back to the Home page or perform other actions
    navigate("/");
  };

  const islandPosition = [-80, 80, 280];

  return (
    <>
      <Canvas>
        <Physics>
          <ambientLight />
          <directionalLight />
          <Ocean />
          <Donate isInHomepage={false} scaleMultiplier={3.5} />
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableDamping={true}
            dampingFactor={0.25}
            rotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2 -0.15}
            minPolarAngle={Math.PI / 4 -0.15}
            initialPosition={[-110, 30, 300]}
            target={islandPosition}
          />
        </Physics>
      </Canvas>

      <DonatePopUp onBack={handleBack} />   
    </>
  );
};

export default DonatePage;
