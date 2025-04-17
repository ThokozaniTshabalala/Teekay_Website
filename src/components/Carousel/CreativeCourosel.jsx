import React, { useEffect, useRef, useState } from 'react';
import './CreativeCarousel.css';

const CreativeCarousel = () => {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Repeating the message to create a smooth scroll illusion
  const message = "→ Welcome to Creativity ";
  const repeatCount = 20; // Adjust based on screen width
  const fullMessage = message.repeat(repeatCount);

  return (
    <div
      className="creative-carousel-container"
      ref={carouselRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="creative-carousel-content"
        style={{
          animationPlayState: isHovered ? 'paused' : 'running',
        }}
      >
        <span>{fullMessage}</span>
      </div>
    </div>
  );
};

export default CreativeCarousel;
