import React from 'react';
import { IMAGES } from '../utils/imagePaths';
import ImageWithFallback from '../components/Common/ImageWithFallback';
import HeroBackground from '../components/Common/HeroBackground';

const ImageTest = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Image Test Page</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Logo Test</h2>
        <ImageWithFallback src={IMAGES.logo} alt="Logo" style={{ width: '200px' }} />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Service Icons Test</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <ImageWithFallback src={IMAGES.serviceIcons.featured1} alt="Service 1" style={{ width: '50px' }} />
          <ImageWithFallback src={IMAGES.serviceIcons.featured2} alt="Service 2" style={{ width: '50px' }} />
          <ImageWithFallback src={IMAGES.serviceIcons.featured3} alt="Service 3" style={{ width: '50px' }} />
          <ImageWithFallback src={IMAGES.serviceIcons.featured4} alt="Service 4" style={{ width: '50px' }} />
        </div>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>About Images Test</h2>
        <ImageWithFallback src={IMAGES.about.main} alt="About Main" style={{ width: '200px' }} />
        <ImageWithFallback src={IMAGES.about.shape} alt="About Shape" style={{ width: '100px' }} />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Hero Background Test</h2>
        <ImageWithFallback src={IMAGES.hero.bg1} alt="Hero BG" style={{ width: '300px' }} />
        <div style={{ marginTop: '10px', height: '200px', width: '100%', position: 'relative' }}>
          <HeroBackground 
            backgroundImage={IMAGES.hero.bg1}
            fallbackImage={IMAGES.hero.bg2}
            style={{ height: '200px' }}
          >
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              color: 'white',
              textAlign: 'center',
              zIndex: 10
            }}>
              <h3>Hero Background Component Test</h3>
              <p>This should show the hero background image</p>
            </div>
          </HeroBackground>
        </div>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Direct Image Test (without React)</h2>
        <img src="/assets/img/logo.png" alt="Direct Logo" style={{ width: '200px' }} />
        <img src="/assets/img/icon/service_featured_1.svg" alt="Direct Icon" style={{ width: '50px' }} />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Image URLs</h2>
        <ul>
          <li>Logo: {IMAGES.logo}</li>
          <li>Service Icon 1: {IMAGES.serviceIcons.featured1}</li>
          <li>About Main: {IMAGES.about.main}</li>
          <li>Hero BG: {IMAGES.hero.bg1}</li>
        </ul>
      </div>
    </div>
  );
};

export default ImageTest;