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
    <div className="fixed top-0 left-0 w-full p-4 ">
        <div className="bg-amber-100 bg-opacity-75 w-full p-3 rounded">
          <h1 className="text-3xl font-bold mb-3 text-amber-600">Support Clean Our Oceans</h1>

          <h3 className="text-xl font-bold text-neutral-600">Why Donate?</h3>

          <ul className="list-disc list-inside text-sm mb-1 text-neutral-800">
            <li>Proven technology for ocean cleanup (Oct 2021)</li>
            <li>14 river Interceptors deployed in 7 countries</li>
            <li>Over 50 peer-reviewed articles published</li>
            <li>Growth from volunteers to 130+ employees</li>
            <li>8 million kg (17.7 million lbs) of trash removed</li>
          </ul>

          <p className="text-l font-bold text-neutral-600">Help create a plastic-free future for our oceans by supporting our cleanup efforts!</p>

          <button
            type="button"
            className="relative flex justify-center w-full px-4 py-2 mt-2 text-sm font-medium text-white transition-colors border border-transparent rounded-md bg-amber-500 group hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400"
            onClick={() => {
              window.location.href = 'https://theoceancleanup.com/donate/';
            }}
          >
            Donate
          </button>
      </div>
    </div>
  );
};
