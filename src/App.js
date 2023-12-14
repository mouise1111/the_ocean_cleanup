import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ocean from "./components/Ocean.js";
// import Boat from "./components/Boat.js";
import Garbage from "./components/Garbage.js";

const App = () => (
  <Canvas
    shadowMap
    camera={{ position: [0, 5, 15], fov: 60 }}
    gl={{ antialias: true }}
  >
    <ambientLight />
    <Ocean />
    <Garbage />
    <OrbitControls />
  </Canvas>
);

export default App;
