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
    <div className="fixed top-0 left-0 w-full "> 
    <div className="bg-gray-800 bg-opacity-95 w-full max-w-screen-md mx-auto p-8 rounded-lg my-8 py-2 flex items-center">
      <div className="flex-1">
      <h1 className="font-inter text-[50px] text-base font-bold mb-4 text-white text-left py-4">Donate</h1>
        <p className="font-inter font-light text-[15px] text-white my-4">
          FOUNDED 2013
          <br />
          NON-PROFIT FOUNDATION
          <br />
          HQ ROTTERDAM
          <br />
          We are fully reliant on donations from individuals, corporations, governments, and institutions.
          <br />
          The Ocean Cleanup's team consists of 120 engineers, researchers, scientists, computational modelers, and supporting roles, working daily to rid the world's oceans of plastic.
        </p>
      </div>
      <div className="ml-8">
        <img src="/pictures/donating.jpg" style={{ width: '220px', height: '220px' }} />
      </div>
    </div>
  </div>

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
    </>
  );

};
