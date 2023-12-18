import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { useNavigate } from "react-router-dom";
import { useThree } from "react-three-fiber";

const GarbageLine = ({ isInHomepage }) => {
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
  const Bananagltf = useLoader(GLTFLoader, "/models/banana.gltf");
  const baggltf = useLoader(GLTFLoader, "/models/bag.gltf");
  const bottlegltf = useLoader(GLTFLoader, "/models/bottle.gltf");
  const cangltf = useLoader(GLTFLoader, "/models/can.gltf");
  const netgltf = useLoader(GLTFLoader, "/models/net.gltf");
  const spraygltf = useLoader(GLTFLoader, "/models/spray.gltf");
  const tubegltf = useLoader(GLTFLoader, "/models/tube.gltf");
  const winegltf = useLoader(GLTFLoader, "/models/wine.gltf");



  return (
    <Physics debug={false}>
      <RigidBody
        type="fixed"
        position={[-80, 0, 150]}
        colliders={"trimesh"}
        onClick={handleStoryClick}
        // restitution={2}
        // friction={1}
      >
        <primitive object={Bananagltf.scene} rotation-y={Math.PI / 2} scale={2} />
      </RigidBody>


      <RigidBody
        type="fixed"
        position={[-60, 0, 250]}
        colliders={"trimesh"}
        onClick={handleStoryClick}
        // restitution={2}
        // friction={1}
      >
        <primitive object={baggltf.scene} rotation-y={Math.PI / 2} scale={2} />
      </RigidBody>


      <RigidBody
        type="fixed"
        position={[-70, 0, 200]}
        colliders={"trimesh"}
        onClick={handleStoryClick}
        // restitution={2}
        // friction={1}
      >
        <primitive object={bottlegltf.scene} rotation-y={Math.PI / 2} scale={2} />
      </RigidBody>

      <RigidBody
        type="fixed"
        position={[-50, 0, 300]}
        colliders={"trimesh"}
        onClick={handleStoryClick}
        // restitution={2}
        // friction={1}
      >
        <primitive object={cangltf.scene} rotation-y={Math.PI / 2} scale={2} />
      </RigidBody>

      <RigidBody
        type="fixed"
        position={[-20, 0, 350]}
        colliders={"trimesh"}
        onClick={handleStoryClick}
        // restitution={2}
        // friction={1}
      >
        <primitive object={netgltf.scene} rotation-y={Math.PI / 2} scale={2} />
      </RigidBody>

      <RigidBody
        type="fixed"
        position={[-10, 0, 390]}
        colliders={"trimesh"}
        onClick={handleStoryClick}
        // restitution={2}
        // friction={1}
      >
        <primitive object={spraygltf.scene} rotation-y={Math.PI / 2} scale={2} />
      </RigidBody>


    </Physics>
  );
};

export default GarbageLine;
