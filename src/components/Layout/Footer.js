import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-wrapper footer-layout1">
      <div className="footer-top">
        <div className="logo-bg"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3">
              <div className="footer-logo">
                <Link className="icon-masking" to="/">
                  <span data-mask-src="/assets/img/logo-white.svg" className="mask-icon"></span>
                  <img src="/assets/img/logo-white.svg" alt="Webteck" />
                </Link>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="footer-contact-wrap">
                <div className="footer-contact">
                  <div className="footer-contact_icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="media-body">
                    <span className="footer-contact_text">Quick Call Us:</span>
                    <a href="tel:+19088000393" className="footer-contact_link">
                      +190-8800-0393
                    </a>
                  </div>
                </div>
                <div className="footer-contact">
                  <div className="footer-contact_icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="media-body">
                    <span className="footer-contact_text">Mail Us On:</span>
                    <a href="mailto:info@webteck.com" className="footer-contact_link">
                      info@webteck.com
                    </a>
                  </div>
                </div>
                <div className="footer-contact">
                  <div className="footer-contact_icon">
                    <i className="fas fa-location-dot"></i>
                  </div>
                  <div className="media-body">
                    <span className="footer-contact_text">Visit Location:</span>
                    <a href="https://www.google.com/maps" className="footer-contact_link">
                      54 Flemington, USA
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xxl-3 col-xl-4">
              <div className="widget footer-widget">
                <h3 className="widget_title">About Company</h3>
                <div className="th-widget-about">
                  <p className="about-text">
                    Professionally redefine transparent ROI through low-risk high-yield imperatives. 
                    Progressively create empowered. cost effective users via team driven.
                  </p>
                  <div className="th-social">
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.whatsapp.com/">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://www.youtube.com/">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/team">Meet Our Team</Link></li>
                    <li><Link to="/projects">Our Projects</Link></li>
                    <li><Link to="/faq">Help & FAQs</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">IT SERVICES</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><Link to="/service-details/1">Web Development</Link></li>
                    <li><Link to="/service-details/2">Business Development</Link></li>
                    <li><Link to="/service-details/3">Product Management</Link></li>
                    <li><Link to="/service-details/4">UI/UX Design</Link></li>
                    <li><Link to="/service-details/5">Cloud services</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Recent Posts</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-img">
                      <Link to="/blog-details/1">
                        <img src="/assets/img/blog/recent-post-2-1.jpg" alt="Blog Image" />
                      </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" to="/blog-details/1">
                          Unsatiable entreaties may collecting Power.
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to="/blog">
                          <i className="fal fa-calendar-days"></i>21 June, 2025
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                      <Link to="/blog-details/2">
                        <img src="/assets/img/blog/recent-post-2-2.jpg" alt="Blog Image" />
                      </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" to="/blog-details/2">
                          Regional Manager limited time management.
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to="/blog">
                          <i className="fal fa-calendar-days"></i>22 June, 2025
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-wrap bg-title">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <p className="copyright-text">
                Copyright <i className="fal fa-copyright"></i> 2025{' '}
                <a href="https://themeforest.net/user/themeholy">Themeholy</a>. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 text-end d-none d-lg-block">
              <div className="footer-links">
                <ul>
                  <li><Link to="/about">Terms & Condition</Link></li>
                  <li><Link to="/about">Careers</Link></li>
                  <li><Link to="/about">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shape-left">
        <img src="/assets/img/shape/footer_shape_2.svg" alt="shape" />
      </div>
      <div className="shape-right">
        <div className="particle-1" id="particle-5"></div>
      </div>
    </footer>
  );
};

export default Footer;