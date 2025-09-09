import React from 'react';
import { Link } from 'react-router-dom';

const EnhancedServices = () => {
  const services = [
    {
      id: 1,
      icon: 'fas fa-laptop-code',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices for optimal performance and user experience.',
      features: ['Responsive Design', 'Modern Frameworks', 'SEO Optimized']
    },
    {
      id: 2,
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      features: ['iOS & Android', 'Cross-Platform', 'Native Performance']
    },
    {
      id: 3,
      icon: 'fas fa-cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services that grow with your business needs and ensure maximum uptime.',
      features: ['AWS & Azure', 'Auto Scaling', '99.9% Uptime']
    },
    {
      id: 4,
      icon: 'fas fa-shield-alt',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.',
      features: ['Threat Detection', 'Data Protection', 'Compliance']
    },
    {
      id: 5,
      icon: 'fas fa-chart-line',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.',
      features: ['Business Intelligence', 'Real-time Analytics', 'Custom Dashboards']
    },
    {
      id: 6,
      icon: 'fas fa-robot',
      title: 'AI & Machine Learning',
      description: 'Leverage artificial intelligence and machine learning to automate processes and gain competitive advantages.',
      features: ['Process Automation', 'Predictive Analytics', 'Custom AI Models']
    }
  ];

  return (
    <section className="modern-section py-5" style={{backgroundColor: '#f8faff'}}>
      <div className="container">
        <div className="modern-section-header" data-aos="fade-up">
          <div className="modern-section-subtitle">Our Services</div>
          <h2 className="modern-section-title">
            We Provide Exclusive <span className="text-theme">Services</span> For Your Business
          </h2>
          <p className="modern-section-description">
            From web development to AI solutions, we offer comprehensive IT services 
            that drive innovation and accelerate your business growth.
          </p>
        </div>
        
        <div className="enhanced-services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="modern-service-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="modern-service-icon">
                <i className={service.icon}></i>
              </div>
              
              <h3 className="modern-service-title">{service.title}</h3>
              
              <p className="modern-service-description">
                {service.description}
              </p>
              
              <ul className="list-unstyled mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="d-flex align-items-center mb-2">
                    <i className="fas fa-check text-theme me-2"></i>
                    <small className="text-muted">{feature}</small>
                  </li>
                ))}
              </ul>
              
              <Link 
                to={`/service-details/${service.id}`} 
                className="enhanced-service-link"
              >
                Learn More
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="600">
          <Link to="/services" className="interactive-btn">
            View All Services
            <i className="fas fa-arrow-right ms-2 interactive-btn-icon"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServices;