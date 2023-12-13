import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ocean from "./components/Ocean.js";
import Boat from "./components/Boat.js";
const App = () => (
  <Canvas>
    <Boat />
    <Ocean />
    <OrbitControls />
  </Canvas>
);

export default App;
