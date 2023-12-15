import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";

const Story = () => {
  const gltf = useLoader(GLTFLoader, "/models/islands/story.gltf");

  return (
    <Physics debug>
      <RigidBody
        type="fixed"
        position={[0, 0, 25]}
        colliders={"trimesh"}
        // restitution={2}
        // friction={1}
      >
        <primitive object={gltf.scene} rotation-y={Math.PI / 2} />
      </RigidBody>
    </Physics>
  );
};

export default Story;
