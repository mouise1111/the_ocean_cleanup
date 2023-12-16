// Cube.js
import React from 'react';
import { Box } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import { useThree } from 'react-three-fiber';

const Cube = ({ isInHomepage }) => {
  const navigate = useNavigate();
  const { camera } = useThree();

  const handleCubeClick = () => {
    if (isInHomepage) {
      // Navigate to the Story page only if the cube is in the homepage
      navigate('/story');

      // Move the camera to a different position if needed
      camera.position.set(0, 0, 0);
    }
  };

  return (
    <Box args={[1, 1, 1]} position={[0, 0, 0]} onClick={handleCubeClick} />
  );
};

export default Cube;
