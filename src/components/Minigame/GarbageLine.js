import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useNavigate } from "react-router-dom";
import { useThree } from "react-three-fiber";
import React, { useEffect, useState, Suspense } from "react";
import { Clone, Text } from "@react-three/drei";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useGlobalState, setGlobalState } from "../Minigame/globalstate";

const token = localStorage.getItem("Token");
//#region import models
export const Bag = ({ position }) => (
  <GarbageModel
    name="bag"
    path="/models/garbage/bag.gltf"
    scale={1}
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
    scale={2.5}
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

// collision + rendering handler
const GarbageModel = ({
  path,
  scale,
  position,
  instanceId,
  onIntersectionEnte,
}) => {
  const { scene } = useLoader(GLTFLoader, path);
  const [intersecting, setIntersection] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // New state for visibility
  const [isScoringAllowed, setIsScoringAllowed] = useState(true);
  const [scorePosted, setScorePosted] = useState(false); // Correctly defined state and setter

  const [gameStarted] = useGlobalState("Gamestarted"); // Access the global state

  const [endScore] = useGlobalState("EndScore"); // Access EndScore from global state

  const [scorededPosted, setScorededPosted] = useState(0);

  const [timer, setTimer] = useGlobalState("Timer"); // Use global timer state

  useEffect(() => {
    if (gameStarted) {
      setScorededPosted(0);
      // Reset other relevant states if necessary
    }
  }, [gameStarted]);

  useEffect(() => {
    let timerInterval;
    if (gameStarted && timer > 0) {
      timerInterval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (timer === 0 && gameStarted) {
      setGlobalState("Gamestarted", false); // Stop the game when the timer reaches 0
      if (scorePosted === false) {
        postScore();
      }
    }
    return () => clearInterval(timerInterval);
  }, [gameStarted, timer, setTimer]);

  const postScore = () => {
    if (!scorePosted && scorededPosted === 0) {
      const token = localStorage.getItem("Token");
      if (token && scorePosted == false) {
        try {
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.user_id; // Extract user_id from token

          FinalScore = test * 100;
          setGlobalState("EndScore", FinalScore);

          console.log(`Final Score: ${FinalScore}`);

          axios
            .post("http://localhost:3030/submit-score", {
              user_id: userId, // Send user_id along with the score
              score: FinalScore,
            })
            .then((response) => {
              console.log("Score posted successfully:", response.data);
              console.log("how many posts you did: " + scorededPosted);
            })
            .catch((error) => {
              console.error("Error posting score:", error);
            });
        } catch (error) {
          console.error("Error decoding token:", error);
        }
      }
    }
  };

  const handleCollision = (event) => {
    setIsVisible(false); // Set visibility to false on collision
    if (gameStarted) {
      test++;
      console.log("collision -> " + test);
      setGlobalState("CurrentScore", test * 100); // Update CurrentScore in the global state
    }
  };

  useEffect(() => {
    if (timer === 0) {
      console.log(`Final End Score: ${endScore}`); // Log the final End Score
    }
  }, [timer, endScore]);

  return (
    <>
      {isVisible && (
        <RigidBody
          type="fixed"
          colliders="ball"
          scale={scale * 2}
          position={position}
          sensor
          onIntersectionEnter={(event) => {
            handleCollision(event);
            setIntersection(true);
            setTimeout(() => {
              setIntersection(false);
            }, 500); // Set intersection to false after 2 seconds
          }}
          onIntersectionExit={() => setIntersection(false)}
        >
          <Clone object={scene} />
        </RigidBody>
      )}
      <Suspense fallback={null}>
        {intersecting && (
          <Text
            color="orange"
            position={position}
            position-y={position[1] + 12}
            fontSize={9}
            rotation-y={Math.PI} // Rotate 180 degrees around the y-axis
          >
            +100
          </Text>
        )}
      </Suspense>
    </>
  );
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

  const numModels = 100;
  const models = [];

  const [gameStarted] = useGlobalState("Gamestarted"); // Access the global state

  if (!gameStarted) {
    test = 0;
    return null; // Or return some JSX to indicate the game hasn't started
  }

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
          <Bottle
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
      case 2:
        models.push(
          <Can
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
      case 3:
        models.push(
          <Net
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
      case 4:
        models.push(
          <Spray
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
      case 5:
        models.push(
          <Tube
            key={i}
            position={[randomPosition.x, randomPosition.y, randomPosition.z]}
          />
        );
        break;
      case 6:
        models.push(
          <Wine
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
