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

  // Team Members Data
  const teamMembers = [
    {
      id: 1,
      name: 'Yusuf Saleh Muhammad',
      position: 'Chief Executive Officer (CEO)',
      image: '/assets/img/team/team_1_1.jpg',
      description: 'A visionary software developer passionate about creating innovative IT solutions. Full-stack developer and cybersecurity expert leading Techlife\'s strategic direction.',
      expertise: ['Software Development', 'Cybersecurity', 'Strategic Leadership', 'Innovation'],
      social: {
        linkedin: 'https://linktr.ee/Techlifeng',
        twitter: 'https://x.com/techlifeng?s=21',
        instagram: 'https://www.instagram.com/m_dalhatu_?igsh=Mmpnd3kzOW42czE2&utm_source=qr'
      }
    },
    {
      id: 2,
      name: 'Muhammad Alhassan',
      position: 'Chief Technology Officer (CTO)',
      image: '/assets/img/team/team_1_2.jpg',
      description: 'Software engineer specializing in full-stack development and data analytics. Drives technological innovation and technical excellence across all projects.',
      expertise: ['Full-Stack Development', 'Data Analytics', 'Technology Innovation', 'System Architecture'],
      social: {
        linkedin: 'https://linktr.ee/Techlifeng',
        twitter: 'https://x.com/techlifeng?s=21',
        github: '#'
      }
    },
    {
      id: 3,
      name: 'Muhammad Mansur Bello',
      position: 'Chief Operating Officer (COO)',
      image: '/assets/img/team/team_1_3.jpg',
      description: 'Results-driven software engineer ensuring projects are completed efficiently and on time. Manages operations and delivery excellence.',
      expertise: ['Project Management', 'Operations', 'Software Engineering', 'Process Optimization'],
      social: {
        linkedin: 'https://linktr.ee/Techlifeng',
        twitter: 'https://x.com/techlifeng?s=21',
        instagram: 'https://www.instagram.com/m_dalhatu_?igsh=Mmpnd3kzOW42czE2&utm_source=qr'
      }
    },
    {
      id: 4,
      name: 'Abduljalil Saleh',
      position: 'HR Manager',
      image: '/assets/img/team/team_1_4.jpg',
      description: 'Business administrator managing human resources and fostering team collaboration. Focuses on organizational development and team growth.',
      expertise: ['Human Resources', 'Team Management', 'Business Administration', 'Organizational Development'],
      social: {
        linkedin: 'https://linktr.ee/Techlifeng',
        twitter: 'https://x.com/techlifeng?s=21',
        facebook: 'https://www.facebook.com/share/1BFE9YKWWc/?mibextid=wwXIfr'
      }
    },
    {
      id: 5,
      name: 'Bello Abdullahi',
      position: 'CFO & Visual Designer',
      image: '/assets/img/team/team_1_5.jpg',
      description: 'Oversees financial operations and leads the creative design team. Ensures fiscal responsibility while driving visual excellence and brand identity.',
      expertise: ['Financial Management', 'Visual Design', 'Creative Direction', 'Brand Development'],
      social: {
        linkedin: 'https://linktr.ee/Techlifeng',
        behance: '#',
        instagram: 'https://www.instagram.com/m_dalhatu_?igsh=Mmpnd3kzOW42czE2&utm_source=qr'
      }
    },
    {
      id: 6,
      name: 'Muhammad Muallayidi Dalhatu',
      position: 'Chief Marketing Officer (CMO)',
      image: '/assets/img/team/team_1_6.jpg',
      description: 'Strategic marketing leader driving brand growth and market expansion. Specializes in digital marketing, brand development, and customer engagement strategies.',
      expertise: ['Marketing Strategy', 'Brand Development', 'Digital Marketing', 'Customer Engagement'],
      social: {
        linkedin: 'https://linktr.ee/Techlifeng',
        twitter: 'https://x.com/techlifeng?s=21',
        instagram: 'https://www.instagram.com/m_dalhatu_?igsh=Mmpnd3kzOW42czE2&utm_source=qr'
      }
    },
    {
      id: 7,
      name: 'Abubakar Ibrahim',
      position: 'Data Analyst',
      image: '/assets/img/team/team_1_7.jpg',
      description: 'Experienced data analyst specializing in business intelligence, data visualization, and insights-driven decision making. Transforms complex data into actionable business strategies.',
      expertise: ['Data Analysis', 'Business Intelligence', 'Data Visualization', 'Statistical Analysis'],
      social: {
        linkedin: 'https://linktr.ee/Techlifeng',
        twitter: 'https://x.com/techlifeng?s=21',
        instagram: 'https://www.instagram.com/m_dalhatu_?igsh=Mmpnd3kzOW42czE2&utm_source=qr'
      }
    }
  ];

  // Portfolio Projects Data
  const portfolioProjects = [
    {
      id: 1,
      title: 'Official Website of Kano State Governor',
      category: 'Government Website',
      image: '/assets/img/project/project_1_1.jpg',
      description: 'Official website for the Kano State Governor featuring modern design, comprehensive information portal, and citizen services.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      client: 'Kano State Government',
      featured: true
    },
    {
      id: 2,
      title: 'Kano Ministry of Youth and Sports Development Portal',
      category: 'Government Website',
      image: '/assets/img/project/project_1_2.jpg',
      description: 'Comprehensive portal for youth and sports development programs, initiatives, and citizen engagement in Kano State.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Digital Ocean'],
      client: 'Ministry of Youth and Sports Development',
      featured: true
    },
    {
      id: 3,
      title: 'Bauchi Ministry of Humanitarian Affairs Platform',
      category: 'Government Website',
      image: '/assets/img/project/project_1_3.jpg',
      description: 'Digital platform for humanitarian affairs coordination, citizen services, and community outreach in Bauchi State.',
      technologies: ['Angular', 'Express.js', 'PostgreSQL', 'Azure'],
      client: 'Bauchi Ministry of Humanitarian Affairs',
      featured: true
    },
    {
      id: 4,
      title: 'Puffin Group - Complete Business Solutions',
      category: 'Corporate Branding & Software',
      image: '/assets/img/project/project_1_4.jpg',
      description: 'Comprehensive branding, software solutions, and visual content creation for Puffin Group business operations and market presence.',
      technologies: ['React Native', 'Django', 'Adobe Creative Suite', 'Docker'],
      client: 'Puffin Group',
      featured: true,
      services: ['Branding', 'Software Solutions', 'Visual Content']
    },
    {
      id: 5,
      title: 'High-Quality Video Production Services',
      category: 'Media & Video Production',
      image: '/assets/img/project/project_1_5.jpg',
      description: 'Professional video production for programs, events, campaigns, and corporate communications with cutting-edge equipment and creative expertise.',
      technologies: ['Adobe Premiere Pro', 'After Effects', '4K Production', 'Motion Graphics'],
      client: 'Various Clients',
      featured: true,
      services: ['Event Coverage', 'Campaign Videos', 'Corporate Content', 'Motion Graphics']
    },
    {
      id: 6,
      title: 'Digital Marketing Campaigns',
      category: 'Media & Video Production',
      image: '/assets/img/project/project_1_6.jpg',
      description: 'Creative digital marketing campaigns with high-quality video content, social media assets, and brand storytelling.',
      technologies: ['Video Production', 'Social Media', 'Content Strategy', 'Brand Design'],
      client: 'Multiple Brands',
      services: ['Campaign Strategy', 'Video Content', 'Social Media', 'Brand Assets']
    }
  ];

  // Achievements Data
  const achievements = [
    {
      icon: '/assets/img/icon/achievement_1.svg',
      title: 'Government Partnerships',
      description: 'Successfully delivered digital solutions for multiple government agencies and ministries.'
    },
    {
      icon: '/assets/img/icon/achievement_2.svg',
      title: 'Corporate Solutions',
      description: 'Comprehensive branding and software solutions for businesses and organizations.'
    },
    {
      icon: '/assets/img/icon/achievement_3.svg',
      title: 'Media Production',
      description: 'High-quality video production for events, campaigns, and corporate communications.'
    },
    {
      icon: '/assets/img/icon/achievement_4.svg',
      title: 'Digital Innovation',
      description: 'Cutting-edge digital solutions that drive growth and innovation.'
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
                  {/* <div className="btn-group">
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
                  </div> */}
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
                      <i className="fa-regular fa-arrow-right text-white"></i>
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
                    className="th-btn text-white"
                  >
                    DISCOVER MORE
                  </Button>
                  <div className="call-btn">
                    <div className="play-btn">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="media-body">
                      <span className="btn-text">Call Us On:</span>
                      <a href="tel:+2349131033131" className="btn-title">
                        +234 913 103 3131
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
                  <Link to={`/service-details/${service.id}`} className="th-btn text-white">
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
              className="th-btn text-white"
            >
              VIEW ALL SERVICES
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="space" id="portfolio-sec" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center">
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <span 
                      className="mask-icon" 
                      data-mask-src="/assets/img/theme-img/title_shape_1.svg"
                    ></span>
                    <ImageWithFallback src={IMAGES.theme.titleShape} alt="shape" />
                  </div>
                  OUR PORTFOLIO
                </span>
                <h2 className="sec-title">
                  Notable <span className="text-theme">Projects</span> & Achievements
                </h2>
                <p className="sec-text">
                  From government websites to corporate solutions and media production, our portfolio demonstrates our commitment 
                  to delivering innovative digital solutions that make a real difference.
                </p>
              </div>
            </div>
          </div>
          
          {/* Portfolio Grid */}
          <div className="row gy-4 mt-4">
            {portfolioProjects.map((project) => (
              <div key={project.id} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100" style={{border: '1px solid #e0e0e0', borderRadius: '10px', overflow: 'hidden'}}>
                  <div className="position-relative" style={{height: '200px', overflow: 'hidden'}}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      style={{width: '100%', height: '100%', objectFit: 'cover'}}
                      onError={(e) => {
                        e.target.src = '/assets/img/project/default-project.jpg';
                      }}
                    />
                    <div className="position-absolute top-0 start-0 p-2">
                      <span 
                        className="badge" 
                        style={{backgroundColor: '#0046ff', color: 'white', fontSize: '11px'}}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <h3 className="card-title h5 mb-2" style={{color: '#001243'}}>
                      {project.title}
                    </h3>
                    <p className="card-text text-muted mb-3" style={{fontSize: '14px', lineHeight: '1.6'}}>
                      {project.description}
                    </p>
                    
                    {/* Client */}
                    <p className="text-primary mb-2" style={{fontSize: '13px', fontWeight: '600'}}>
                      Client: {project.client}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-3">
                      <small className="text-muted d-block mb-1">Technologies:</small>
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index} 
                          className="badge me-1 mb-1" 
                          style={{
                            backgroundColor: 'rgba(0, 18, 67, 0.1)',
                            color: '#001243',
                            border: '1px solid rgba(0, 18, 67, 0.2)',
                            fontSize: '10px'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Services */}
                    {project.services && (
                      <div className="mb-3">
                        <small className="text-muted d-block mb-1">Services:</small>
                        {project.services.slice(0, 2).map((service, index) => (
                          <span 
                            key={index} 
                            className="badge me-1 mb-1" 
                            style={{
                              backgroundColor: 'rgba(0, 70, 255, 0.1)',
                              color: '#0046ff',
                              border: '1px solid rgba(0, 70, 255, 0.2)',
                              fontSize: '10px'
                            }}
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <Link 
                      to={`/project-details/${project.id}`} 
                      className="btn btn-outline-primary btn-sm"
                      style={{fontSize: '12px'}}
                    >
                      View Details <i className="fas fa-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="mt-5">
            <div className="title-area text-center mb-5">
              <span className="sub-title">
                <div className="icon-masking me-2">
                  <span 
                    className="mask-icon" 
                    data-mask-src="/assets/img/theme-img/title_shape_1.svg"
                  ></span>
                  <ImageWithFallback src={IMAGES.theme.titleShape} alt="shape" />
                </div>
                OUR IMPACT
              </span>
              <h2 className="sec-title">
                Key <span className="text-theme">Achievements</span> & Expertise
              </h2>
            </div>
            <div className="row gy-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="col-md-6 col-lg-3 mb-4">
                  <div className="card text-center h-100" style={{border: '1px solid #e0e0e0', borderRadius: '10px', padding: '30px 20px'}}>
                    <div className="mb-3">
                      <div 
                        className="d-inline-flex align-items-center justify-content-center"
                        style={{
                          width: '60px',
                          height: '60px',
                          backgroundColor: 'rgba(0, 70, 255, 0.1)',
                          borderRadius: '50%',
                          color: '#0046ff',
                          fontSize: '24px'
                        }}
                      >
                        <i className={`fas fa-${index === 0 ? 'building' : index === 1 ? 'briefcase' : index === 2 ? 'video' : 'lightbulb'}`}></i>
                      </div>
                    </div>
                    <h3 className="h5 mb-3" style={{color: '#001243', fontWeight: '600'}}>
                      {achievement.title}
                    </h3>
                    <p className="text-muted" style={{fontSize: '14px', lineHeight: '1.6'}}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="space" id="team-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center">
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <span 
                      className="mask-icon" 
                      data-mask-src="/assets/img/theme-img/title_shape_1.svg"
                    ></span>
                    <ImageWithFallback src={IMAGES.theme.titleShape} alt="shape" />
                  </div>
                  OUR TEAM / LEADERSHIP
                </span>
                <h2 className="sec-title">
                  Meet Our <span className="text-theme">Expert</span> Leadership Team
                </h2>
                <p className="sec-text">
                  Our diverse team of technology professionals brings together expertise in software development, 
                  cybersecurity, data analytics, business operations, and creative design to deliver exceptional results and drive innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="row gy-4 mt-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 team-card" style={{border: '1px solid #e0e0e0', borderRadius: '10px'}}>
                  <div className="card-img-top" style={{height: '250px', overflow: 'hidden'}}>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      style={{width: '100%', height: '100%', objectFit: 'cover'}}
                      onError={(e) => {
                        e.target.src = '/assets/img/team/default-avatar.jpg';
                      }}
                    />
                  </div>
                  <div className="card-body p-4">
                    <h3 className="card-title h5 mb-2" style={{color: '#001243'}}>
                      {member.name}
                    </h3>
                    <p className="text-primary mb-3" style={{color: '#0046ff !important', fontWeight: '600'}}>
                      {member.position}
                    </p>
                    <p className="card-text text-muted mb-3" style={{fontSize: '14px', lineHeight: '1.6'}}>
                      {member.description}
                    </p>
                    
                    {/* Social Links */}
                    <div className="d-flex gap-2">
                      {member.social.linkedin && (
                        <a 
                          href={member.social.linkedin} 
                          className="btn btn-sm btn-outline-primary"
                          style={{width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      )}
                      {member.social.twitter && (
                        <a 
                          href={member.social.twitter}
                          className="btn btn-sm btn-outline-primary"
                          style={{width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      )}
                      {member.social.instagram && (
                        <a 
                          href={member.social.instagram}
                          className="btn btn-sm btn-outline-primary"
                          style={{width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      )}
                      {member.social.github && (
                        <a 
                          href={member.social.github}
                          className="btn btn-sm btn-outline-primary"
                          style={{width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      )}
                      {member.social.behance && (
                        <a 
                          href={member.social.behance}
                          className="btn btn-sm btn-outline-primary"
                          style={{width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        >
                          <i className="fab fa-behance"></i>
                        </a>
                      )}
                      {member.social.facebook && (
                        <a 
                          href={member.social.facebook}
                          className="btn btn-sm btn-outline-primary"
                          style={{width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Expertise Overview */}
          <div className="mt-5">
            <div className="text-center mb-5">
              <span className="sub-title">
                <div className="icon-masking me-2">
                  <span 
                    className="mask-icon" 
                    data-mask-src="/assets/img/theme-img/title_shape_1.svg"
                  ></span>
                  <ImageWithFallback src={IMAGES.theme.titleShape} alt="shape" />
                </div>
                COLLECTIVE EXPERTISE
              </span>
              <h2 className="sec-title">
                Our Team's <span className="text-theme">Core</span> Competencies
              </h2>
            </div>
            <div className="row gy-4">
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="card text-center h-100" style={{border: '1px solid #e0e0e0', borderRadius: '10px', padding: '30px 20px'}}>
                  <div className="mb-3">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: 'rgba(0, 70, 255, 0.1)',
                        borderRadius: '50%',
                        color: '#0046ff',
                        fontSize: '24px'
                      }}
                    >
                      <i className="fas fa-code"></i>
                    </div>
                  </div>
                  <h3 className="h6 mb-3" style={{color: '#001243', fontWeight: '600'}}>
                    Software Development
                  </h3>
                  <p className="text-muted" style={{fontSize: '14px', lineHeight: '1.6'}}>
                    Full-stack development, system architecture, and cutting-edge programming solutions.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="card text-center h-100" style={{border: '1px solid #e0e0e0', borderRadius: '10px', padding: '30px 20px'}}>
                  <div className="mb-3">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: 'rgba(0, 70, 255, 0.1)',
                        borderRadius: '50%',
                        color: '#0046ff',
                        fontSize: '24px'
                      }}
                    >
                      <i className="fas fa-shield-alt"></i>
                    </div>
                  </div>
                  <h3 className="h6 mb-3" style={{color: '#001243', fontWeight: '600'}}>
                    Cybersecurity
                  </h3>
                  <p className="text-muted" style={{fontSize: '14px', lineHeight: '1.6'}}>
                    Advanced security protocols, threat assessment, and digital protection strategies.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="card text-center h-100" style={{border: '1px solid #e0e0e0', borderRadius: '10px', padding: '30px 20px'}}>
                  <div className="mb-3">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: 'rgba(0, 70, 255, 0.1)',
                        borderRadius: '50%',
                        color: '#0046ff',
                        fontSize: '24px'
                      }}
                    >
                      <i className="fas fa-chart-line"></i>
                    </div>
                  </div>
                  <h3 className="h6 mb-3" style={{color: '#001243', fontWeight: '600'}}>
                    Data Analytics
                  </h3>
                  <p className="text-muted" style={{fontSize: '14px', lineHeight: '1.6'}}>
                    Business intelligence, data visualization, and insights-driven decision making.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="card text-center h-100" style={{border: '1px solid #e0e0e0', borderRadius: '10px', padding: '30px 20px'}}>
                  <div className="mb-3">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: 'rgba(0, 70, 255, 0.1)',
                        borderRadius: '50%',
                        color: '#0046ff',
                        fontSize: '24px'
                      }}
                    >
                      <i className="fas fa-palette"></i>
                    </div>
                  </div>
                  <h3 className="h6 mb-3" style={{color: '#001243', fontWeight: '600'}}>
                    Creative Design
                  </h3>
                  <p className="text-muted" style={{fontSize: '14px', lineHeight: '1.6'}}>
                    Visual identity, brand development, and innovative design solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="space" id="contact-sec" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center">
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <span 
                      className="mask-icon" 
                      data-mask-src="/assets/img/theme-img/title_shape_1.svg"
                    ></span>
                    <ImageWithFallback src={IMAGES.theme.titleShape} alt="shape" />
                  </div>
                  GET IN TOUCH
                </span>
                <h2 className="sec-title">
                  Ready to Start Your <span className="text-theme">Next Project</span>?
                </h2>
                <p className="sec-text">
                  Let's discuss how we can help transform your business with innovative IT solutions. 
                  Contact us today for a free consultation.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-lg-6 text-center">
              <div className="btn-group">
                <Button 
                  to="/contact" 
                  style="style3"
                  icon="fa-regular fa-arrow-right"
                  className="th-btn text-white"
                >
                  GET FREE CONSULTATION
                </Button>
                <div className="call-btn">
                  <div className="play-btn">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="media-body">
                    <span className="btn-text">Call Us On:</span>
                    <a href="tel:+2349131033131" className="btn-title">
                      +234 913 103 3131
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;