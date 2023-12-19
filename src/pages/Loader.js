import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulating loading progress
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 1 : 100
      );
    }, 20); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  const buttonClick = () => {
    // Navigate to the home page when the progress is complete
    if (progress >= 100) {
      setLoaded(true);
      navigate("/home");
    }
  };

  console.log(`Loading progress: ${progress}%`);

  return (
    <div className="flex items-center justify-center h-screen text-white bg-opacity-50 bg-cover bg-sky-400">
      <div className="flex items-center">
        <div className="p-8 text-center">
          <h2 className="mb-12 text-6xl font-bold text-black joti-one">
            Are you ready to start the discovery of the Ocean3D world?
          </h2>
          <button
            onClick={buttonClick}
            className={`bg-sky-500 text-white p-4 rounded-md uppercase transition-all hover:scale-105 hover:bg-sky-400 ${
              loaded ? "active" : ""
            }`}
            disabled={progress < 100}
          >
            {progress >= 100 ? "Start the Adventure" : `Loading ${progress}%`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loader;
