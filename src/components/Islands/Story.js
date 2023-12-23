import React, { useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "@react-three/fiber";
import { RigidBody, MeshCollider } from "@react-three/rapier";
import { useNavigate } from "react-router-dom";
import Enter from "../pop-ups/Enter";

const Story = ({ isInHomepage, scaleMultiplier = 1 }) => {
  const navigate = useNavigate();
  const gltf = useLoader(GLTFLoader, "/models/islands/story.gltf");
  const [showEnterPopup, setShowEnterPopup] = useState(false);
  const [enterKeyPressed, setEnterKeyPressed] = useState(false);
  const [isColliding, setIsColliding] = useState(false);

  const handleIslandClick = () => {
    if (isInHomepage) {
      // Navigate to the Story page only if the cube is in the homepage
      navigate("/story");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && isColliding) {
      setEnterKeyPressed(true);
      // Navigate to the story page when 'Enter' is pressed and collision is true
      navigate("/story");
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
      navigate("/story");
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
        position={[-40, 2, 80]}
        onClick={handleIslandClick}
        onCollisionEnter={() => {
          setIsColliding(true);
        }}
        onCollisionExit={() => {
          setIsColliding(false);
        }}
      >
        <MeshCollider type="hull">
          <primitive
            object={gltf.scene}
            rotation-y={Math.PI / 2}
            scale={2 * scaleMultiplier}
          />
        </MeshCollider>
      </RigidBody>
      {showEnterPopup && (
        <Enter position={[-30, 24, 90]} onKeyPress={handleKeyPress} />
      )}
    </>
  );
};

export default Story;
