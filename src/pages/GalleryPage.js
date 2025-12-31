import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import BackgroundImage from '../components/BackgroundImage';
import './GalleryPage.css';

// Gallery page with lightbox
const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  // Gallery photos - stored in public/gallery folder
  const photos = [
    {
      id: 1,
      src: `${process.env.PUBLIC_URL}/gallery/photo1.jpg`,
      caption: "Yr mottom chusthu undipochu💖",
    },
    {
      id: 2,
      src: `${process.env.PUBLIC_URL}/gallery/photo2.jpg`,
      caption: "Years's 2nd biggest achivement🙇",
    },
    {
      id: 3,
      src: `${process.env.PUBLIC_URL}/gallery/photo3.jpg`,
      caption: "Bondam and Me Thanks AI🔥💫",
    },
    {
      id: 4,
      src: `${process.env.PUBLIC_URL}/gallery/photo4.jpg`,
      caption: "Years's best one for me ✨",
    },
    {
      id: 5,
      src: `${process.env.PUBLIC_URL}/gallery/photo5.jpg`,
      caption: "Biggest adventure nuv scooty drive chestunnapudu nen venaka 🚳😨 kadhale Fun Fun",
    },
    {
      id: 6,
      src: `${process.env.PUBLIC_URL}/gallery/photo6.jpg`,
      caption: "Nitho gadipina prathi moment, time kaadu memory ga maripothundi 💖",
    },
    {
      id: 7,
      src: `${process.env.PUBLIC_URL}/gallery/photo7.jpg`,
      caption: "Prathi glance lo oka feeling untundi. Adi calm ga, natural ga untundi. Chala special ga anipistundi💯",
    },
    {
      id: 8,
      src: `${process.env.PUBLIC_URL}/gallery/photo8.jpg`,
      caption: "Ee bus lo Best night asala  idhi year lo can't even forget it any upcoming years. Ahh visuals inka na munde unnai😩💌",
    },
  ];

  // Preload images progressively
  useEffect(() => {
    photos.forEach((photo) => {
      const img = new Image();
      img.src = photo.src;
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [photo.id]: true }));
      };
    });
  }, []);

  return (
    <div className="gallery-page">
      <BackgroundImage imageSrc="/images/her-photo.jpg" opacity={0.15} />
      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="gallery-title">Our Precious Moments 💟</h1>
        <p className="gallery-subtitle">A collection of memories that make my heart smile</p>
      </motion.div>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(photo)}
          >
            <div className="image-container">
              <img 
                src={photo.src} 
                alt={photo.caption}
                loading="lazy"
                style={{
                  opacity: loadedImages[photo.id] ? 1 : 0,
                  transition: 'opacity 0.3s ease-in-out'
                }}
              />
              {!loadedImages[photo.id] && (
                <div className="image-placeholder">
                  <div className="loading-spinner"></div>
                </div>
              )}
              <div className="image-overlay">
                <div className="heart-icon">💕</div>
              </div>
            </div>
            <p className="image-caption">{photo.caption}</p>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button" onClick={() => setSelectedImage(null)}>
                <FaTimes />
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.caption}
                loading="eager"
              />
              <p className="lightbox-caption">{selectedImage.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
