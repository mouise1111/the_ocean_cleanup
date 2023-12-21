import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import Ocean from "../components/Ocean";
import Story from "../components/Islands/Story";
import StoryPopUp from "../components/pop-ups/Story";
import { OrbitControls } from "@react-three/drei";

const StoryTellingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        // Navigate back to the Home page or perform other actions
        navigate("/home");
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [navigate]);

  const islandPosition = [-30, 15, 100];

  return (
    <>
      <Canvas>
        <ambientLight />
        <directionalLight />
        <Ocean />
        <Story isInHomepage={false} scaleMultiplier={2} />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.25}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          initialPosition={[-10, 10, 100]}
          target={islandPosition}
        />
      </Canvas>
      
      <StoryPopUp />
    </>
  );
};

export default StoryTellingPage;
