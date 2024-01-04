import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-amber-800 joti-one">404</h1>
        <p className="text-xl text-gray-500">Page not found</p>
        <p className="text-gray-500">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link to="/" className="inline-block px-5 py-2 mt-6 text-white rounded bg-amber-500">Go Home</Link> {/* Add this line */}

      </div>
    </div>
  );
};

export default NotFound;