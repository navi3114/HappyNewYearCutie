import React from 'react';
import './BackgroundImage.css';

// Reusable background image component with low opacity
const BackgroundImage = ({ imageSrc, opacity = 0.15 }) => {
  const fullImageSrc = imageSrc.startsWith('http') ? imageSrc : `${process.env.PUBLIC_URL}${imageSrc}`;
  
  return (
    <div 
      className="background-image-overlay"
      style={{
        backgroundImage: `url(${fullImageSrc})`,
        opacity: opacity
      }}
    />
  );
};

export default BackgroundImage;
