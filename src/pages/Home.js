// HomePage.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import ArrowKeysPopup from '../components/pop-ups/ArrowKeysPopup';

const HomePage = () => (
  <>
    <Canvas>
      {/* Your 3D scene components go here */}
    </Canvas>
    <ArrowKeysPopup />
  </>
);

export default HomePage;
