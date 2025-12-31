import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaMusic, FaPause } from 'react-icons/fa';
import './MusicPlayer.css';

// Background music player with different songs per page
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const location = useLocation();
  const hasAttemptedAutoplay = useRef(false);

  // Map routes to different songs
  const songs = {
    '/': '/music/landing.mp3',           // Landing page song
    '/story': '/music/story.mp3',        // Our Story page song
    '/gallery': '/music/gallery.mp3',    // Gallery page song
    '/words': '/music/words.mp3',        // My Words page song
    '/reasons': '/music/reasons.mp3',    // Reasons page song
    '/surprise': '/music/surprise.mp3',  // Surprise page song
  };

  // Get current song based on route
  const currentSong = songs[location.pathname] || songs['/'];

  // Auto-play on initial load
  useEffect(() => {
    if (!hasAttemptedAutoplay.current && audioRef.current) {
      hasAttemptedAutoplay.current = true;
      setTimeout(() => {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Autoplay blocked by browser
          setIsPlaying(false);
        });
      }, 100);
    }
  }, []);

  // Handle song change when route changes
  useEffect(() => {
    if (audioRef.current && hasAttemptedAutoplay.current) {
      const wasPlaying = isPlaying;
      audioRef.current.pause();
      audioRef.current.load();
      
      if (wasPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(false);
        });
      }
    }
  }, [location.pathname]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="music-player">
      <button onClick={toggleMusic} className="music-button" title={isPlaying ? 'Pause Music' : 'Play Music'}>
        {isPlaying ? <FaPause /> : <FaMusic />}
      </button>
      <audio
        ref={audioRef}
        loop
        autoPlay
        src={currentSong}
      />
    </div>
  );
};

export default MusicPlayer;
