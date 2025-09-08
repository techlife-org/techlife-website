import React, { useState } from 'react';
import Breadcrumb from '../components/Common/Breadcrumb';
import Button from '../components/Common/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <div className="contact-page">
      <Breadcrumb title="Contact Us" />
      
      <div className="space" id="contact-sec">
        <div className="container">
          <div className="row gy-4">
            <div className="col-xl-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div className="media-body">
                  <h4 className="box-title">Our Office Address</h4>
                  <span className="contact-info_text">
                    No 54-B Jaoji Quarters,<br />
                    Kano 700101, Kano State, Nigeria
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="media-body">
                  <h4 className="box-title">Call Us Anytime</h4>
                  <span className="contact-info_text">
                    <a href="tel:+2349131033131">+234 913 103 3131</a>
                    <a href="https://www.techlife.ng">www.techlife.ng</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="media-body">
                  <h4 className="box-title">Send An Email</h4>
                  <span className="contact-info_text">
                    <a href="mailto:info@techlife.ng">info@techlife.ng</a>
                    <a href="https://www.instagram.com/techlife_nigeria">@techlife_nigeria</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-smoke space" data-bg-src="/assets/img/bg/contact_bg_1.png">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="title-area mb-35 text-xl-start text-center">
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <span 
                      className="mask-icon" 
                      data-mask-src="/assets/img/theme-img/title_shape_1.svg"
                    ></span>
                    <img src="/assets/img/theme-img/title_shape_1.svg" alt="shape" />
                  </div>
                  GET IN TOUCH
                </span>
                <h2 className="sec-title">
                  Ready to Get Started? <span className="text-theme">Contact Us!</span>
                </h2>
              </div>
              <form 
                onSubmit={handleSubmit}
                className="contact-form ajax-contact"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                      <i className="fal fa-user"></i>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <i className="fal fa-envelope"></i>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      <i className="fal fa-phone"></i>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                      <i className="fal fa-book"></i>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="Type Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                      <i className="fal fa-comment"></i>
                    </div>
                  </div>
                  <div className="form-btn col-12">
                    <Button 
                      type="submit"
                      icon="fa-regular fa-arrow-right"
                    >
                      Send Message
                    </Button>
                  </div>
                </div>
                <p className="form-messages mb-0 mt-3"></p>
              </form>
            </div>
            <div className="col-xl-4 mt-40 mt-xl-0">
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.8234567890123!2d8.5177!3d12.0022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAwJzA4LjAiTiA4wrAzMScwNC4wIkU!5e0!3m2!1sen!2sng!4v1651028958211!5m2!1sen!2sng"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Techlife Office Location - Kano, Nigeria"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;