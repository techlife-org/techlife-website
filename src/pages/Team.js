import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Common/Breadcrumb';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Yusuf Saleh Muhammad',
      position: 'Chief Executive Officer (CEO)',
      image: '/assets/img/team/team_1_1.jpg',
      description: 'A visionary software developer passionate about creating innovative IT solutions. Full-stack developer and cybersecurity expert leading Techlife\'s strategic direction.',
      expertise: ['Software Development', 'Cybersecurity', 'Strategic Leadership', 'Innovation'],
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
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
        linkedin: '#',
        twitter: '#',
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
        linkedin: '#',
        twitter: '#',
        instagram: '#'
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
        linkedin: '#',
        twitter: '#',
        facebook: '#'
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
        linkedin: '#',
        behance: '#',
        instagram: '#'
      }
    },
    {
      id: 6,
      name: 'CMO - [To Be Determined]',
      position: 'Chief Marketing Officer (CMO)',
      image: '/assets/img/team/team_1_6.jpg',
      description: 'Responsible for marketing strategies, brand growth, and outreach initiatives. Will lead efforts to expand market presence and drive business growth.',
      expertise: ['Marketing Strategy', 'Brand Growth', 'Outreach Initiatives', 'Market Expansion'],
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    }
  ];

  return (
    <div className="team-page">
      <Breadcrumb title="Our Team" />
      
      {/* Team Introduction */}
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
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="space-bottom">
        <div className="container">
          <div className="row gy-4">
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
                    
                    {/* Expertise Tags */}
                    {member.expertise && (
                      <div className="mb-3">
                        {member.expertise.slice(0, 3).map((skill, index) => (
                          <span 
                            key={index} 
                            className="badge me-1 mb-1" 
                            style={{
                              backgroundColor: 'rgba(0, 70, 255, 0.1)',
                              color: '#0046ff',
                              border: '1px solid rgba(0, 70, 255, 0.2)',
                              fontSize: '11px'
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                    
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
        </div>
      </div>

      {/* Leadership Qualities */}
      <div className="py-5" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mb-4">
                <span className="badge mb-3" style={{backgroundColor: 'rgba(0, 70, 255, 0.1)', color: '#0046ff', fontSize: '12px', padding: '8px 16px'}}>
                  LEADERSHIP APPROACH
                </span>
                <h2 className="h3 mb-3" style={{color: '#001243'}}>
                  What Makes Our <span style={{color: '#0046ff'}}>Team</span> Exceptional
                </h2>
                <p className="text-muted mb-4">
                  Our leadership team combines technical expertise with strategic vision, ensuring that every project 
                  benefits from diverse perspectives, innovative solutions, and proven industry experience.
                </p>
              </div>
              <div>
                <div className="d-flex mb-4">
                  <div 
                    className="d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#0046ff',
                      color: 'white',
                      borderRadius: '50%',
                      fontSize: '16px'
                    }}
                  >
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-2" style={{color: '#001243', fontWeight: '600'}}>
                      Technical Excellence
                    </h3>
                    <p className="text-muted mb-0" style={{fontSize: '14px', lineHeight: '1.6'}}>
                      Deep expertise in software development, cybersecurity, data analytics, and emerging technologies.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div 
                    className="d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#0046ff',
                      color: 'white',
                      borderRadius: '50%',
                      fontSize: '16px'
                    }}
                  >
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-2" style={{color: '#001243', fontWeight: '600'}}>
                      Strategic Vision
                    </h3>
                    <p className="text-muted mb-0" style={{fontSize: '14px', lineHeight: '1.6'}}>
                      Forward-thinking leadership that drives innovation and positions Techlife at the forefront of technology.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div 
                    className="d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#0046ff',
                      color: 'white',
                      borderRadius: '50%',
                      fontSize: '16px'
                    }}
                  >
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <h3 className="h6 mb-2" style={{color: '#001243', fontWeight: '600'}}>
                      Collaborative Culture
                    </h3>
                    <p className="text-muted mb-0" style={{fontSize: '14px', lineHeight: '1.6'}}>
                      Fostering teamwork, open communication, and continuous learning to deliver exceptional results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <img 
                  src="/assets/img/normal/about_3_1.jpg" 
                  alt="Team" 
                  className="img-fluid rounded"
                  style={{maxWidth: '100%', height: 'auto'}}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Expertise Overview */}
      <div className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge mb-3" style={{backgroundColor: 'rgba(0, 70, 255, 0.1)', color: '#0046ff', fontSize: '12px', padding: '8px 16px'}}>
              COLLECTIVE EXPERTISE
            </span>
            <h2 className="h3" style={{color: '#001243'}}>
              Our Team's <span style={{color: '#0046ff'}}>Core</span> Competencies
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
    </div>
  );
};

export default Team;