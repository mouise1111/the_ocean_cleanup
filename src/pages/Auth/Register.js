// StoryTellingPage.js
import { Canvas } from "@react-three/fiber"; // Make sure to import Canvas from react-three/fiber
import { useNavigate } from "react-router-dom";
import { Ocean } from "../../components/Ocean";
import Story from "../../components/Islands/Story";
import StoryPopUp from "../../components/pop-ups/Auth/Register";
import { OrbitControls } from "@react-three/drei";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    // Navigate back to the Home page or perform other actions
    navigate("/");
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

export default LoginPage;
