import React, { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { useAnimations } from "@react-three/drei";

export const Whale = () => {
	const whale = useLoader(GLTFLoader, "/models/Whale/whale.gltf");
	const animations = useAnimations(whale.animations, whale.scene)

	useEffect(() => {
		const action = animations.actions.Swim
		action.play()
	}, [])

	return <primitive
		object={whale.scene}
		scale={1.3}
		position={ [30, 0, 30] }
		rotation={ [-0.05, 0, 0] }
		/>;
};