import React from 'react';
import { Link } from 'react-router-dom';

const EnhancedContact = () => {
  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Our Location',
      details: 'No 54-B Jaoji Quarters, Kano 700101, Kano State, Nigeria'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone Number',
      details: '+234 913 103 3131'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Address',
      details: 'info@techlife.ng'
    },
    {
      icon: 'fas fa-clock',
      title: 'Working Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <section className="modern-section py-5" style={{backgroundColor: '#f8faff'}}>
      <div className="container">
        <div className="modern-section-header" data-aos="fade-up">
          <div className="modern-section-subtitle">Get In Touch</div>
          <h2 className="modern-section-title">
            Ready to Start Your <span className="text-theme">Next Project</span>?
          </h2>
          <p className="modern-section-description">
            Let's discuss how we can help transform your business with innovative IT solutions. 
            Contact us today for a free consultation.
          </p>
        </div>
        
        <div className="row g-4 mt-5">
          {/* Contact Information */}
          <div className="col-lg-6">
            <div className="row g-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="col-sm-6" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="modern-service-card text-center h-100">
                    <div className="interactive-icon mx-auto mb-3">
                      <i className={info.icon}></i>
                    </div>
                    <h5 className="mb-3">{info.title}</h5>
                    <p className="text-muted mb-0">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="mt-5" data-aos="fade-up" data-aos-delay="400">
              <div className="modern-service-card bg-gradient-primary text-white text-center">
                <h4 className="mb-3">Need Immediate Assistance?</h4>
                <p className="mb-4 opacity-90">
                  Our team is ready to help you with your IT challenges. 
                  Get in touch for a free consultation.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <Link to="/contact" className="interactive-btn-secondary">
                    Get Free Consultation
                    <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                  <a href="tel:+2349131033131" className="interactive-btn-ghost">
                    <i className="fas fa-phone me-2"></i>
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <div className="modern-service-card">
              <h4 className="mb-4">Send us a Message</h4>
              <form>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="interactive-form-group">
                      <input 
                        type="text" 
                        className="interactive-input" 
                        placeholder=" "
                        required
                      />
                      <label className="interactive-label">Your Name</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="interactive-form-group">
                      <input 
                        type="email" 
                        className="interactive-input" 
                        placeholder=" "
                        required
                      />
                      <label className="interactive-label">Email Address</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="interactive-form-group">
                      <input 
                        type="text" 
                        className="interactive-input" 
                        placeholder=" "
                        required
                      />
                      <label className="interactive-label">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="interactive-form-group">
                      <textarea 
                        className="interactive-input interactive-textarea" 
                        placeholder=" "
                        rows="5"
                        required
                      ></textarea>
                      <label className="interactive-label">Your Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="interactive-btn w-100">
                      Send Message
                      <i className="fas fa-paper-plane ms-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="600">
          <h5 className="mb-4">Follow Us On Social Media</h5>
          <div className="d-flex justify-content-center gap-3">
            <a href="https://www.instagram.com/m_dalhatu_?igsh=Mmpnd3kzOW42czE2&utm_source=qr" className="interactive-btn-ghost">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://x.com/techlifeng?s=21" className="interactive-btn-ghost">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linktr.ee/Techlifeng" className="interactive-btn-ghost">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://youtube.com/@techlifeng?si=WX2tVjR11gxScOb2" className="interactive-btn-ghost">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.tiktok.com/@techlife_nigeria?_t=ZS-8za5Ezsim7s&_r=1" className="interactive-btn-ghost">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.facebook.com/share/1BFE9YKWWc/?mibextid=wwXIfr" className="interactive-btn-ghost">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.threads.com/@techlife_nigeria?igshid=NTc4MTIwNjQ2YQ==" className="interactive-btn-ghost">
              <i className="fab fa-threads"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContact;