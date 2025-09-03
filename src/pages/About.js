import React from 'react';
import Breadcrumb from '../components/Common/Breadcrumb';
import Button from '../components/Common/Button';

const About = () => {
  return (
    <div className="about-page">
      <Breadcrumb title="About Us" />
      
      <div className="overflow-hidden space" id="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 mb-30 mb-xl-0">
              <div className="img-box1">
                <div className="img1">
                  <img src="/assets/img/normal/about_1_1.png" alt="About" />
                </div>
                <div className="shape1">
                  <img src="/assets/img/normal/about_shape_1.png" alt="shape" />
                </div>
                <div className="year-counter">
                  <h3 className="year-counter_number">
                    <span className="counter-number">25</span>
                  </h3>
                  <p className="year-counter_text">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="ps-xxl-4 ms-xl-3">
                <div className="title-area mb-35">
                  <span className="sub-title">
                    <div className="icon-masking me-2">
                      <span 
                        className="mask-icon" 
                        data-mask-src="/assets/img/theme-img/title_shape_1.svg"
                      ></span>
                      <img src="/assets/img/theme-img/title_shape_1.svg" alt="shape" />
                    </div>
                    About Us
                  </span>
                  <h2 className="sec-title">
                    We Are Increasing Business Success With{' '}
                    <span className="text-theme">IT Solution</span>
                  </h2>
                </div>
                <p className="mt-n2 mb-25">
                  Collaboratively envisioneer user friendly supply chains and cross unit 
                  imperative. Authoritativel fabricate competitive resource and holistic 
                  synergy. Uniquely generate efficient schemas before future.
                </p>
                <div className="about-feature-wrap">
                  <div className="about-feature">
                    <div className="about-feature_icon">
                      <img src="/assets/img/icon/about_feature_1_1.svg" alt="Icon" />
                    </div>
                    <div className="media-body">
                      <h3 className="about-feature_title">Certified Company</h3>
                      <p className="about-feature_text">Best Provide Skills Services</p>
                    </div>
                  </div>
                  <div className="about-feature">
                    <div className="about-feature_icon">
                      <img src="/assets/img/icon/about_feature_1_2.svg" alt="Icon" />
                    </div>
                    <div className="media-body">
                      <h3 className="about-feature_title">Expert Team</h3>
                      <p className="about-feature_text">100% Expert Team</p>
                    </div>
                  </div>
                </div>
                <div className="btn-group">
                  <Button 
                    to="/contact"
                    icon="fa-regular fa-arrow-right"
                  >
                    DISCOVER MORE
                  </Button>
                  <div className="call-btn">
                    <div className="play-btn">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="media-body">
                      <span className="btn-text">Call Us On:</span>
                      <a href="tel:+19088000393" className="btn-title">
                        +190-8800-0393
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div className="bg-theme space-extra" data-bg-src="/assets/img/bg/counter_bg_1.png">
        <div className="container py-2">
          <div className="row gy-40 justify-content-between">
            <div className="col-6 col-lg-auto">
              <div className="counter-card">
                <div className="counter-card_icon">
                  <img src="/assets/img/icon/counter_1_1.svg" alt="Icon" />
                </div>
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <span className="counter-number">986</span>+
                  </h2>
                  <p className="counter-card_text">Finished Project</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-auto">
              <div className="counter-card">
                <div className="counter-card_icon">
                  <img src="/assets/img/icon/counter_1_2.svg" alt="Icon" />
                </div>
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <span className="counter-number">896</span>+
                  </h2>
                  <p className="counter-card_text">Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-auto">
              <div className="counter-card">
                <div className="counter-card_icon">
                  <img src="/assets/img/icon/counter_1_3.svg" alt="Icon" />
                </div>
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <span className="counter-number">396</span>+
                  </h2>
                  <p className="counter-card_text">Skilled Experts</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-auto">
              <div className="counter-card">
                <div className="counter-card_icon">
                  <img src="/assets/img/icon/counter_1_4.svg" alt="Icon" />
                </div>
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <span className="counter-number">496</span>+
                  </h2>
                  <p className="counter-card_text">Honorable Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;