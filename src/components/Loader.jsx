import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="relative w-12 h-12 mx-auto">
        <div className="absolute w-12 h-1 bg-white opacity-25 top-16 left-0 rounded-full animate-shadow"></div>
        <div className="absolute w-full h-full bg-orange-500 rounded-md animate-bxSpin"></div>
      </div>
      <style>
        {`
          @keyframes bxSpin {
            17% { border-bottom-right-radius: 3px; }
            25% { transform: translateY(9px) rotate(22.5deg); }
            50% { transform: translateY(18px) scale(1, .9) rotate(45deg); border-bottom-right-radius: 40px; }
            75% { transform: translateY(9px) rotate(67.5deg); }
            100% { transform: translateY(0) rotate(90deg); }
          }
          .animate-bxSpin {
            animation: bxSpin 0.5s linear infinite;
          }
          @keyframes shadow {
            0%, 100% { transform: scale(1, 1); }
            50% { transform: scale(1.2, 1); }
          }
          .animate-shadow {
            animation: shadow 0.5s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
