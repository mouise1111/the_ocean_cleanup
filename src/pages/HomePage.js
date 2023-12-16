// Home.js
import React from 'react';
import { Canvas } from 'react-three-fiber';
import Ocean from "../components/Ocean";
import Cube from "../components/Cube";
import { OrbitControls } from '@react-three/drei';

const HomePage = () => (
  <Canvas>
    <Ocean />
    <Cube isInHomepage={true} />
    <OrbitControls />
  </Canvas>
);

export default HomePage;
