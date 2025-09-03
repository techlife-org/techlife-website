import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 50);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`scroll-top ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <svg 
        className="progress-circle svg-content" 
        width="100%" 
        height="100%" 
        viewBox="-1 -1 102 102"
      >
        <path 
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" 
          style={{
            transition: 'stroke-dashoffset 10ms linear 0s',
            strokeDasharray: '307.919, 307.919',
            strokeDashoffset: 307.919 - (307.919 * scrollProgress) / 100
          }}
        />
      </svg>
    </div>
  );
};

export default ScrollToTop;