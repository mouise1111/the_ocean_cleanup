import { Canvas } from "@react-three/fiber";
import Ocean from "./components/Ocean.js";
import Boat from "./components/Boat.js";
import Story from "./components/Story.js";

const App = () => (
  <Canvas>
    <directionalLight intensity={2} />
    <ambientLight />
    <Boat />
    <Ocean />
    <Story />
  </Canvas>
);

export default App;
