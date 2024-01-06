// Story.js
import React, { useEffect } from 'react';

export const StoryPopUp = ({ onBack }) => {
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
<div className="fixed top-0 left-0 w-full "> 
  <div className="bg-gray-800 bg-opacity-95 w-full max-w-screen-md mx-auto p-8 rounded-lg my-8 py-2 flex items-center">
    <div className="flex-1">
      <h1 className="font-inter text-[50px] text-base font-bold mb-4 text-white text-left py-4">Our Story</h1>
      <p className="font-inter font-light text-[15px] text-white my-4">
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
    <div className="ml-8">
      <img src="/pictures/Story_image.png" style={{ width: '220px', height: '220px' }} />
    </div>
  </div>
</div>

  );
};
