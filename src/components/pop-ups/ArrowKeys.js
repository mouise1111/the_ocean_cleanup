// ArrowKeysPopup.js
import React, { useEffect, useState } from "react";

const ArrowKeysPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hidePopup = (event) => {
      if (isVisible && event.key.includes("Arrow") || ['A', 'S', 'W', 'D'].includes(event.key.toUpperCase())) {
        setIsVisible(false);
      }
    };

    document.addEventListener("keydown", hidePopup);

    return () => {
      document.removeEventListener("keydown", hidePopup);
    };
  }, [isVisible]);

  return isVisible ? (
    <div className="fixed z-50 p-4 transform -translate-x-1/2 bg-gray-300 bg-opacity-75 rounded top-4 left-1/2">
      <p className="font-light text-center text-black uppercase">
        Use arrow keys or WASD keys to move. Press any to start adventure.
      </p>
      <p className="font-light text-center text-black uppercase">
        Use the Shift key to move your boat faster.
      </p>
    </div>
  ) : null;
};

export default ArrowKeysPopup;
