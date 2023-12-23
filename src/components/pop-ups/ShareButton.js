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
        <button
          className="absolute top-0 right-0 p-4 mt-2 text-right text-white transition-colors bg-amber-600 rounded-l-xl hover:bg-amber-500"
          onClick={handleShareClick}
        >
          Share Application
        </button>
      </div>
      {showNotification && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-gray-800 bg-opacity-75">
          <div className="p-6 text-center bg-gray-300 rounded-xl">
            <p>Link copied to clipboard!</p>
            <p>{linkToCopy}</p>
          </div>
        </div>
      )}
    </div>
  );
};
