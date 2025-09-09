import React from 'react';
import { Link } from 'react-router-dom';

const EnhancedPortfolio = () => {
  const portfolioProjects = [
    {
      id: 1,
      title: 'Official Website of Kano State Governor',
      category: 'Government Website',
      image: '/assets/img/project/project_1_1.jpg',
      description: 'Modern, responsive government portal with citizen services integration and comprehensive information architecture.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      client: 'Kano State Government',
      featured: true
    },
    {
      id: 2,
      title: 'Youth & Sports Development Portal',
      category: 'Government Platform',
      image: '/assets/img/project/project_1_2.jpg',
      description: 'Comprehensive digital platform for youth engagement, sports programs, and community development initiatives.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Digital Ocean'],
      client: 'Ministry of Youth and Sports',
      featured: true
    },
    {
      id: 3,
      title: 'Humanitarian Affairs Platform',
      category: 'Social Impact',
      image: '/assets/img/project/project_1_3.jpg',
      description: 'Digital coordination platform for humanitarian services, community outreach, and citizen engagement.',
      technologies: ['Angular', 'Express.js', 'PostgreSQL', 'Azure'],
      client: 'Bauchi Ministry of Humanitarian Affairs',
      featured: true
    },
    {
      id: 4,
      title: 'Puffin Group Business Solutions',
      category: 'Corporate Branding',
      image: '/assets/img/project/project_1_4.jpg',
      description: 'Complete digital transformation including branding, software solutions, and visual content creation.',
      technologies: ['React Native', 'Django', 'Adobe Creative Suite', 'Docker'],
      client: 'Puffin Group',
      featured: true
    },
    {
      id: 5,
      title: 'Professional Video Production',
      category: 'Media Production',
      image: '/assets/img/project/project_1_5.jpg',
      description: 'High-quality video production services for events, campaigns, and corporate communications.',
      technologies: ['Adobe Premiere Pro', 'After Effects', '4K Production', 'Motion Graphics'],
      client: 'Various Clients',
      featured: true
    },
    {
      id: 6,
      title: 'Digital Marketing Campaigns',
      category: 'Marketing Strategy',
      image: '/assets/img/project/project_1_6.jpg',
      description: 'Creative digital marketing campaigns with engaging video content and strategic brand storytelling.',
      technologies: ['Video Production', 'Social Media', 'Content Strategy', 'Brand Design'],
      client: 'Multiple Brands',
      featured: true
    }
  ];

  return (
    <section className="modern-section py-5">
      <div className="container">
        <div className="modern-section-header" data-aos="fade-up">
          <div className="modern-section-subtitle">Our Portfolio</div>
          <h2 className="modern-section-title">
            Notable <span className="text-theme">Projects</span> & Achievements
          </h2>
          <p className="modern-section-description">
            From government websites to corporate solutions and media production, 
            our portfolio demonstrates our commitment to delivering innovative digital solutions.
          </p>
        </div>
        
        <div className="enhanced-portfolio-grid">
          {portfolioProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="enhanced-portfolio-card"
              data-aos="flip-left"
              data-aos-delay={index * 100}
            >
              <div className="enhanced-portfolio-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = '/assets/img/project/default-project.jpg';
                  }}
                />
                <div className="enhanced-portfolio-overlay">
                  <Link 
                    to={`/project-details/${project.id}`} 
                    className="enhanced-portfolio-view-btn"
                  >
                    <i className="fas fa-eye"></i>
                  </Link>
                </div>
                <div className="enhanced-portfolio-category">
                  {project.category}
                </div>
              </div>
              
              <div className="enhanced-portfolio-content">
                <h3 className="enhanced-portfolio-title">
                  <Link to={`/project-details/${project.id}`}>
                    {project.title}
                  </Link>
                </h3>
                
                <p className="enhanced-portfolio-description">
                  {project.description}
                </p>
                
                <div className="enhanced-portfolio-tech">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="enhanced-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="enhanced-portfolio-meta">
                  <div className="enhanced-portfolio-client">
                    {project.client}
                  </div>
                  <Link 
                    to={`/project-details/${project.id}`} 
                    className="interactive-link-arrow"
                  >
                    View Details
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="600">
          <Link to="/projects" className="interactive-btn">
            View All Projects
            <i className="fas fa-arrow-right ms-2 interactive-btn-icon"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnhancedPortfolio;