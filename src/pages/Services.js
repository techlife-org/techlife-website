import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Common/Breadcrumb';

const Services = () => {
  const services = [
    {
      id: 1,
      number: '01',
      icon: '/assets/img/icon/service_card_1.svg',
      title: 'Web Development',
      description: 'Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.'
    },
    {
      id: 2,
      number: '02',
      icon: '/assets/img/icon/service_card_2.svg',
      title: 'UI/UX Design',
      description: 'Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.'
    },
    {
      id: 3,
      number: '03',
      icon: '/assets/img/icon/service_card_3.svg',
      title: 'Digital Marketing',
      description: 'Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.'
    },
    {
      id: 4,
      number: '04',
      icon: '/assets/img/icon/service_card_4.svg',
      title: 'Business Analysis',
      description: 'Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.'
    },
    {
      id: 5,
      number: '05',
      icon: '/assets/img/icon/service_card_5.svg',
      title: 'Software Services',
      description: 'Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.'
    },
    {
      id: 6,
      number: '06',
      icon: '/assets/img/icon/service_card_6.svg',
      title: 'Machine Learning',
      description: 'Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with.'
    }
  ];

  return (
    <div className="services-page">
      <Breadcrumb title="Our Services" />
      
      <section className="service-sec space">
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
                    <img src="/assets/img/theme-img/title_shape_1.svg" alt="shape" />
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
            {services.map((service) => (
              <div key={service.id} className="col-md-6 col-xl-4">
                <div className="service-card">
                  <div className="service-card_number">{service.number}</div>
                  <div className="shape-icon">
                    <img src={service.icon} alt="Icon" />
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
        </div>
      </section>
    </div>
  );
};

export default Services;