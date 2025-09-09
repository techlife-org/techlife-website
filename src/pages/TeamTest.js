import React from 'react';
import Breadcrumb from '../components/Common/Breadcrumb';

const TeamTest = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Yusuf Saleh Muhammad',
      position: 'Chief Executive Officer (CEO)',
      image: '/assets/img/team/team_1_1.jpg',
      description: 'A visionary software developer passionate about creating innovative IT solutions.',
      expertise: ['Software Development', 'Cybersecurity', 'Strategic Leadership'],
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
      description: 'Software engineer specializing in full-stack development and data analytics.',
      expertise: ['Full-Stack Development', 'Data Analytics', 'Technology Innovation'],
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
      description: 'Results-driven software engineer ensuring projects are completed efficiently.',
      expertise: ['Project Management', 'Operations', 'Software Engineering'],
      social: {
        linkedin: 'https://linktr.ee/Techlifeng',
        twitter: 'https://x.com/techlifeng?s=21',
        instagram: 'https://www.instagram.com/m_dalhatu_?igsh=Mmpnd3kzOW42czE2&utm_source=qr'
      }
    },
    {
      id: 4,
      name: 'Muhammad Muallayidi Dalhatu',
      position: 'Chief Marketing Officer (CMO)',
      image: '/assets/img/team/team_1_6.jpg',
      description: 'Strategic marketing leader driving brand growth and market expansion. Specializes in digital marketing and customer engagement.',
      expertise: ['Marketing Strategy', 'Brand Development', 'Digital Marketing'],
      social: {
        linkedin: 'https://linktr.ee/Techlifeng',
        twitter: 'https://x.com/techlifeng?s=21',
        instagram: 'https://www.instagram.com/m_dalhatu_?igsh=Mmpnd3kzOW42czE2&utm_source=qr'
      }
    },
    {
      id: 5,
      name: 'Abubakar Ibrahim',
      position: 'Data Analyst',
      image: '/assets/img/team/team_1_7.jpg',
      description: 'Experienced data analyst specializing in business intelligence and data visualization. Transforms data into actionable insights.',
      expertise: ['Data Analysis', 'Business Intelligence', 'Data Visualization'],
      social: {
        linkedin: 'https://linktr.ee/Techlifeng',
        twitter: 'https://x.com/techlifeng?s=21',
        instagram: 'https://www.instagram.com/m_dalhatu_?igsh=Mmpnd3kzOW42czE2&utm_source=qr'
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
                  cybersecurity, data analytics, business operations, and creative design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Grid Test */}
      <div className="space-bottom">
        <div className="container">
          <h3 className="text-center mb-4" style={{color: 'red'}}>TESTING: Simple Grid Layout</h3>
          <div className="row gy-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100" style={{border: '2px solid red', borderRadius: '10px'}}>
                  <div className="card-img-top" style={{height: '250px', overflow: 'hidden', backgroundColor: '#f0f0f0'}}>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      style={{width: '100%', height: '100%', objectFit: 'cover'}}
                      onError={(e) => {
                        e.target.style.backgroundColor = '#ddd';
                        e.target.alt = 'Image not found';
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamTest;