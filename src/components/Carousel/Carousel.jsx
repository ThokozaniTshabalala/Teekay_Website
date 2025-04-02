import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const carouselRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const items = [
    "Innovative",
    "Meticulous",
    "Adaptable",
    "Collaborative",
    "Efficient",
    "Problem-Solver"
  ];

  useEffect(() => {
    const updateWidths = () => {
      if (carouselRef.current) {
        setContainerWidth(carouselRef.current.offsetWidth);
        
        // Calculate total content width (all items + gaps)
        const itemElements = carouselRef.current.querySelectorAll('.carousel-item');
        let totalWidth = 0;
        itemElements.forEach((item, index) => {
          if (index < items.length) { // Only count original items
            totalWidth += item.offsetWidth + 16; // item width + gap
          }
        });
        setContentWidth(totalWidth);
      }
    };

    updateWidths();
    window.addEventListener('resize', updateWidths);
    
    return () => {
      window.removeEventListener('resize', updateWidths);
    };
  }, [items.length]);

  // Calculate how many sets of items we need to display
  // to ensure smooth infinite scrolling
  const calculateItemSets = () => {
    // Need at least 2 sets to create illusion of infinite scroll
    return 3;
  };

  const renderItems = () => {
    const sets = calculateItemSets();
    const allSets = [];
    
    for (let i = 0; i < sets; i++) {
      allSets.push(
        items.map((item, index) => (
          <div className="carousel-item" key={`${i}-${index}`}>
            <span>{item}</span>
            <img 
              alt="Star Icon" 
              className="star-icon" 
              src="google-gemini-logomark-black-24439.svg"
            />
          </div>
        ))
      );
    }
    
    return allSets.flat();
  };

  const duration = contentWidth > 0 ? (contentWidth / 50) : 20; // Adjust speed based on content width

  return (
    <div 
      className="carousel-container"
      ref={carouselRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="carousel-content"
        style={{
          animationPlayState: isHovered ? 'paused' : 'running',
          animationDuration: `${duration}s`
        }}
      >
        {renderItems()}
      </div>
    </div>
  );
};

export default Carousel;