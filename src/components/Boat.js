import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import Ecctrl from "ecctrl";
const Boat = () => {
  const gltf = useLoader(GLTFLoader, "/models/interceptor.gltf");

  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "run", keys: ["Shift"] },
  ];

  return (
    <>
      <KeyboardControls map={keyboardMap}>
        <Ecctrl
          name="boat"
          // debug={true}
          maxVelLimit={30}
          turnSpeed={10}
          sprintMult={1.5}
          autoBalanceSpringK={0.8}
          position-y={25}
          floatHeight={1}
          camInitDir={{ x: 0.5, y: 0, z: 0 }} // Camera initial rotation direction (in rad)
          camInitDis={-40} // Initial camera distance
          camMoveSpeed={1} // Camera moving speed multiplier
          camZoomSpeed={1} // Camera zooming speed multiplier
          camCollision={true} // Camera collision active/deactive
          camCollisionOffset={0.7} // Camera collision offset
        >
          <primitive object={gltf.scene} scale={1.8} />
        </Ecctrl>
      </KeyboardControls>
    </>
  );
};

export default Boat;
