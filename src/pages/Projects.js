import React, { useState, useEffect, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { Ocean } from "../components/Ocean";
import Projects from "../components/Islands/Projects";
import { OceansAndRiversPopUp } from "../components/pop-ups/OceansAndRiversPopUp";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [canvasComponentsRendered, setCanvasComponentsRendered] =
    useState(false);
  const canvasRef = useRef();

  const islandPosition = [67, 70, 277];

  const handleBack = () => {
    // Navigate back to the Home page or perform other actions
    navigate("/");
  };

  const handleCanvasCreated = () => {
    // This function is called when the Canvas is fully set up
    setCanvasComponentsRendered(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timer when the component unmounts or when the loading is complete
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
              initialPosition={[-300, 20, 550]}
              target={islandPosition}
            />
          </Physics>
        </Suspense>
      </Canvas>
      {!loading && <OceansAndRiversPopUp onBack={handleBack} />}
    </div>
  );
};

export default ProjectsPage;
