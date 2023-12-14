import { Canvas } from "@react-three/fiber";
import Ocean from "./components/Ocean.js";
import Boat from "./components/Boat.js";

const App = () => (
  <Canvas>
    <directionalLight intensity={0.5} />
    <ambientLight />
    <Boat />
    <Ocean />
  </Canvas>
);

export default App;
