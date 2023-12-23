import React, { useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { RigidBody, MeshCollider } from "@react-three/rapier";
import Popup from "../pop-ups/Islands/Story.js";

const Story = ({ isInHomepage, scaleMultiplier = 1 }) => {
  const gltf = useLoader(GLTFLoader, "/models/islands/story.gltf");
  const [showPopup, setshowPopup] = useState(false);

  return (
    <>
      <RigidBody
        type="fixed"
        position={[-40, 2, 80]}
        onCollisionEnter={() => {
          setshowPopup(true);
        }}
        onCollisionExit={() => {
          setshowPopup(false);
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
      {showPopup ? <Popup position={[-120, -50, 120]} /> : null}
    </>
  );
};

export default Story;
