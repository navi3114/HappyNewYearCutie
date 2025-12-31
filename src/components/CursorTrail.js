import React, { useEffect, useState } from 'react';
import './CursorTrail.css';

// Heart trail that follows cursor
const CursorTrail = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    let heartId = 0;

    const handleMouseMove = (e) => {
      const newHeart = {
        id: heartId++,
        x: e.clientX,
        y: e.clientY,
      };

      setHearts((prevHearts) => [...prevHearts, newHeart]);

      // Remove heart after animation
      setTimeout(() => {
        setHearts((prevHearts) => prevHearts.filter((h) => h.id !== newHeart.id));
      }, 1000);
    };

    // Throttle mouse move events
    let throttleTimeout;
    const throttledMouseMove = (e) => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          handleMouseMove(e);
          throttleTimeout = null;
        }, 50);
      }
    };

    window.addEventListener('mousemove', throttledMouseMove);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
    };
  }, []);

  return (
    <div className="cursor-trail-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="cursor-heart"
          style={{
            left: heart.x,
            top: heart.y,
          }}
        >
          💖
        </div>
      ))}
    </div>
  );
};

export default CursorTrail;
