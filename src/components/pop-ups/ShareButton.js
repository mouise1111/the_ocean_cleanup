import React, { useState } from "react";

export const ShareButton = () => {
  const [showNotification, setShowNotification] = useState(false);
  const linkToCopy = "https://the-ocean-cleanup-ashy.vercel.app/";

  const handleShareClick = async () => {
    try {
      await navigator.clipboard.writeText(linkToCopy);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } catch (err) {
      console.error("Unable to copy to clipboard:", err);
    }
  };

  return (
    <div>
      <div>
        <button className="absolute top-0 right-0 p-5 mt-2 transition-colors bg-amber-600 rounded-l-xl hover:bg-amber-500 text-white" onClick={handleShareClick}>
          Share Application
        </button>
      </div>
      {showNotification && (
        <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-gray-800 bg-opacity-75">
          <div className="bg-gray-300 p-6 rounded-xl text-center">
            <p>Link copied to clipboard!</p>
            <p>{linkToCopy}</p>
          </div>
        </div>
      )}
    </div>
  );
};
