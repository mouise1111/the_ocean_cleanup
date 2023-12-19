import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { RigidBody, MeshCollider } from "@react-three/rapier";
import { useNavigate } from "react-router-dom";
import { useThree } from "react-three-fiber";

const Story = ({ isInHomepage }) => {
  const navigate = useNavigate();
  const { camera } = useThree();

  const handleStoryClick = () => {
    if (isInHomepage) {
      // Navigate to the Story page only if the cube is in the homepage
      navigate("/story");

      // Move the camera to a different position if needed
      camera.position.set(0, 0, 25);
    }
  };
  const gltf = useLoader(GLTFLoader, "/models/islands/story.gltf");

  return (
    <RigidBody
      type="fixed"
      position={[-40, 0.5, 80]}
      onClick={handleStoryClick}
      restitution={1}
    >
      <MeshCollider type="hull">
        <primitive object={gltf.scene} rotation-y={Math.PI / 2} scale={2} />
      </MeshCollider>
    </RigidBody>
  );
};

export default Story;
