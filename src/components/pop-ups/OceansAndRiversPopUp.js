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
<>
<div className="fixed top-0 left-0 w-full"> 
  <div className="bg-gray-800 bg-opacity-95 mx-12 p-8 rounded-lg my-2 py- flex items-center">
    <div className="flex-1">
      <h1 className="text-3xl font-bold mb-2 text-white">Oceans and Rivers</h1>
      <h1 className="text-2xl font-bold mb-2 text-white">Tackling Plastic Pollution</h1>

        <p className="text-sm mb-2 text-white">
          Plastic pollution poses a global threat, with over 400 million metric tons produced annually. Less than 0.5% ends up in the ocean, but even this small percentage amounts to over 1 million metric tons.
        </p>

        <h3 className="text-sm font-bold text-white">How Plastic Enters the Ocean</h3>
        <p className="text-sm mb-2 text-white">
          Varied plastic usage and waste management globally lead to 9% recycling and 22% mismanagement. 1000 rivers, mainly in middle-income countries, contribute to 80% of ocean plastic emissions.
        </p>

        <h3 className="text-sm font-bold text-white">The Impact on Wildlife and Ecosystems</h3>
        <p className="text-sm mb-2 text-white">
          Marine life suffers from entanglement and ingestion, impacting over 900 species. Plastic disrupts ecosystems, spreads harmful additives, and poses risks to oxygen production, carbon cycling, and human health.
        </p>

        <h3 className="text-sm font-bold text-white">What We Do</h3>
        <p className="text-sm mb-1 text-white">
          The Ocean Cleanup is on a mission to stop new plastic inflow and clean up existing pollution. Our Interceptor solutions target 1000 rivers globally, while our ocean cleanup systems concentrate and remove plastic, aiming to eliminate 90% by 2040.
        </p>

        <h3 className="text-sm font-bold text-white">Join the Movement</h3>
        <p className="text-sm mb-1 text-white">
          Plastic pollution is a shared responsibility. Explore our dashboard to track our progress, learn about our cleanup technologies, and discover how you can contribute to a cleaner, healthier ocean.
        </p>
    </div>
    <div className="ml-8">
      <img src="/pictures/oceanAndRiver.jpg" style={{ width: '220px', height: '220px' }} />
    </div>
  </div>
</div>

    
    </>
  );
};
