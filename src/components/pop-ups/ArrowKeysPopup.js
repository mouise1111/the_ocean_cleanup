// ArrowKeysPopup.js
import React, { useEffect, useState } from 'react';

const ArrowKeysPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hidePopup = (event) => {
      if (isVisible && event.key.includes('Arrow')) {
        setIsVisible(false);
      }
    };

    document.addEventListener('keydown', hidePopup);

    return () => {
      document.removeEventListener('keydown', hidePopup);
    };
  }, [isVisible]);

  return isVisible ? (
    <div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-300 bg-opacity-75 p-4 rounded"
    >
      <p className="text-black text-center">
        Use your arrow keys to move. Press any arrow key to begin your adventure!
      </p>
    </div>
  ) : null;
};

export default ArrowKeysPopup;
