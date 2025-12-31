import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaSmile, FaLaugh, FaStar, FaSun, FaMoon, FaCoffee, FaMusic } from 'react-icons/fa';
import BackgroundImage from '../components/BackgroundImage';
import './ReasonsPage.css';

// Reasons I Love You page with interactive cards
const ReasonsPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const reasons = [
    {
      id: 1,
      icon: <FaSmile />,
      emoji: "😊",
      title: "Your Smile",
      message: "Nuv navvithe baguntav telsa, Nuv navvataniki kavalante nene joker avtha monna ahh calender pic ki aynattu",
      color: "#ff69b4",
    },
    {
      id: 2,
      icon: <FaLaugh />,
      emoji: "😅",
      title: "Your Anger",
      message: "Baboiiiii ni kopam, yenni yenni yenni sorry's cheppi unta oka 365 ayna cheppa emo",
      color: "#ffa6c9",
    },
    // {
    //   id: 3,
    //   icon: <FaHeart />,
    //   emoji: "🤍",
    //   title: "Your Care",
    //   message: "The way you care for me, remember small details, and check on me throughout the day - it shows me what true love looks like.",
    //   color: "#ffb6c1",
    // },
    {
      id: 4,
      icon: <FaStar />,
      emoji: "⭐",
      title: "Your Dreams",
      message: "I love how passionate you are about your dreams. Chudu pakka nuv anukunnadhi avuddi ",
      color: "#d8b4fe",
    },
    // {
    //   id: 5,
    //   icon: <FaSun />,
    //   emoji: "☀️",
    //   title: "Your Energy",
    //   message: "",
    //   color: "#ffd700",
    // },
    {
      id: 6,
      icon: <FaMoon />,
      emoji: "🌙",
      title: "Your Calm",
      message: "Nen yeppudaina kopadda kuda calm ga deal chesthav chudu akakde poddi kopam mottom",
      color: "#e6ccff",
    },
    {
      id: 7,
      icon: <FaCoffee />,
      emoji: "💭",
      title: "Your Thoughts",
      message: "Mana conversations naku chala special.Just matladadam kaadu, mana thoughts share chesukune moments. Nuvvu think chese way, life ni chuse perspective kani ammaa nuv radhe radhe ki veltha antav chudu akkade lightttt ga tension. alanti decision manaki vaddu okay na?",
      color: "#ff85a1",
    },
    {
      id: 8,
      icon: <FaMusic />,
      emoji: "🎵",
      title: "Your Voice",
      message: "Ni voice na favorite sound. Laughing, singing, lekapothe just natho matladina adi saripothundi. Inka emi akkarledu.",
      color: "#ffa8d5",
    },
  ];

  return (
    <div className="reasons-page">
      <BackgroundImage imageSrc="/images/her-photo.jpg" opacity={0.15} />
      <motion.div
        className="reasons-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="reasons-title">Year lo tamari emotions 💟</h1>
        <p className="reasons-subtitle">Click each card to see why you're so special</p>
      </motion.div>

      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.id}
            className="reason-card"
            style={{ '--card-color': reason.color }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            onClick={() => setSelectedCard(reason)}
          >
            <div className="card-icon">{reason.icon}</div>
            <div className="card-emoji">{reason.emoji}</div>
            <h3 className="card-title">{reason.title}</h3>
            <p className="card-hint">Tap to read more</p>
          </motion.div>
        ))}
      </div>

      {/* Modal for expanded card */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="reason-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              className="modal-content"
              style={{ background: selectedCard.color }}
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.5, rotate: 10 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-emoji">{selectedCard.emoji}</div>
              <h2 className="modal-title">{selectedCard.title}</h2>
              <p className="modal-message">{selectedCard.message}</p>
              <button className="modal-close" onClick={() => setSelectedCard(null)}>
                Close 💕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReasonsPage;
