// StoryTellingPage.js
import { Canvas } from "@react-three/fiber"; // Make sure to import Canvas from react-three/fiber
import { useNavigate } from "react-router-dom";
import { Ocean } from "../../components/Ocean";
import Story from "../../components/Islands/Story";
import StoryPopUp from "../../components/pop-ups/Auth/Login";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
const LoginPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    // Navigate back to the Home page or perform other actions
    navigate("/");
  };

  return (
    <Canvas>
      <Physics>
      <Ocean />
      <Story isInHomepage={false} />
      <OrbitControls />
      <StoryPopUp onBack={handleBack} />
      </Physics>
    </Canvas>
  );
};

export default LoginPage;
