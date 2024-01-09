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
    <>
      <div className="fixed top-0 left-0 w-full"> 
        <div className="bg-gray-800 bg-opacity-70 w-full max-w-screen-md mx-auto p-8 rounded-lg my-8 py-2">
          <div className="flex items-center">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2 text-white">Donate</h1>
              <h1 className="text-2xl font-bold mb-3 text-white">Support Clean Our Oceans</h1>
              <h3 className="text-xl font-bold text-white">Why Donate?</h3>
              <ul className="list-disc list-inside text-sm mb-1 text-white">
                <li>Proven technology for ocean cleanup (Oct 2021)</li>
                <li>14 river Interceptors deployed in 7 countries</li>
                <li>Over 50 peer-reviewed articles published</li>
                <li>Growth from volunteers to 130+ employees</li>
                <li>8 million kg (17.7 million lbs) of trash removed</li>
              </ul>
              <p className="text-l font-bold text-white">Help create a plastic-free future for our oceans by supporting our cleanup efforts!</p>
            </div>
            <div className="ml-8">
              <img src="/pictures/donating.jpg" style={{ width: '220px', height: '220px' }} />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-white transition-colors border border-transparent rounded-md bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 w-full mr-4 mt-4 mb-4"
              onClick={() => {
                window.location.href = 'https://theoceancleanup.com/donate/';
              }}
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
