import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { KeyboardControls, PerspectiveCamera } from "@react-three/drei";
import { useControls } from "leva";
import Ecctrl from "ecctrl";

const Boat = () => {
  const { debug } = useControls("Boat", {
    debug: true,
  });

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
      <PerspectiveCamera
        makeDefault
        position-y={30}
        position-z={-45}
        rotation-x={0.6}
        rotation-y={Math.PI}
      />
      <KeyboardControls map={keyboardMap}>
        <Ecctrl
          debug={true}
          maxVelLimit={20}
          turnSpeed={10}
          sprintMult={3}
          autoBalanceSpringK={0.8}
          position-y={20}
        >
          <primitive object={gltf.scene}  scale={1.8} />
        </Ecctrl>
      </KeyboardControls>
    </>
  );
};

export default Boat;
