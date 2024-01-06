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
    <div className="fixed top-0 left-0 w-full p-3 ">
        <div className="bg-amber-100 bg-opacity-75 w-full p-5 rounded">
          <h1 className="text-3xl font-bold mb-2 text-amber-600">Our Story</h1>

          <p className="text-sm mb-2 text-neutral-800">
            In 2013, The Ocean Cleanup, comprising 120 dedicated eco-champions, launched a mission in Rotterdam to combat the pervasive issue of plastic pollution in the oceans.
          </p>

          <h3 className="text-xl font-bold text-neutral-600">The Problem:</h3>
          <p className="text-sm mb-2 text-neutral-800">
            The challenge is immense – 14 million tons of plastic infiltrate the oceans annually, equivalent to a garbage truck's load every minute. This environmental menace adversely affects 700 marine species and incurs economic costs in the billions. The Ocean Cleanup addresses this crisis from its headquarters powered by global generosity.
          </p>

          <h3 className="text-xl font-bold text-neutral-600">The Solution:</h3>
          <p className="text-sm mb-2 text-neutral-800">
            Armed with the Ocean Solution and River Solution, The Ocean Cleanup employs advanced technologies. Envision a sophisticated 3D model where interceptors and floating barriers work seamlessly, intercepting plastic and ensuring the safety of our seas.
          </p>

          <h3 className="text-xl font-bold text-neutral-600">The Impact:</h3>
          <p className="text-sm mb-1 text-neutral-800">
            Over the last 30 days, The Ocean Cleanup has successfully captured 73,449 kg of plastic, contributing to a total removal of 7,465,125 kg. Imagine a transformative 3D model where 90% of ocean trash vanishes through your donation – a powerful testament to the impact of collective action. Join The Ocean Cleanup in their relentless pursuit to save our oceans, where every contribution becomes a crucial part of this ongoing narrative. Will you be a hero too? The adventure beckons!
          </p>
        </div>
      </div>
  );
};
