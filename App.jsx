import React, { Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home.jsx';
import { AboutPage } from './components/AboutPage.jsx';

// Simple loading spinner for the initial load
const LoadingScreen = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-[#050505] text-white z-50">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin"></div>
      <div className="text-xs font-mono uppercase tracking-widest text-white/30">Initializing Core...</div>
    </div>
  </div>
);

const App = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <HashRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
          </Routes>
      </HashRouter>
    </Suspense>
  );
};

export default App;