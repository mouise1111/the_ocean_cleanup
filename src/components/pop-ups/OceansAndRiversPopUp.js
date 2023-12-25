import React, { useEffect } from 'react';

export const OceansAndRiversPopUp = ({ onBack }) => {
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
          <h1 className="text-3xl font-bold mb-4 text-neutral-600">Oceans & Rivers</h1>
          <p className="text-neutral-600">
            Text.</p>
        </div>
      </div>
  );
};
