import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FloatingHearts from '../components/FloatingHearts';
import BackgroundImage from '../components/BackgroundImage';
import './LandingPage.css';

// Landing page with cute intro animation
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <BackgroundImage imageSrc="/images/her-photo.jpg" opacity={0.15} />
      <FloatingHearts />
      
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
    </div>
  );
};

export default LandingPage;
