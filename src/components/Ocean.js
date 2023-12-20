import React, { useEffect } from "react";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { useLoader } from "@react-three/fiber";
import { MeshCollider, RigidBody } from "@react-three/rapier";
// import { useAnimations } from "@react-three/drei";

export const Ocean = () => {
	// const ocean = useLoader(GLTFLoader, "/models/ocean/ocean.gltf");
	// const animations = useAnimations(ocean.animations, ocean.scene);

	// useEffect(() => {
	// 	const action = animations.actions.Wave;
	// 	action.play();
	//   }, [animations]);

	return (
	<>
	<RigidBody type="fixed">
		<MeshCollider type="trimesh">
		<mesh position-y={0}>
			<boxGeometry args={[1000, 1, 1000]} />
			{/* <meshBasicMaterial transparent="true" opacity={0.0} flatShading={true} wireframe={false} /> */}
			<meshBasicMaterial color={0x0A5065} flatShading={true} wireframe={false} />
		</mesh>
		</MeshCollider>
	</RigidBody>
	{/* <primitive object={ocean.scene} position={ [0, 0, 0] } /> */}
	</>
	);
};
