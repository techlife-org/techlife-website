import React, { useState, useEffect } from 'react';

const HeroBackground = ({ 
  backgroundImage, 
  fallbackImage = '/assets/photos/highlights/2.jpg',
  children,
  className = '',
  style = {}
}) => {
  const [currentBg, setCurrentBg] = useState(backgroundImage);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLoaded(true);
      console.log(`Hero background loaded: ${backgroundImage}`);
    };
    img.onerror = () => {
      console.log(`Hero background failed, using fallback: ${fallbackImage}`);
      setCurrentBg(fallbackImage);
      setIsLoaded(true);
    };
    img.src = backgroundImage;
  }, [backgroundImage, fallbackImage]);

  const heroStyle = {
    backgroundImage: `url(${currentBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    maxHeight: '100vh',
    position: 'relative',
    opacity: isLoaded ? 1 : 0.7,
    transition: 'opacity 0.3s ease-in-out',
    ...style
  };

  return (
    <div 
      className={`th-hero-bg ${className}`}
      style={heroStyle}
    >
      {/* Overlay for better text readability */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1
        }}
      ></div>
      
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
};

export default HeroBackground;