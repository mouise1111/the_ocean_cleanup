import React, { useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { RigidBody, MeshCollider } from "@react-three/rapier";
import Popup from "../pop-ups/Islands/Donate.js";

const Projects = ({ isInHomepage, scaleMultiplier = 1 }) => {
  const gltf = useLoader(GLTFLoader, "/models/islands/donate.gltf");
  const [showPopup, setshowPopup] = useState(false);

  return (
    <>
      <RigidBody
        type="fixed"
        position={[-120, 5.1, 300]}
        onCollisionEnter={() => {
          setshowPopup(true);
          console.log("enter");
        }}
        onCollisionExit={() => {
          setshowPopup(false);
          console.log("exit");
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
      {showPopup ? <Popup position={[-120, 1, 300]} /> : null}
    </>
  );
};

export default Projects;
