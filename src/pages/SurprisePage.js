import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import BackgroundImage from '../components/BackgroundImage';
import './SurprisePage.css';

// Final surprise page with confetti
const SurprisePage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [response, setResponse] = useState('');
  const { width, height } = useWindowSize();

  const handleClick = () => {
    setShowConfetti(true);
    setResponse('My cute bondam💕');
    
    // Play sound effect (optional)
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3');
    audio.play().catch(() => {
      // Handle if audio doesn't play
    });
  };

  return (
    <div className="surprise-page">
      <BackgroundImage imageSrc="/images/her-photo.jpg" opacity={0.15} />
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={500}
          recycle={false}
          colors={['#ff69b4', '#ffa6c9', '#ffb6c1', '#d8b4fe', '#ffd700']}
        />
      )}

      <motion.div
        className="surprise-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="surprise-hearts"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          💕💖💗💕
        </motion.div>

        <motion.h1
          className="surprise-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
         Thank you bhavyasriiii 💕
        </motion.h1>

        <motion.p
          className="surprise-subtitle"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Ee year ni na life lo most beautiful year ga marchinanduku thank you.
          Nenu carry chesina prathi memory lo nuvvu unnanduku grateful ga unna.
        </motion.p>

        <motion.div
          className="surprise-message"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
        >
          <p>Nuvvu unna prathi roju oka gift 🎁</p>
          <p>Ni navvu oka silent happiness ✨</p>
          <p>Mana moments anni heart lo permanent 💎</p>
          <p>innu kalisi gadipina prathi moment priceless 🌍</p>
        </motion.div>

        {!showConfetti ? (
          <motion.button
            className="surprise-button"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
          >
            Click chey
          </motion.button>
        ) : (
          <motion.div
            className="response-message"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>{response}</h2>
            <div className="celebration-emojis">
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                🎉
              </motion.span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                💖
              </motion.span>
              <motion.span
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                🎊
              </motion.span>
            </div>
            <p className="final-message">
             Oye Bhavyasrii Before the year ends and with year starting I want to say
              <br />
              <span className="highlighted-text">
                Sorry for all the things which hurted you because of me cutie, nuv hurt avvav ani telsu endukante nen alanti panulu cheyanu kadhaaaaa....!! but yeppudaina hurt ayyi unte sorryyyy bhavyasrii. Tappu evardaina gap iddari madhya perigiddi. Adhi na valla kadhu.
              </span>
              <br /><br />
              <span className="highlighted-text-blue">
                Ninnu intha ga istapade vallu evaraina unnara ante yess unnadu ani cheppuko! Unna kadha
              </span>
              <br /><br />
              Also bhavyasrii nuv taggodhuuu plsss😩
              <br />
              Addam mundi ki velli chudu yentha cute untavo. Pics ki kavali ante B612 undi ga  💕
            </p>
          </motion.div>
        )}

        <motion.div
          className="floating-emojis"
          animate={{
            y: [-20, 0, -20],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✨ 💫 ⭐ 🌟 ✨
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SurprisePage;
