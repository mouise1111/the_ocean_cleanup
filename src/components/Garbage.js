import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { Clone } from "@react-three/drei";
import { MeshCollider, RigidBody } from "@react-three/rapier";

const GarbageModel = ({ path, scale, position }) => {
	const { scene } = useLoader(GLTFLoader, path);
	return (
		<RigidBody type="fixed">
		  <MeshCollider type="trimesh">
		  <Clone object={scene} scale={scale} position={position} />
		  </MeshCollider>
		</RigidBody>
	  );
};  

export const Bag = ({ position }) => <GarbageModel path="/models/garbage/bag.gltf" scale={1} position={position} />;
export const Banana = ({ position }) => <GarbageModel path="/models/garbage/banana.gltf" scale={2} position={position} />;
export const Bottle = ({ position }) => <GarbageModel path="/models/garbage/bottle.gltf" scale={1} position={position} />;
export const Can = ({ position }) => <GarbageModel path="/models/garbage/can.gltf" scale={2} position={position} />;
export const Net = ({ position }) => <GarbageModel path="/models/garbage/net.gltf" scale={1} position={position} />;
export const Spray = ({ position }) => <GarbageModel path="/models/garbage/spray.gltf" scale={1.5} position={position} />;
export const Tube = ({ position }) => <GarbageModel path="/models/garbage/tube.gltf" scale={1} position={position} />;
export const Wine = ({ position }) => <GarbageModel path="/models/garbage/wine.gltf" scale={2} position={position} />;
export const Brush = ({ position }) => <GarbageModel path="/models/brush.gltf" scale={1} position={position} />;

const getRandomPosition = () => ({
	x: (Math.random() * 500) * (Math.random() < 0.5 ? -1 : 1),
	y: 0,
	z: (Math.random() * 500) * (Math.random() < 0.5 ? -1 : 1),
});

export const GenerateGarbage = () => {
	const numModels = 100;
	const models = [];
  
	for (let i = 0; i < numModels; i++) {
	  const randomPosition = getRandomPosition();
	  const randomCase = Math.floor(Math.random() * 9);
  
	  switch (randomCase) {
		case 0:
		  models.push(<Bag key={i} position={[randomPosition.x, randomPosition.y, randomPosition.z]} />);
		  break;
		case 1:
		  models.push(<Banana key={i} position={[randomPosition.x, randomPosition.y, randomPosition.z]} />);
		  break;
		case 2:
		  models.push(<Bottle key={i} position={[randomPosition.x, randomPosition.y, randomPosition.z]} />);
		  break;
		case 3:
		  models.push(<Can key={i} position={[randomPosition.x, randomPosition.y, randomPosition.z]} />);
		  break;
		case 4:
		  models.push(<Net key={i} position={[randomPosition.x, randomPosition.y, randomPosition.z]} />);
		  break;
		case 5:
		  models.push(<Spray key={i} position={[randomPosition.x, randomPosition.y, randomPosition.z]} />);
		  break;
		case 6:
		  models.push(<Tube key={i} position={[randomPosition.x, randomPosition.y, randomPosition.z]} />);
		  break;
		case 7:
		  models.push(<Wine key={i} position={[randomPosition.x, randomPosition.y, randomPosition.z]} />);
		  break;
		case 8:
		  models.push(<Brush key={i} position={[randomPosition.x, randomPosition.y, randomPosition.z]} />);
		  break;
		default:
		  models.push(<Bottle key={i} position={[randomPosition.x, randomPosition.y, randomPosition.z]} />);
		  break;
	  }
	}
  
	return <>{models}</>;
  };
  