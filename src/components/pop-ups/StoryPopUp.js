// Story.js
import React, { useEffect } from 'react';
import { Html } from '@react-three/drei';

const Story = ({ onBack }) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        onBack();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onBack]);

  return (
    <Html center>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-75 p-8 w-screen h-screen flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-white">Our Story</h1>
        <p className="text-white">
          FOUNDED 2013
          <br />
          NON-PROFIT FOUNDATION
          <br />
          HQ ROTTERDAM
          <br />
          We are fully reliant on donations from individuals, corporations, governments, and institutions.
          <br />
          The Ocean Cleanup's team consists of 120 engineers, researchers, scientists, computational modelers, and supporting roles, working daily to rid the world's oceans of plastic.
        </p>
      </div>
    </Html>
  );
};

export default Story;