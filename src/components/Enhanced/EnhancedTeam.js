import React from 'react';
import { Link } from 'react-router-dom';

const EnhancedTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Yusuf Saleh Muhammad',
      position: 'Chief Executive Officer (CEO)',
      image: '/assets/img/team/team_1_1.jpg',
      description: 'Visionary software developer passionate about creating innovative IT solutions. Full-stack developer and cybersecurity expert.',
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
      description: 'Software engineer specializing in full-stack development and data analytics. Drives technological innovation.',
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
      description: 'Results-driven software engineer ensuring projects are completed efficiently and on time.',
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
      description: 'Business administrator managing human resources and fostering team collaboration.',
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
      description: 'Oversees financial operations and leads the creative design team with expertise in visual excellence.',
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

  const coreCompetencies = [
    {
      icon: 'fas fa-code',
      title: 'Software Development',
      description: 'Full-stack development, system architecture, and cutting-edge programming solutions.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Cybersecurity',
      description: 'Advanced security protocols, threat assessment, and digital protection strategies.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Data Analytics',
      description: 'Business intelligence, data visualization, and insights-driven decision making.'
    },
    {
      icon: 'fas fa-palette',
      title: 'Creative Design',
      description: 'Visual identity, brand development, and innovative design solutions.'
    }
  ];

  return (
    <section className="modern-section py-5" style={{backgroundColor: '#f8faff'}}>
      <div className="container">
        <div className="modern-section-header" data-aos="fade-up">
          <div className="modern-section-subtitle">Our Team</div>
          <h2 className="modern-section-title">
            Meet Our <span className="text-theme">Expert</span> Leadership Team
          </h2>
          <p className="modern-section-description">
            Our diverse team of technology professionals brings together expertise in software development, 
            cybersecurity, data analytics, and creative design to deliver exceptional results.
          </p>
        </div>
        
        <div className="enhanced-team-grid">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className="enhanced-team-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="enhanced-team-image">
                <img 
                  src={member.image} 
                  alt={member.name}
                  onError={(e) => {
                    e.target.src = '/assets/img/team/default-avatar.jpg';
                  }}
                />
                <div className="enhanced-team-social">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="enhanced-team-social-link">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="enhanced-team-social-link">
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                  {member.social.instagram && (
                    <a href={member.social.instagram} className="enhanced-team-social-link">
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="enhanced-team-social-link">
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {member.social.behance && (
                    <a href={member.social.behance} className="enhanced-team-social-link">
                      <i className="fab fa-behance"></i>
                    </a>
                  )}
                  {member.social.facebook && (
                    <a href={member.social.facebook} className="enhanced-team-social-link">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  )}
                </div>
              </div>
              
              <div className="enhanced-team-content">
                <h3 className="enhanced-team-name">{member.name}</h3>
                <div className="enhanced-team-position">{member.position}</div>
                <p className="enhanced-team-description">{member.description}</p>
                
                <div className="expertise-tags">
                  {member.expertise.slice(0, 3).map((skill, idx) => (
                    <span key={idx} className="expertise-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Core Competencies Section */}
        <div className="mt-5 pt-5">
          <div className="modern-section-header" data-aos="fade-up">
            <div className="modern-section-subtitle">Collective Expertise</div>
            <h2 className="modern-section-title">
              Our Team's <span className="text-theme">Core</span> Competencies
            </h2>
          </div>
          
          <div className="row g-4 mt-4">
            {coreCompetencies.map((competency, index) => (
              <div 
                key={index} 
                className="col-md-6 col-lg-3"
                data-aos="slide-up"
                data-aos-delay={index * 100}
              >
                <div className="expertise-card text-center">
                  <div className="expertise-icon">
                    <i className={competency.icon}></i>
                  </div>
                  <h4 className="expertise-title">{competency.title}</h4>
                  <p className="expertise-text">{competency.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="600">
          <Link to="/team" className="interactive-btn">
            Meet Full Team
            <i className="fas fa-arrow-right ms-2 interactive-btn-icon"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTeam;