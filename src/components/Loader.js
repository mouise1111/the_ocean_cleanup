import React, { useEffect, useState } from 'react';

const Loader = ({ onLoaded, buttonClick }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulating page loading
    setTimeout(() => {
      setLoaded(true);
      // Don't call onLoaded here
    }, 2000); // Change the time as needed
  }, []);

  console.log('Loader component is rendering.');

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-blue-400 bg-opacity-50 text-white">
      <div className="flex items-center">
        <div className="text-center p-8">
          <h2 className="text-4xl font-bold mb-6">
            Here we are going to take you on an adventure.
          </h2>
          <p className="text-lg mb-4">
            To discover who The Ocean Cleanup organization is and what they do,
            click on the button below to enter our world!
          </p>
          <button
            onClick={buttonClick}
            className={`bg-blue-400 text-white p-2 rounded-md ${
              loaded ? 'active' : ''
            }`}
          >
            {loaded ? 'Start the Adventure' : 'Loading...'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loader;
