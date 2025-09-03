import React, { useState } from 'react';

const ImageWithFallback = ({ 
  src, 
  alt, 
  className = '', 
  style = {}, 
  fallbackSrc = '/assets/img/logo.svg',
  showLoadingState = false 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    console.log(`Image failed to load: ${src}`);
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
      setIsLoading(false);
    }
  };

  const handleLoad = () => {
    console.log(`Image loaded successfully: ${imgSrc}`);
    setIsLoading(false);
  };

  const combinedClassName = `${className} ${isLoading && showLoadingState ? 'loading-pulse' : ''} ${!isLoading ? 'image-loaded' : 'image-loading'}`;

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={combinedClassName}
      style={style}
      onError={handleError}
      onLoad={handleLoad}
    />
  );
};

export default ImageWithFallback;