import React, { useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { RigidBody, MeshCollider } from "@react-three/rapier";
import Popup from "../pop-ups/Islands/Projects.js";

const Projects = ({ isInHomepage, scaleMultiplier = 1 }) => {
  const gltf = useLoader(GLTFLoader, "/models/islands/projects.gltf");
  const [showPopup, setshowPopup] = useState(false);

  return (
    <>
      <RigidBody
        type="fixed"
        position={[120, 0, 300]}
        onCollisionEnter={() => {
          setshowPopup(true);
        }}
        onCollisionExit={() => {
          setshowPopup(false);
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
      {showPopup ? <Popup position={[60, 0, 280]} /> : null}
    </>
  );
};

export default Projects;
