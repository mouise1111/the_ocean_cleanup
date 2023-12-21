import React, { useEffect, useState } from 'react';
import { Html } from '@react-three/drei';

const Enter = ({ handleKeyPress, position }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [popUpPosition, setPopUpPosition] = useState([-50, 10, 90]);

  useEffect(() => {
    const handleEnterKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleKeyPress && handleKeyPress(event);
        setIsVisible(false);
      }
    };

    document.addEventListener('keydown', handleEnterKeyPress);

    return () => {
      document.removeEventListener('keydown', handleEnterKeyPress);
    };
  }, [handleKeyPress]);

  

  return isVisible ? (
    <Html position={position}>
      <div className="fixed z-50 bg-gray-300 bg-opacity-75 w-44 p-2 rounded">
        <p className="text-black text-center">Press 'Enter' to enter this island!</p>
      </div>
    </Html>
  ) : null;
};

export default Enter;
