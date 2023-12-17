// StoryTellingPage.js
import { Canvas } from "@react-three/fiber"; // Make sure to import Canvas from react-three/fiber
import { useNavigate } from "react-router-dom";
import Ocean from "../components/Ocean";
import StoryPopUp from "../components/pop-ups/StoryPopUp";
import Story from "../components/Islands/Story";
import { OrbitControls } from "@react-three/drei";

const StoryTellingPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    // Navigate back to the Home page or perform other actions
    navigate("/home");
  };

  return (
    <Canvas>
      <Ocean />
      <Story isInHomepage={false} />
      <OrbitControls />
      <StoryPopUp onBack={handleBack} />
    </Canvas>
  );
};

export default StoryTellingPage;
