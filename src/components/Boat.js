import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { KeyboardControls, PerspectiveCamera } from "@react-three/drei";
import Ecctrl from "ecctrl";
import { Suspense } from "react";
const Boat = () => {
  const gltf = useLoader(GLTFLoader, "/models/interceptor.gltf");

  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "run", keys: ["Shift"] },
    { name: "jump", keys: ["Space"] },
    // Optional animation key map
  ];

  return (
    <>
      <KeyboardControls map={keyboardMap}>
        <Ecctrl
          name="boat"
          debug={true}
          maxVelLimit={20}
          turnSpeed={10}
          sprintMult={3}
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
