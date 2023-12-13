import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ocean from "./components/Ocean.js";
import Garbage from "./components/Garbage.js";
const App = () => (
  <Canvas>
    <Ocean />
    <Garbage />
    <OrbitControls />
  </Canvas>
);

export default App;
