import React from 'react';
import './FloatingHearts.css';

// Floating hearts background animation component
const FloatingHearts = () => {
  // Create array of hearts for animation
  const hearts = Array.from({ length: 15 }, (_, i) => i);

  return (
    <div className="floating-hearts-container">
      {hearts.map((heart) => (
        <div
          key={heart}
          className="floating-heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          💕
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
