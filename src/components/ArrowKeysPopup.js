// ArrowKeysPopup.js
import React, { useEffect, useState } from 'react';

const ArrowKeysPopup = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hidePopup = (event) => {
      if (isVisible && event.key.includes('Arrow')) {
        setIsVisible(false);
        onClose(); // This will trigger the 3D transition logic in App.js
      }
    };

    document.addEventListener('keydown', hidePopup);

    return () => {
      document.removeEventListener('keydown', hidePopup);
    };
  }, [isVisible, onClose]);

  return isVisible ? (
    <div style={{ 
      backgroundColor: 'rgba(128, 128, 128, 0.3)',
      padding: '10px',
      borderRadius: '5px',
      position: 'fixed',
      top: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: '999',
    }}>
      <p style={{ color: 'black', margin: '0' }}>Use your arrow keys to move. Press any arrow key to begin your adventure!</p>
    </div>
  ) : null;
};

export default ArrowKeysPopup;
