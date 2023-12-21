import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { useNavigate } from "react-router-dom";

const Story = ({ isInHomepage, scaleMultiplier = 1 }) => {
  const navigate = useNavigate();
  const gltf = useLoader(GLTFLoader, "/models/islands/story.gltf");

  const handleStoryClick = () => {
    if (isInHomepage) {
      // Navigate to the Story page only if the cube is in the homepage
      navigate("/story");
    }
  };


  return (
      <Physics debug={false}>
        <RigidBody
          type="fixed"
          position={[-40, 0, 80]}
          colliders={"trimesh"}
          onClick={handleStoryClick}
        >
          <primitive object={gltf.scene} rotation-y={Math.PI / 2} scale={[2 * scaleMultiplier, 2 * scaleMultiplier, 2 * scaleMultiplier]} />
        </RigidBody>
      </Physics>
  );
};

export default Story;
