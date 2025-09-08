import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Common/Breadcrumb';

const Projects = () => {
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

  return (
    <div className="projects-page">
      <Breadcrumb title="Our Portfolio" />
      
      {/* Portfolio Introduction */}
      <div className="space">
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
                    <img src="/assets/img/theme-img/title_shape_1.svg" alt="shape" />
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
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="space-bottom">
        <div className="container">
          <div className="row gy-4">
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
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-smoke space">
        <div className="container">
          <div className="title-area text-center mb-5">
            <span className="sub-title">
              <div className="icon-masking me-2">
                <span 
                  className="mask-icon" 
                  data-mask-src="/assets/img/theme-img/title_shape_1.svg"
                ></span>
                <img src="/assets/img/theme-img/title_shape_1.svg" alt="shape" />
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

      {/* Portfolio Categories */}
      <div className="space">
        <div className="container">
          <div className="title-area text-center mb-5">
            <span className="sub-title">
              <div className="icon-masking me-2">
                <span 
                  className="mask-icon" 
                  data-mask-src="/assets/img/theme-img/title_shape_1.svg"
                ></span>
                <img src="/assets/img/theme-img/title_shape_1.svg" alt="shape" />
              </div>
              PROJECT CATEGORIES
            </span>
            <h2 className="sec-title">
              Diverse <span className="text-theme">Project</span> Portfolio
            </h2>
          </div>
          <div className="row gy-4">
            <div className="col-lg-6 mb-4">
              <div className="card h-100" style={{border: '1px solid #e0e0e0', borderRadius: '10px', padding: '30px'}}>
                <h3 className="h5 mb-3" style={{color: '#001243', fontWeight: '600', paddingBottom: '10px', borderBottom: '2px solid #0046ff'}}>
                  Government Websites
                </h3>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2" style={{padding: '8px 0', fontSize: '14px', lineHeight: '1.6'}}>
                    <i className="fas fa-check-circle me-2" style={{color: '#0046ff'}}></i>
                    <strong>Official Website of Kano State Governor</strong>
                  </li>
                  <li className="mb-2" style={{padding: '8px 0', fontSize: '14px', lineHeight: '1.6'}}>
                    <i className="fas fa-check-circle me-2" style={{color: '#0046ff'}}></i>
                    <strong>Kano Ministry of Youth and Sports Development</strong> portal
                  </li>
                  <li className="mb-2" style={{padding: '8px 0', fontSize: '14px', lineHeight: '1.6'}}>
                    <i className="fas fa-check-circle me-2" style={{color: '#0046ff'}}></i>
                    <strong>Bauchi Ministry of Humanitarian Affairs</strong> platform
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card h-100" style={{border: '1px solid #e0e0e0', borderRadius: '10px', padding: '30px'}}>
                <h3 className="h5 mb-3" style={{color: '#001243', fontWeight: '600', paddingBottom: '10px', borderBottom: '2px solid #0046ff'}}>
                  Corporate Branding & Software Solutions
                </h3>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2" style={{padding: '8px 0', fontSize: '14px', lineHeight: '1.6'}}>
                    <i className="fas fa-check-circle me-2" style={{color: '#0046ff'}}></i>
                    <strong>Puffin Group</strong> – Branding, software solutions, and visual content
                  </li>
                  <li className="mb-2" style={{padding: '8px 0', fontSize: '14px', lineHeight: '1.6'}}>
                    <i className="fas fa-check-circle me-2" style={{color: '#0046ff'}}></i>
                    Custom Business Applications
                  </li>
                  <li className="mb-2" style={{padding: '8px 0', fontSize: '14px', lineHeight: '1.6'}}>
                    <i className="fas fa-check-circle me-2" style={{color: '#0046ff'}}></i>
                    Enterprise Resource Planning Systems
                  </li>
                  <li className="mb-2" style={{padding: '8px 0', fontSize: '14px', lineHeight: '1.6'}}>
                    <i className="fas fa-check-circle me-2" style={{color: '#0046ff'}}></i>
                    Visual Identity & Brand Development
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card h-100" style={{border: '1px solid #e0e0e0', borderRadius: '10px', padding: '30px'}}>
                <h3 className="h5 mb-3" style={{color: '#001243', fontWeight: '600', paddingBottom: '10px', borderBottom: '2px solid #0046ff'}}>
                  Media & Video Production
                </h3>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2" style={{padding: '8px 0', fontSize: '14px', lineHeight: '1.6'}}>
                    <i className="fas fa-check-circle me-2" style={{color: '#0046ff'}}></i>
                    <strong>High-quality videos</strong> for programs, events, and campaigns
                  </li>
                  <li className="mb-2" style={{padding: '8px 0', fontSize: '14px', lineHeight: '1.6'}}>
                    <i className="fas fa-check-circle me-2" style={{color: '#0046ff'}}></i>
                    Professional event coverage and documentation
                  </li>
                  <li className="mb-2" style={{padding: '8px 0', fontSize: '14px', lineHeight: '1.6'}}>
                    <i className="fas fa-check-circle me-2" style={{color: '#0046ff'}}></i>
                    Corporate branding and visual content creation
                  </li>
                  <li className="mb-2" style={{padding: '8px 0', fontSize: '14px', lineHeight: '1.6'}}>
                    <i className="fas fa-check-circle me-2" style={{color: '#0046ff'}}></i>
                    Motion graphics and animation services
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card h-100" style={{border: '1px solid #e0e0e0', borderRadius: '10px', padding: '30px'}}>
                <h3 className="h5 mb-3" style={{color: '#001243', fontWeight: '600', paddingBottom: '10px', borderBottom: '2px solid #0046ff'}}>
                  Digital Solutions & Innovation
                </h3>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2" style={{padding: '8px 0', fontSize: '14px', lineHeight: '1.6'}}>
                    <i className="fas fa-check-circle me-2" style={{color: '#0046ff'}}></i>
                    Technology consultation and advisory services
                  </li>
                  <li className="mb-2" style={{padding: '8px 0', fontSize: '14px', lineHeight: '1.6'}}>
                    <i className="fas fa-check-circle me-2" style={{color: '#0046ff'}}></i>
                    Digital transformation initiatives
                  </li>
                  <li className="mb-2" style={{padding: '8px 0', fontSize: '14px', lineHeight: '1.6'}}>
                    <i className="fas fa-check-circle me-2" style={{color: '#0046ff'}}></i>
                    Startup incubation and development
                  </li>
                  <li className="mb-2" style={{padding: '8px 0', fontSize: '14px', lineHeight: '1.6'}}>
                    <i className="fas fa-check-circle me-2" style={{color: '#0046ff'}}></i>
                    Innovation workshops and training
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;