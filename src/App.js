import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import MusicPlayer from './components/MusicPlayer';
import CursorTrail from './components/CursorTrail';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import OurStoryPage from './pages/OurStoryPage';
import GalleryPage from './pages/GalleryPage';
import MyWordsPage from './pages/MyWordsPage';
import ReasonsPage from './pages/ReasonsPage';
import SurprisePage from './pages/SurprisePage';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <ScrollToTop />
        <CursorTrail />
        <MusicPlayer />
        <Navigation />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/story" element={<OurStoryPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/words" element={<MyWordsPage />} />
            <Route path="/reasons" element={<ReasonsPage />} />
            <Route path="/surprise" element={<SurprisePage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
