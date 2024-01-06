import React, { useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "@react-three/fiber";
import { RigidBody, MeshCollider } from "@react-three/rapier";
import { useNavigate } from "react-router-dom";
import { useThree } from "react-three-fiber";
import { folder, useControls } from "leva";
import Enter from "../pop-ups/Enter";

const Donate = ({ isInHomepage, scaleMultiplier = 1 }) => {
  const navigate = useNavigate();
  const gltf = useLoader(GLTFLoader, "/models/islands/donate.gltf");
  const { camera } = useThree();
  const [showEnterPopup, setShowEnterPopup] = useState(false);
  const [enterKeyPressed, setEnterKeyPressed] = useState(false);
  const [isColliding, setIsColliding] = useState(false);

  const handleStoryClick = () => {
    if (isInHomepage) {
      // Navigate to the donate page only if the cube is in the homepage
      navigate("/donate");

      // Move the camera to a different position if needed
      camera.position.set(0, 0, 25);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && isColliding) {
      setEnterKeyPressed(true);
      // Navigate to the projects page when 'Enter' is pressed and collision is true
      navigate("/donate");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isColliding, navigate]);

  useEffect(() => {
    if (isColliding && enterKeyPressed) {
      // Navigate to the story page when 'Enter' is pressed and collision is true
      navigate("/donate");
    }

    return () => {
      // Cleanup event listeners
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isColliding, enterKeyPressed, navigate]);

  useFrame(() => {
    if (isColliding) {
      setShowEnterPopup(true);
      handleEnterIsland();
    } else {
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

  return (
    <>
      <RigidBody
        type="fixed"
        position={[-250, 5.1, 300]}
        rotation-y={0}
        onClick={handleStoryClick}
        onCollisionEnter={() => {
          setIsColliding(true);
        }}
        onCollisionExit={() => {
          setIsColliding(false);
        }}
      >
        <MeshCollider>
          <primitive
            object={gltf.scene}
            rotation-y={Math.PI / 2}
            scale={2 * scaleMultiplier}
          />
        </MeshCollider>
      </RigidBody>
      {showEnterPopup && (
        <Enter position={[-240, 40, 320]} onKeyPress={handleKeyPress} />
      )}
    </>
  );
};

export default Donate;
