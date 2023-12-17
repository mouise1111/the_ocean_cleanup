import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { useNavigate } from 'react-router-dom';
import { useThree } from 'react-three-fiber';

const Story = ({ isInHomepage }) => {
  const navigate = useNavigate();
  const { camera } = useThree();

  const handleStoryClick = () => {
    if (isInHomepage) {
      // Navigate to the Story page only if the cube is in the homepage
      navigate('/story');

      // Move the camera to a different position if needed
      camera.position.set(0, 0, 25);
    }
  };
  const gltf = useLoader(GLTFLoader, "/models/islands/story.gltf");

  return (
    <Physics debug>
      <RigidBody
        type="fixed"
        position={[0, 0, 25]}
        colliders={"trimesh"}
        onClick={handleStoryClick}
        // restitution={2}
        // friction={1}
      >
        <primitive object={gltf.scene} rotation-y={Math.PI / 2} />
      </RigidBody>
    </Physics>
  );
};

export default Story;
