import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import FloatingHearts from '../components/FloatingHearts';
import BackgroundImage from '../components/BackgroundImage';
import './LandingPage.css';

// Landing page with cute intro animation
const LandingPage = () => {
  const navigate = useNavigate();
  const [showDoor, setShowDoor] = useState(true);
  const [doorOpened, setDoorOpened] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const { width, height } = useWindowSize();
  const audioRef = useRef(null);

  const handleDoorOpen = () => {
    setDoorOpened(true);
    
    // Play home music
    audioRef.current = new Audio(`${process.env.PUBLIC_URL}/music/home.mp3`);
    audioRef.current.loop = true;
    audioRef.current.play().catch((error) => {
      console.log('Audio playback failed:', error);
    });
    
    // Show content after door animation completes
    setTimeout(() => {
      setShowDoor(false);
      setShowContent(true);
    }, 2000);
  };

  // Stop music when component unmounts (user navigates away)
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div className="landing-page">
      {showDoor && <div className="hide-navigation-overlay" />}
      <BackgroundImage imageSrc="/images/her-photo.jpg" opacity={0.15} />
      {showContent && <FloatingHearts />}
      
      {showContent && (
        <motion.div
          className="landing-content"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
        <motion.div
          className="sparkle"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✨
        </motion.div>

        <motion.h1
          className="landing-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Happy New Year Bhavyasriiiiiiii 💕
        </motion.h1>

        <motion.p
          className="landing-subtitle"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          This year became magical because of you ✨
          Ee samvatsaram oka gurthundipoye katha 
          Daaniki kaaranam nuvve
          Eppatiki marchipolenu 💌
        </motion.p>

        <motion.button
          className="enter-button"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.5, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/story')}
        >
          Click to Enter in my 2025 💖
        </motion.button>

        <motion.div
          className="heart-pulse"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ❤️
        </motion.div>
      </motion.div>
      )}

      {/* Door Animation */}
      <AnimatePresence>
        {showDoor && (
          <>
            {doorOpened && (
              <Confetti
                width={width}
                height={height}
                numberOfPieces={800}
                recycle={false}
                colors={['#ff69b4', '#ffa6c9', '#ffb6c1', '#d8b4fe', '#ffd700', '#ff1493', '#ff6347']}
                gravity={0.3}
              />
            )}
            <motion.div
              className="door-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={!doorOpened ? handleDoorOpen : undefined}
              style={{ cursor: !doorOpened ? 'pointer' : 'default' }}
            >
              <div className="door-container">
                {!doorOpened && (
                  <motion.div
                    className="door-instruction"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    Open the door Cutiepie🫴
                  </motion.div>
                )}
                <motion.div
                  className="door-left"
                  animate={doorOpened ? { rotateY: -120, x: -50 } : { rotateY: 0, x: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                  <div className="door-panel">
                    <div className="door-number">14</div>
                    <div className="door-knob"></div>
                    <div className="door-pattern">
                      <div className="pattern-line"></div>
                      <div className="pattern-line"></div>
                      <div className="pattern-line"></div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="door-right"
                  animate={doorOpened ? { rotateY: 120, x: 50 } : { rotateY: 0, x: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                  <div className="door-panel">
                    <div className="door-number">31</div>
                    <div className="door-knob"></div>
                    <div className="door-pattern">
                      <div className="pattern-line"></div>
                      <div className="pattern-line"></div>
                      <div className="pattern-line"></div>
                    </div>
                  </div>
                </motion.div>
                {doorOpened && (
                  <motion.div
                    className="celebration-burst"
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 3, opacity: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    🎉🎊✨💖🎆
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
