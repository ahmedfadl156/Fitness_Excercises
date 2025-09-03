import React from 'react';

const Loader = ({ size = 'medium', text = 'Loading...', fullScreen = false }) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-12 h-12';
      case 'large':
        return 'w-32 h-32';
      case 'xlarge':
        return 'w-40 h-40';
      default:
        return 'w-20 h-20';
    }
  };

  const containerClasses = fullScreen 
    ? "fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50 gap-6"
    : "flex flex-col items-center justify-center min-h-[400px] gap-6";

  return (
    <div className={containerClasses}>
      <div className={`relative flex items-center justify-center ${getSizeClasses()}`}>
        <div className="absolute inset-0 rounded-full border-4 border-gray-200 border-t-orange-500 animate-spin"></div>
        
        <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-orange-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        
        <div className="relative flex items-center justify-center animate-bounce z-10">
          <div className="flex items-center">
            <div className="w-3 h-6 bg-gradient-to-b from-gray-600 to-gray-800 rounded-sm"></div>
            <div className="w-8 h-1.5 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 rounded-full mx-1"></div>
            <div className="w-3 h-6 bg-gradient-to-b from-gray-600 to-gray-800 rounded-sm"></div>
          </div>
        </div>
      </div>
      
      {text && (
        <p className="text-white font-medium text-lg text-center animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
};

export default Loader;