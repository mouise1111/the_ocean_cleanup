import React, { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { MeshCollider, RigidBody } from "@react-three/rapier";
import { useAnimations } from "@react-three/drei";

export const Ocean = () => {
	const ocean = useLoader(GLTFLoader, "/models/ocean/ocean.gltf");
	const animations = useAnimations(ocean.animations, ocean.scene);

	useEffect(() => {
		const action = animations.actions.Wave;
		action.play();
	  }, [animations]);

	return (
	<RigidBody type="fixed">
		<MeshCollider type="trimesh">
		<primitive object={ocean.scene} position={ [0, 0, 0] } />
		</MeshCollider>
	</RigidBody>
	);
};
