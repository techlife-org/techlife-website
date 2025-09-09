import React from 'react';
import { Link } from 'react-router-dom';

const EnhancedAbout = () => {
  const features = [
    {
      icon: 'fas fa-award',
      title: 'Certified Excellence',
      description: 'Industry-certified professionals delivering world-class solutions'
    },
    {
      icon: 'fas fa-users',
      title: 'Expert Team',
      description: '100% skilled professionals with proven track records'
    },
    {
      icon: 'fas fa-clock',
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Innovation Focus',
      description: 'Cutting-edge technologies and innovative approaches'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Success Rate' }
  ];

  return (
    <section className="modern-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
            <div className="position-relative">
              <img 
                src="/assets/img/normal/about_1_1.jpg" 
                alt="About Techlife" 
                className="img-fluid rounded-3 shadow-lg"
                style={{borderRadius: '2rem'}}
              />
              <div className="position-absolute bottom-0 start-0 m-4">
                <div className="glass-card p-4 text-white">
                  <div className="d-flex align-items-center">
                    <div className="interactive-icon me-3">
                      <i className="fas fa-trophy"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">25+</h4>
                      <p className="mb-0 small">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6" data-aos="fade-left">
            <div className="ps-lg-4">
              <div className="modern-section-subtitle text-start">About Us</div>
              <h2 className="modern-section-title text-start mb-4">
                We Are Increasing Business Success With{' '}
                <span className="text-theme">IT Solutions</span>
              </h2>
              
              <p className="text-muted mb-4 lead">
                Collaboratively envisioneer user-friendly supply chains and cross-unit 
                imperatives. Authoritatively fabricate competitive resources and holistic 
                synergy. Uniquely generate efficient schemas before future-proof solutions.
              </p>
              
              <div className="row g-4 mb-4">
                {features.map((feature, index) => (
                  <div key={index} className="col-sm-6">
                    <div className="d-flex align-items-start">
                      <div className="interactive-icon me-3" style={{width: '48px', height: '48px', fontSize: '18px'}}>
                        <i className={feature.icon}></i>
                      </div>
                      <div>
                        <h5 className="mb-2">{feature.title}</h5>
                        <p className="text-muted small mb-0">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="d-flex flex-wrap align-items-center gap-4">
                <Link to="/about" className="interactive-btn">
                  Discover More
                  <i className="fas fa-arrow-right ms-2 interactive-btn-icon"></i>
                </Link>
                
                <div className="d-flex align-items-center">
                  <div className="interactive-icon me-3" style={{width: '48px', height: '48px', fontSize: '18px'}}>
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <small className="text-muted d-block">Call Us On:</small>
                    <a href="tel:+2349131033131" className="interactive-link fw-semibold">
                      +234 913 103 3131
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="row g-4 mt-5 pt-5" data-aos="fade-up">
          {stats.map((stat, index) => (
            <div key={index} className="col-6 col-md-3 text-center">
              <div className="modern-service-card border-0 bg-transparent">
                <h3 className="display-4 fw-bold text-theme mb-2">{stat.number}</h3>
                <p className="text-muted mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedAbout;