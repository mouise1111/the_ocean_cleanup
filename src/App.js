import { Canvas } from "@react-three/fiber";
import Ocean from "./components/Ocean.js";
import Boat from "./components/Boat.js";
import { FloatingGarbage } from "./FloatingGarbage.js";
import Lights from "./Lights.js";

const App = () => (
  <Canvas>
    <Lights />
    <Ocean />
    <FloatingGarbage />
    <OrbitControls />
  </Canvas>
);

export default App;
