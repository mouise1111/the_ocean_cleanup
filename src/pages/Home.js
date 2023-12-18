// HomePage.js
import { Canvas } from "@react-three/fiber";
import Ocean from "../components/Ocean.js";
import Boat from "../components/Boat.js";
import Story from "../components/Islands/Story.js";
import { FloatingGarbage } from "./FloatingGarbage.js";
import Lights from "./Lights.js";

const HomePage = () => (
  <Canvas>
    <Lights />
    <Boat />
    <Ocean />
    <FloatingGarbage />
    <Story />
  </Canvas>
)
export default HomePage;
