// Story.js
import React, { useEffect } from 'react';

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
    <div className="fixed top-0 left-0 w-full p-6 ">
        <div className="bg-amber-100 bg-opacity-75 w-full max-w-screen-md mx-auto p-5 rounded">
          <h1 className="text-3xl font-bold mb-4 text-neutral-600">Our Story</h1>
          <p className="text-neutral-600">
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
      </div>
  );
};

export default Story;