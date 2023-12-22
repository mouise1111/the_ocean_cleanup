import React, { useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "@react-three/fiber";
import { RigidBody, MeshCollider } from "@react-three/rapier";
import { useNavigate } from "react-router-dom";
import { useThree } from "react-three-fiber";
import { folder, useControls } from 'leva'
import Enter from "../pop-ups/Enter";


const Game = ({sInHomepage}) => {
    const game = useLoader(GLTFLoader, "/models/islands/game.gltf")
    return (
        <primitive
          object={game.scene}
          scale={1.3}
          position={[120, 1, 30]}
          rotation={[0, 15, 0]}
          
        />
      );
};

export default Game;