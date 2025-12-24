import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { AboutPage } from './components/AboutPage';

// Simple loading spinner for the initial load
const LoadingScreen = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-[#050505] text-white z-50">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin"></div>
      <div className="text-xs font-mono uppercase tracking-widest text-white/30">Initializing Core...</div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
          </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;