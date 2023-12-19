import React, { useRef, useEffect } from "react";
import { Bag, Banana, Bottle, Can, Net, Spray, Tube, Wine, Brush } from "../components/Garbage.js";

let numModels = 9;

let directionMultipliersX = new Array(numModels).fill(1);
let directionMultipliersZ = new Array(numModels).fill(1);
let spinSpeedMultipliers = new Array(numModels).fill(1);

const getRandomPosition = () => ({
	x: (Math.random() * 100) * (Math.random() < 0.5 ? -1 : 1),
	y: 0,
	z: (Math.random() * 100) * (Math.random() < 0.5 ? -1 : 1),
});

const getRandomSpinSpeed = (index, boolean) => {
	if (boolean) {
		spinSpeedMultipliers[index] = -1;
	}

	return {
		spinSpeed: (Math.random() / 100) * spinSpeedMultipliers[index],
	};
};

const getRandomMovement = (index) => {
	if (Math.random() < 0.0002) {
		directionMultipliersX[index] = Math.random() < 0.5 ? 1 : -1;
		directionMultipliersZ[index] = Math.random() < 0.5 ? 1 : -1;
	}

	return {
		x: 0.008 * directionMultipliersX[index],
		z: 0.008 * directionMultipliersZ[index],
	};
	};

export const FloatingGarbage = () => {
	const bag = useLoader(GLTFLoader, "/models/bag.gltf");
	const groupRef = useRef();

	let spinCounters = new Array(numModels).fill(0);
	let spinThresholds = new Array(numModels).fill(2000);
	let booleans = new Array(numModels).fill(false);

	const tick = () => {
		if (groupRef.current) {
		groupRef.current.children.forEach((modelRef, index) => {
			if (modelRef.isObject3D) {
			const randomMovement = getRandomMovement(index);
			modelRef.position.x += randomMovement.x;
			modelRef.position.z += randomMovement.z;
			const randomSpinspeed = getRandomSpinSpeed(index, booleans[index]);
			modelRef.rotation.y += randomSpinspeed.spinSpeed;
			spinCounters[index]++;
			if (booleans[index]) {
				booleans[index] = false;
			}
			if (spinCounters[index] >= spinThresholds[index]) {
				spinCounters[index] = 0;
				booleans[index] = true;
				spinThresholds[index] = Math.random() * 100 + 2000;
			}
			}
		});
		}

		const animationId = window.requestAnimationFrame(tick);

		return () => {
		window.cancelAnimationFrame(animationId);
		};
	};

	tick();

	useEffect(() => {
		if (groupRef.current) {
		groupRef.current.children.forEach((modelRef, index) => {
			if (modelRef.isObject3D) {
			const randomPosition = getRandomPosition();
			modelRef.position.set(randomPosition.x, randomPosition.y, randomPosition.z);
			}
		});
		}

		return () => {};
	}, []);

	return (
		<group ref={groupRef}>
		{models.map((Model, index) => (
			<Model key={index} name={`model_${index}`} />
		))}
		</group>
	);
};
