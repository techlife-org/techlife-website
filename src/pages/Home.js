import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Common/Button';
import ImageWithFallback from '../components/Common/ImageWithFallback';
import HeroBackground from '../components/Common/HeroBackground';
import { IMAGES } from '../utils/imagePaths';

const Home = () => {
  const heroSlides = [
    {
      id: 1,
      bgImage: IMAGES.hero.bg1,
      subtitle: 'SECURE & IT SERVICES',
      title: 'Perfect IT Solution',
      title2: 'For Your Business',
      description: 'Energistically harness ubiquitous imperatives without state of the art collaboration and idea-sharing. Monotonectally parallel task cross-unit experiences and front-end.'
    }
  ];

  const services = [
    {
      id: 1,
      icon: IMAGES.serviceIcons.featured1,
      title: 'IT Management',
      description: 'Conveniently promote transparent materials and stand-alone strategic theme areas.'
    },
    {
      id: 2,
      icon: IMAGES.serviceIcons.featured2,
      title: 'Cloud Computing',
      description: 'Conveniently promote transparent materials and stand-alone strategic theme areas.'
    },
    {
      id: 3,
      icon: IMAGES.serviceIcons.featured3,
      title: 'Backup & Recovery',
      description: 'Conveniently promote transparent materials and stand-alone strategic theme areas.'
    },
    {
      id: 4,
      icon: IMAGES.serviceIcons.featured4,
      title: 'Machine Learning',
      description: 'Conveniently promote transparent materials and stand-alone strategic theme areas.'
    }
  ];

  const mainServices = [
    {
      id: 1,
      number: '01',
      icon: IMAGES.serviceIcons.card1,
      title: 'Web Development',
      description: 'Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.'
    },
    {
      id: 2,
      number: '02',
      icon: IMAGES.serviceIcons.card2,
      title: 'UI/UX Design',
      description: 'Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.'
    },
    {
      id: 3,
      number: '03',
      icon: IMAGES.serviceIcons.card3,
      title: 'Digital Marketing',
      description: 'Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.'
    },
    {
      id: 4,
      number: '04',
      icon: IMAGES.serviceIcons.card4,
      title: 'Business Analysis',
      description: 'Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.'
    },
    {
      id: 5,
      number: '05',
      icon: IMAGES.serviceIcons.card5,
      title: 'Software Services',
      description: 'Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.'
    },
    {
      id: 6,
      number: '06',
      icon: IMAGES.serviceIcons.card6,
      title: 'Machine Learning',
      description: 'Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="th-hero-wrapper hero-2" id="hero">
        <div className="slider-area">
          <div className="th-hero-slide">
            <HeroBackground 
              backgroundImage={heroSlides[0].bgImage}
              fallbackImage={IMAGES.hero.bg2}
            >
              <div className="container">
                <div className="hero-style2">
                  <div className="ripple-shape">
                    <span className="ripple-1"></span>
                    <span className="ripple-2"></span>
                    <span className="ripple-3"></span>
                    <span className="ripple-4"></span>
                    <span className="ripple-5"></span>
                    <span className="ripple-6"></span>
                  </div>
                  <span className="hero-subtitle">
                    {heroSlides[0].subtitle}
                  </span>
                  <h1 className="hero-title">
                    {heroSlides[0].title}
                  </h1>
                  <h1 className="hero-title">
                    {heroSlides[0].title2}
                  </h1>
                  <p className="hero-text">
                    {heroSlides[0].description}
                  </p>
                  <div className="btn-group">
                    <Button 
                      to="/about" 
                      style="style3"
                      icon="fa-regular fa-arrow-right"
                    >
                      DISCOVER MORE
                    </Button>
                    <Button 
                      to="/contact" 
                      style="style2"
                      icon="fa-regular fa-arrow-right"
                    >
                      CONTACT US
                    </Button>
                  </div>
                </div>
              </div>
            </HeroBackground>
          </div>
        </div>
        <div className="hero-shape1"></div>
        <div className="hero-shape2">
          <ImageWithFallback src={IMAGES.hero.shape2} alt="shape" />
        </div>
        <div className="hero-shape3">
          <ImageWithFallback src={IMAGES.hero.shape3} alt="shape" />
        </div>
      </div>

      {/* Featured Services Section */}
      <section className="space-top">
        <div className="container z-index-common">
          <div className="row gy-4">
            {services.map((service) => (
              <div key={service.id} className="col-md-6 col-lg-3">
                <div className="service-featured">
                  <div className="service-featured_content">
                    <div className="shape-icon">
                      <ImageWithFallback src={service.icon} alt="Icon" />
                      <span className="dots"></span>
                    </div>
                    <h3 className="box-title">
                      <Link to={`/service-details/${service.id}`}>
                        {service.title}
                      </Link>
                    </h3>
                    <p className="service-featured_text">
                      {service.description}
                    </p>
                    <Link to={`/service-details/${service.id}`} className="icon-btn">
                      <i className="fa-regular fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="space" id="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 mb-30 mb-xl-0">
              <div className="img-box1">
                <div className="img1">
                  <ImageWithFallback src={IMAGES.about.main} alt="About" />
                </div>
                <div className="shape1">
                  <ImageWithFallback src={IMAGES.about.shape} alt="shape" />
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
                      <ImageWithFallback src={IMAGES.theme.titleShape} alt="shape" />
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
                      <ImageWithFallback src={IMAGES.features.icon1} alt="Icon" />
                    </div>
                    <div className="media-body">
                      <h3 className="about-feature_title">Certified Company</h3>
                      <p className="about-feature_text">Best Provide Skills Services</p>
                    </div>
                  </div>
                  <div className="about-feature">
                    <div className="about-feature_icon">
                      <ImageWithFallback src={IMAGES.features.icon2} alt="Icon" />
                    </div>
                    <div className="media-body">
                      <h3 className="about-feature_title">Expert Team</h3>
                      <p className="about-feature_text">100% Expert Team</p>
                    </div>
                  </div>
                </div>
                <div className="btn-group">
                  <Button 
                    to="/about"
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

      {/* Services Section */}
      <section 
        className="service-sec space" 
        id="service-sec"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-7 col-sm-10 px-xl-4">
              <div className="title-area text-center">
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <span 
                      className="mask-icon" 
                      data-mask-src="/assets/img/theme-img/title_shape_1.svg"
                    ></span>
                    <ImageWithFallback src={IMAGES.theme.titleShape} alt="shape" />
                  </div>
                  OUR SERVICES
                </span>
                <h2 className="sec-title">
                  We Provide Exclusive <span className="text-theme">Service</span> For Your Business
                </h2>
              </div>
            </div>
          </div>
          <div className="row gy-4">
            {mainServices.map((service) => (
              <div key={service.id} className="col-md-6 col-xl-4">
                <div className="service-card">
                  <div className="service-card_number">{service.number}</div>
                  <div className="shape-icon">
                    <ImageWithFallback src={service.icon} alt="Icon" />
                    <span className="dots"></span>
                  </div>
                  <h3 className="box-title">
                    <Link to={`/service-details/${service.id}`}>
                      {service.title}
                    </Link>
                  </h3>
                  <p className="service-card_text">
                    {service.description}
                  </p>
                  <Link to={`/service-details/${service.id}`} className="th-btn">
                    Read More
                    <i className="fa-regular fa-arrow-right ms-2"></i>
                  </Link>
                  <div className="bg-shape">
                    <img src="/assets/img/bg/service_card_bg.png" alt="bg" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Button 
              to="/services"
              icon="fa-regular fa-arrow-right"
            >
              VIEW ALL SERVICES
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;