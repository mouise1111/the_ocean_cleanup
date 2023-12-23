import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { RigidBody, MeshCollider } from "@react-three/rapier";

const Game = ({ sInHomepage }) => {
  const game = useLoader(GLTFLoader, "/models/islands/game.gltf");
  return (
    <RigidBody type="fixed">
      <MeshCollider type="trimesh">
        <primitive
          object={game.scene}
          scale={2}
          position={[150, 1, -90]}
          rotation-y={Math.PI}
        />
      </MeshCollider>
    </RigidBody>
  );
};

export default Game;
