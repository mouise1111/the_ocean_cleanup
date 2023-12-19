import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

export const Whale = () => {
	const whale = useLoader(GLTFLoader, "/models/Whale/whale.gltf");

	return <primitive
		object={whale.scene}
		scale={1.2}
		/>;
};