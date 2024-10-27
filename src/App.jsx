import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LandingPage from './components/LandingPage';
import CameraMode from './components/CameraMode';
import CCTVMode from './components/CCTVMode';

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/camera" element={<CameraMode />} />
        <Route path="/cctv" element={<CCTVMode />} />
      </Routes>
    </Router>
  );
}

export default App;