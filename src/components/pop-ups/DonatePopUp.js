import React, { useEffect } from 'react';

export const DonatePopUp = ({ onBack }) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        onBack();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onBack]);

  return (
    <div className="fixed top-0 left-0 w-full p-6 ">
        <div className="w-full max-w-screen-md p-5 mx-auto bg-opacity-75 rounded bg-amber-100">
          <h1 className="mb-4 text-3xl font-bold">Donate</h1>
         <h3 className="w-1/2 pb-2 text-2xl font-medium uppercase border-b-2 border-amber-300">Join the cleanup</h3>
         <h3 className="pb-2 mt-4 text-3xl font-bold uppercase text-amber-800">You can help rid the oceans of plastic</h3>
        <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 mt-2 text-sm font-medium text-white transition-colors border border-transparent rounded-md bg-amber-500 group hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400"
            
              >
                   <a
                href="https://theoceancleanup.com/donate/"
              >Donate</a>
              </button>
        </div>
      </div>
  );
};
