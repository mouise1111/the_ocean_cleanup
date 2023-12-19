import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { RigidBody, MeshCollider } from "@react-three/rapier";
import { useNavigate } from "react-router-dom";
import { useThree } from "react-three-fiber";
import { folder, useControls } from 'leva'

const Donate = ({ isInHomepage }) => {
    const navigate = useNavigate();
    const { camera } = useThree();
    
      const { debug, Yposition } = useControls("donate", {
        donateIsland: folder({
            Yposition: {
                value: 5,
                min: 0,
                max: 10,
                step: 1,
            }
        })
      });

  const handleStoryClick = () => {
    if (isInHomepage) {
      // Navigate to the Story page only if the cube is in the homepage
      navigate("/donate");

      // Move the camera to a different position if needed
      camera.position.set(0, 0, 25);
    }
  };
  const gltf = useLoader(GLTFLoader, "/models/islands/donate.gltf");

  return (
    <RigidBody type="fixed" position={[-120, Yposition, 300]} onClick={handleStoryClick}>
      <MeshCollider type="hull">
        <primitive object={gltf.scene} rotation-y={Math.PI / 2} scale={2} />
      </MeshCollider>
    </RigidBody>
  );
};

export default Donate;
