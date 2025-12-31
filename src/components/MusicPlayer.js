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

  // Map routes to different songs (null means no music for that page)
  const songs = {
    '/': null,                                                     // Landing page - no music
    '/story': `${process.env.PUBLIC_URL}/music/story.mp3`,        // Our Story page song
    '/gallery': `${process.env.PUBLIC_URL}/music/gallery.mp3`,    // Gallery page song
    '/words': `${process.env.PUBLIC_URL}/music/words.mp3`,        // My Words page song
    '/reasons': `${process.env.PUBLIC_URL}/music/reasons.mp3`,    // Reasons page song
    '/surprise': `${process.env.PUBLIC_URL}/music/notes.mp3`,     // Note page song
  };

  // Get current song based on route
  const currentSong = songs[location.pathname];
  const hasMusicOnCurrentPage = currentSong !== null && currentSong !== undefined;

  // Auto-play on initial load
  useEffect(() => {
    if (!hasAttemptedAutoplay.current && audioRef.current && hasMusicOnCurrentPage) {
      hasAttemptedAutoplay.current = true;
      
      // Try autoplay immediately and on interaction
      const attemptAutoplay = () => {
        if (audioRef.current && audioRef.current.paused) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch((error) => {
            console.log('Autoplay prevented:', error);
            setIsPlaying(false);
          });
        }
      };
      
      // Try immediate autoplay
      setTimeout(attemptAutoplay, 200);
      
      // Also try on any user interaction
      const startOnInteraction = (e) => {
        attemptAutoplay();
        document.removeEventListener('touchstart', startOnInteraction);
        document.removeEventListener('click', startOnInteraction);
        document.removeEventListener('keydown', startOnInteraction);
      };
      
      document.addEventListener('touchstart', startOnInteraction, { once: true });
      document.addEventListener('click', startOnInteraction, { once: true });
      document.addEventListener('keydown', startOnInteraction, { once: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle song change when route changes
  useEffect(() => {
    if (audioRef.current && hasAttemptedAutoplay.current) {
      const wasPlaying = !audioRef.current.paused;
      audioRef.current.pause();
      audioRef.current.load();
      
      // Only play if the new page has music
      if (wasPlaying && hasMusicOnCurrentPage) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(false);
        });
      } else if (!hasMusicOnCurrentPage) {
        setIsPlaying(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const toggleMusic = () => {
    if (audioRef.current && hasMusicOnCurrentPage) {
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

  // Don't show music player if current page has no music
  if (!hasMusicOnCurrentPage) {
    return null;
  }

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
