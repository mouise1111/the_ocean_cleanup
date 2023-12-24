import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useNavigate } from "react-router-dom";
import { useThree } from "react-three-fiber";
import React, { useEffect, useState, useRef } from "react";
import {
  CuboidCollider,
  BallCollider,
  MeshCollider,
} from "@react-three/rapier";
import { Clone } from "@react-three/drei";
import axios from "axios";
import {jwtDecode} from 'jwt-decode';

const token = localStorage.getItem('Token');
//#region import models
export const Bag = ({ position }) => (
  <GarbageModel
    name="bag"
    path="/models/garbage/bag.gltf"
    scale={1}
    position={position}
  />
);
export const Banana = ({ position }) => (
  <GarbageModel
    name="banana"
    path="/models/garbage/banana.gltf"
    scale={2}
    position={position}
  />
);
export const Bottle = ({ position }) => (
  <GarbageModel
    name="bottle"
    path="/models/garbage/bottle.gltf"
    scale={1}
    position={position}
  />
);
export const Can = ({ position }) => (
  <GarbageModel
    name="can"
    path="/models/garbage/can.gltf"
    scale={2}
    position={position}
  />
);
export const Net = ({ position }) => (
  <GarbageModel
    name="nets"
    path="/models/garbage/net.gltf"
    scale={1}
    position={position}
  />
);
export const Spray = ({ position }) => (
  <GarbageModel
    name="spray"
    path="/models/garbage/spray.gltf"
    scale={1.5}
    position={position}
  />
);
export const Tube = ({ position }) => (
  <GarbageModel
    name="tube"
    path="/models/garbage/tube.gltf"
    scale={1}
    position={position}
  />
);
export const Wine = ({ position }) => (
  <GarbageModel
    name="wine"
    path="/models/garbage/wine.gltf"
    scale={2}
    position={position}
  />
);
export const Brush = ({ position }) => (
  <GarbageModel
    name="brush"
    path="/models/brush.gltf"
    scale={1}
    position={position}
  />
);
//#endregion
let test = 0;
let FinalScore = 0;
let scorededPosted = 0; // Flag to track if the score has been posted
// collision + rendering handler
const GarbageModel = ({
  path,
  scale,
  position,
  instanceId,
  onIntersectionEnte,
}) => {
  const { scene } = useLoader(GLTFLoader, path);

  const [isVisible, setIsVisible] = useState(true); // New state for visibility
  const [isScoringAllowed, setIsScoringAllowed] = useState(true);
  const [countdown, setCountdown] = useState(20);
  const [scorePosted, setScorePosted] = useState(false); // Correctly defined state and setter

 
  const postScore = () => {
    if (!scorePosted && scorededPosted === 0) {
      const token = localStorage.getItem('Token');
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.user_id; // Extract user_id from token

          FinalScore = test * 100;
          console.log(`Final Score: ${FinalScore}`);

          axios.post('http://localhost:3030/submit-score', { 
            user_id: userId, // Send user_id along with the score
            score: FinalScore 
          })
          .then(response => {
            console.log('Score posted successfully:', response.data);
            setScorePosted(true); // Update the state to indicate score has been submitted
            scorededPosted = 1; // Update the flag
            console.log("how many posts you did: " + scorededPosted);
          })
          .catch(error => {
            console.error('Error posting score:', error);
          });
        } catch (error) {
          console.error('Error decoding token:', error);
        }
      }
    }
  };
  useEffect(() => {
    let timer;
    if (isScoringAllowed && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0 && isScoringAllowed) {
      postScore(); // Call the function to post the score
    }
    return () => clearTimeout(timer);
  }, [countdown, isScoringAllowed]);

  const handleCollision = (event) => {
    setIsVisible(false); // Set visibility to false on collision
    console.log("collision");
    if (isScoringAllowed) {
      test++;
      console.log(test);
    }
  };

  return isVisible ? ( // Render based on visibility
    <RigidBody
      type="fixed"
      colliders="ball"
      scale={scale * 2}
      position={position}
      sensor
      onIntersectionEnter={(event) => handleCollision(event)}
    >
      <Clone object={scene} />
    </RigidBody>
  ) : null;
};

const getRandomPosition = () => ({
  x: Math.random() * 500 * (Math.random() < 0.5 ? -1 : 1),
  y: 0,
  z: Math.random() * 500 * (Math.random() < 0.5 ? -1 : 1),
});
const GarbageLine = ({ isInHomepage }) => {
  const navigate = useNavigate();
  const { camera } = useThree();
  const [isAsleep, setIsAsleep] = useState(false);

  const numModels = 200;
  const models = [];

  for (let i = 0; i < numModels; i++) {
    const randomPosition = getRandomPosition();
    const randomCase = Math.floor(Math.random() * 9);

    switch (randomCase) {
      case 0:
        models.push(
          <Bag
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
      case 1:
        models.push(
          <Banana
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
      case 2:
        models.push(
          <Bottle
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
      case 3:
        models.push(
          <Can
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
      case 4:
        models.push(
          <Net
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
      case 5:
        models.push(
          <Spray
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
      case 6:
        models.push(
          <Tube
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
      case 7:
        models.push(
          <Wine
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
      case 8:
        models.push(
          <Brush
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
      default:
        models.push(
          <Bottle
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
    }
  }

  return <>{models}</>;
};
export default GarbageLine;
