import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ocean from "./components/Ocean.js";
const App = () => (
  <Canvas>
    <Ocean />
    <OrbitControls />
  </Canvas>
);

export default App;
