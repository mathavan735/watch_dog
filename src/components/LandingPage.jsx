import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center max-w-6xl w-full mx-auto">
        <div className="logo-container mb-12">
          <img 
            src="/watchdog-logo.png" 
            alt="Watch Dog Logo"
            className="w-64 h-64 object-contain"
          />
        </div>

        <h1 className="text-7xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          24/7 WATCH DOG
        </h1>
        
        <p className="text-xl text-gray-400 mb-12 text-center max-w-2xl">
          Advanced surveillance system with real-time object detection and intelligent monitoring 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <button
            onClick={() => navigate('/camera')}
            className="btn-glow group bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-xl text-center transform transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 mb-4 text-blue-300 group-hover:text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h2 className="text-2xl font-bold mb-2">Camera Mode</h2>
              <p className="text-blue-200">Real-time object detection using your camera for helping blind people</p>
            </div>
          </button>

          <button
            onClick={() => navigate('/cctv')}
            className="btn-glow group bg-gradient-to-r from-cyan-600 to-cyan-800 p-8 rounded-xl text-center transform transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 mb-4 text-cyan-300 group-hover:text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h2 className="text-2xl font-bold mb-2">CCTV Mode</h2>
              <p className="text-cyan-200">Monitor CCTV 24/7 and alerts you if a person is detected</p>
            </div>

          </button>
        </div>
      </div>
      <p className="text-7xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Developed By Mathavan 
        </p>
    </div>
  );
};

export default LandingPage;