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
        <div className="bg-amber-100 bg-opacity-75 w-full p-5 rounded">
          <h1 className="text-3xl font-bold mb-2 text-amber-600">Support Clean Our Oceans</h1>

          <p className="text-sm mb-2 text-neutral-800">
            Monthly contributions make a significant impact on our mission to eliminate plastic pollution in rivers and oceans.
          </p>

          <h3 className="text-xl font-bold text-neutral-600">Why Donate?</h3>
          <p className="text-sm mb-2 text-neutral-800">
            Help create a plastic-free future for our oceans by supporting our cleanup efforts.
          </p>

          <h3 className="text-xl font-bold text-neutral-600">Impact of Your Donations</h3>
          <ul className="list-disc list-inside text-sm mb-2 text-neutral-800">
            <li>Proven technology for ocean cleanup (Oct 2021)</li>
            <li>14 river Interceptors deployed in 7 countries</li>
            <li>Over 50 peer-reviewed articles published</li>
            <li>Growth from volunteers to 130+ employees</li>
            <li>8 million kg (17.7 million lbs) of trash removed</li>
          </ul>

          <h3 className="text-xl font-bold text-neutral-600">Donate Today</h3>
          <p className="text-sm mb-1 text-neutral-800">
            Your support, subject to terms and conditions, aids Stichting The Ocean Cleanup, a registered Dutch non-profit foundation.
          </p>

          <button
            className="bg-amber-600 text-white font-semibold py-1 px-2 rounded"
            onClick={() => window.location.href = 'https://theoceancleanup.com/donate/'}
          >
            DONATE NOW
          </button>
        </div>
      </div>
  );
};
