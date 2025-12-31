import React from 'react';
import './BackgroundImage.css';

// Reusable background image component with low opacity
const BackgroundImage = ({ imageSrc, opacity = 0.15 }) => {
  return (
    <div 
      className="background-image-overlay"
      style={{
        backgroundImage: `url(${imageSrc})`,
        opacity: opacity
      }}
    />
  );
};

export default BackgroundImage;
