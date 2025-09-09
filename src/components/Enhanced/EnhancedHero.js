import React from 'react';
import { Link } from 'react-router-dom';

const EnhancedHero = () => {
  return (
    <section className="enhanced-hero">
      <div className="enhanced-hero-shapes">
        <div className="enhanced-hero-shape"></div>
        <div className="enhanced-hero-shape"></div>
        <div className="enhanced-hero-shape"></div>
      </div>
      
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <div className="enhanced-hero-content" data-aos="fade-right">
              <div className="enhanced-hero-badge">
                <i className="fas fa-rocket me-2"></i>
                Innovative IT Solutions
              </div>
              
              <h1 className="enhanced-hero-title">
                Perfect IT Solution
                <span className="modern-text-gradient d-block">For Your Business</span>
              </h1>
              
              <p className="enhanced-hero-subtitle">
                Energistically harness ubiquitous imperatives without state of the art 
                collaboration and idea-sharing. Monotonectally parallel task cross-unit 
                experiences and front-end.
              </p>
              
              <div className="enhanced-hero-cta">
                <Link to="/about" className="interactive-btn">
                  Discover More
                  <i className="fas fa-arrow-right ms-2 interactive-btn-icon"></i>
                </Link>
                <Link to="/contact" className="interactive-btn-secondary">
                  Contact Us
                  <i className="fas fa-phone ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="enhanced-hero-image" data-aos="fade-left" data-aos-delay="200">
              <div className="position-relative">
                <img 
                  src="/assets/img/hero/hero_1_1.jpg" 
                  alt="Techlife IT Solutions" 
                  className="img-fluid rounded-3 shadow-lg"
                  style={{borderRadius: '2rem'}}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10 rounded-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;