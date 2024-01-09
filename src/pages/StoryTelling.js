import React, { useState, useEffect, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { Ocean } from "../components/Ocean";
import Story from "../components/Islands/Story";
import { StoryPopUp } from "../components/pop-ups/StoryPopUp";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Lights from "../components/Lights.js";

const StoryTellingPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [canvasComponentsRendered, setCanvasComponentsRendered] =
    useState(false);
  const canvasRef = useRef();

  const handleBack = () => {
    navigate("/");
  };

  const islandPosition = [-25, 20, 180];

  const handleCanvasCreated = () => {
    setCanvasComponentsRendered(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-blue-400 bg-opacity-80">
          <div className="w-16 h-16 border-t-8 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}
      <button
        className="absolute uppercase text-white bottom-0.5 left-0 p-5 mt-2 transition-colors bg-amber-600 rounded-r-xl hover:bg-amber-500"
        onClick={handleBack}
        style={{ zIndex: 1 }}
      >
        Esc
      </button>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-white opacity-70"></div>
      <Canvas onCreated={handleCanvasCreated} ref={canvasRef}>
        <Suspense fallback={null}>
          <Physics>
            <Lights />
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
              initialPosition={[-20, 50, 180]}
              target={islandPosition}
            />
          </Physics>
        </Suspense>
      </Canvas>
      {!loading && <StoryPopUp onBack={handleBack} />}
    </div>
  );
};

export default StoryTellingPage;
