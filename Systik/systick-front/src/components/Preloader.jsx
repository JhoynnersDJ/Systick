import React from 'react';

const Preloader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="animate-pulse rounded-full border-t-8 border-green-500 border-opacity-75 h-16 w-16"></div>
    </div>
  );
};

export default Preloader;