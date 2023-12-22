import React, { useState } from "react";

export const AboutButton = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleOpenNotification = () => {
    setShowNotification(true);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div>
        <button className="absolute bottom-5 right-0 p-5 mt-2 transition-colors bg-amber-600 rounded-l-xl hover:bg-amber-500 text-white" onClick={handleOpenNotification}>
          About
        </button>
      </div>

      {showNotification && (
        <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-gray-800 bg-opacity-75">
          <div className="bg-gray-300 p-6 rounded-xl text-center">
            <p><strong>PROJECT: OCEAN 3D</strong></p>
            <br />
            <p>Commissioned by:</p>
            <img src="/pictures/erasmus_logo.jpg" width="50%" className="mx-auto rounded-xl" alt="Erasmus University Logo" />
            <br />
            <p>Contributors:</p>
            <p>Mouise Bashir</p>
            <p>Jimmy De Wit</p>
            <p>Rand Al Radi</p>
            <p>Furqan Chaud-Ry</p>
            <p>Jefta Alberts</p>
            <br />
            <p>&copy; {currentYear} All rights reserved.</p>
            <br />
            <button
              className="text-red-500 hover:underline"
              onClick={handleCloseNotification}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
