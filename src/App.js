import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from './components/Loader';
import ArrowKeysPopup from './components/ArrowKeysPopup';

const App = () => {
  const [transitionTo3D, setTransitionTo3D] = useState(false);

  const handle2DLoaded = () => {
    // The buttonClick function sets the state to trigger the transition to the 3D website
  };

  const buttonClick = () => {
    // Set the state to trigger the transition to the 3D website
    setTransitionTo3D(true);
  };

  const handleClosePopup = () => {
    setTransitionTo3D(true);
  };

  return (
    <div>
      {transitionTo3D ? (
        // Render the 3D website here
        <Canvas>
          {/* Your 3D content goes here */}
        </Canvas>
      ) : (
        // Render the 2D loader screen
        <Loader onLoaded={handle2DLoaded} buttonClick={buttonClick} />
      )}
      {transitionTo3D && <ArrowKeysPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default App;
