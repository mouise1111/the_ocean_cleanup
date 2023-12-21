// Story.js
import React from 'react';

const Story = () => {

  return (
    <div className="fixed top-0 left-0 w-full p-6 ">
        <div className="bg-amber-100 bg-opacity-75 w-full max-w-screen-md mx-auto p-5 rounded">
          <h1 className="text-xl font-bold mb-4 text-neutral-800">Our Story</h1>
          <p className="text-xs text-neutral-800">
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