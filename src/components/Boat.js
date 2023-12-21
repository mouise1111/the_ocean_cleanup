import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "@react-three/fiber";
import { KeyboardControls, PerspectiveCamera } from "@react-three/drei";
import {
  Physics,
  CuboidCollider,
} from "@react-three/rapier";
import Ecctrl from "ecctrl";
import Enter from "../components/pop-ups/Enter";

const Boat = () => {
  const [showEnterPopup, setShowEnterPopup] = useState(false);
  const [enterKeyPressed, setEnterKeyPressed] = useState(false);
  const [isColliding, setIsColliding] = useState(false);
  const navigate = useNavigate();
  const gltf = useLoader(GLTFLoader, "/models/interceptor.gltf");

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && isColliding) {
      setEnterKeyPressed(true);
      // Navigate to the story page when 'Enter' is pressed and collision is true
      navigate("/story");
    }
  };
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
  
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isColliding, navigate]);

  useEffect(() => {
    if (isColliding && enterKeyPressed) {
      // Navigate to the story page when 'Enter' is pressed and collision is true
      navigate("/story");
    }

    return () => {
      // Cleanup event listeners
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isColliding, enterKeyPressed, navigate]);

  useFrame(() => {
    if (isColliding) {
      console.log("colliding");
      setShowEnterPopup(true);
      handleEnterIsland();
    } else {
      console.log("not colliding");
      setShowEnterPopup(false);
      handleExitIsland();
    }
  });

  const handleEnterIsland = () => {
    // Show the Enter pop-up
    setShowEnterPopup(true);
    
  };
  
  const handleExitIsland = () => {
    // Hide the Enter pop-up
    setShowEnterPopup(false);
  };

  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "run", keys: ["Shift"] },
  ];

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position-y={30}
        position-z={-45}
        rotation-x={0.6}
        rotation-y={Math.PI}
      />
      <Physics debug={true} timeStep="vary">
        <KeyboardControls map={keyboardMap}>
          <Ecctrl sprintMult={2} maxVelLimit={20} turnSpeed={10}>
            <primitive object={gltf.scene} position-y={2.5} scale={1.8} />
          </Ecctrl>
        </KeyboardControls>
        {/* ocean collider */}
        <CuboidCollider
          type="fixed"
          position={[0, -2.5, 0]}
          args={[750, 1, 750]}
        />
        {/* story island collider */}
        <CuboidCollider
          type="fixed"
          position={[-48, 0, 85]}
          args={[49, 2, 36]}
          onCollisionEnter={() => {
            setIsColliding(true);
          }}
          onCollisionExit={() => {
            setIsColliding(false);
          }}
        />
      </Physics>

      {showEnterPopup && <Enter position={[-30, 23.5, 40]} onKeyPress={handleKeyPress} />}
    </>
  );
};

export default Boat;
