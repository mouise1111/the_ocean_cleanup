import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulating loading progress
      setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 1 : 100));
    }, 20); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  const buttonClick = () => {
    // Navigate to the home page when the progress is complete
  if (progress >= 100) {
    setLoaded(true);
    navigate('/home');
  }
  };
  

  console.log(`Loading progress: ${progress}%`);

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-blue-400 bg-opacity-50 text-white">
      <div className="flex items-center">
        <div className="text-center p-8">
          <h2 className="text-6xl font-bold mb-12">Are you ready to start the discovery of the Ocean3D world?</h2>
          <button
            onClick={buttonClick}
            className={`bg-blue-400 text-white p-4 rounded-md ${loaded ? 'active' : ''}`}
            disabled={progress < 100}
          >
            {progress >= 100 ? 'Start the Adventure' : `Loading ${progress}%`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loader;
