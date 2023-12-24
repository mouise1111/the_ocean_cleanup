import React from "react";
import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { Ocean } from "../components/Ocean";
import Projects from "../components/Islands/Projects";
import { OceansAndRiversPopUp } from "../components/pop-ups/OceansAndRiversPopUp";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";

const ProjectsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    // Navigate back to the Home page or perform other actions
    navigate("/");
  };

  const islandPosition = [100, 65, 320];

  return (
    <>
      <Canvas>
        <Physics>
          <ambientLight />
          <directionalLight />
          <Ocean />
          <Projects isInHomepage={false} scaleMultiplier={2.5} />
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableDamping={true}
            dampingFactor={0.25}
            rotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
            initialPosition={[80, 30, 320]}
            target={islandPosition}
          />
        </Physics>
      </Canvas>

      <OceansAndRiversPopUp onBack={handleBack} />   
    </>
  );
};

export default ProjectsPage;
