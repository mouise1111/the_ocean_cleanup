import React, { useEffect } from 'react';

export const OceansAndRiversPopUp = ({ onBack }) => {
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
      <div className="bg-amber-100 bg-opacity-75 w-full p-2 rounded mb-4">
        <h1 className="text-3xl font-bold mb-2 text-amber-600">Tackling Plastic Pollution</h1>

        <p className="text-sm mb-2 text-neutral-800">
          Plastic pollution poses a global threat, with over 400 million metric tons produced annually. Less than 0.5% ends up in the ocean, but even this small percentage amounts to over 1 million metric tons.
        </p>

        <h3 className="text-xl font-bold text-neutral-600">How Plastic Enters the Ocean</h3>
        <p className="text-sm mb-2 text-neutral-800">
          Varied plastic usage and waste management globally lead to 9% recycling and 22% mismanagement. 1000 rivers, mainly in middle-income countries, contribute to 80% of ocean plastic emissions.
        </p>

        <h3 className="text-xl font-bold text-neutral-600">The Impact on Wildlife and Ecosystems</h3>
        <p className="text-sm mb-2 text-neutral-800">
          Marine life suffers from entanglement and ingestion, impacting over 900 species. Plastic disrupts ecosystems, spreads harmful additives, and poses risks to oxygen production, carbon cycling, and human health.
        </p>

        <h3 className="text-xl font-bold text-neutral-600">What We Do</h3>
        <p className="text-sm mb-1 text-neutral-800">
          The Ocean Cleanup is on a mission to stop new plastic inflow and clean up existing pollution. Our Interceptor solutions target 1000 rivers globally, while our ocean cleanup systems concentrate and remove plastic, aiming to eliminate 90% by 2040.
        </p>

        <h3 className="text-xl font-bold text-neutral-600">Join the Movement</h3>
        <p className="text-sm mb-1 text-neutral-800">
          Plastic pollution is a shared responsibility. Explore our dashboard to track our progress, learn about our cleanup technologies, and discover how you can contribute to a cleaner, healthier ocean.
        </p>
      </div>
    </div>
  );
};
