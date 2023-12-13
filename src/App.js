import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ocean from "./components/Ocean.js";
import Boat from "./components/Boat.js";

import Garbage from "./components/Garbage.js";
const App = () => (
  <Canvas>
    <ambientLight />
    <Boat />
    <Ocean />
    <Garbage />
    <OrbitControls />
  </Canvas>
);

export default App;
