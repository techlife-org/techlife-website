import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Common/Breadcrumb';

const ServiceDetails = () => {
  const { id } = useParams();

  return (
    <div className="service-details-page">
      <Breadcrumb title="Service Details" items={[{ label: 'Services', link: '/services' }, { label: 'Service Details' }]} />
      
      <div className="space">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>Service Details - {id}</h2>
              <p>This is the service details page for service ID: {id}</p>
              {/* Add your service details content here */}
            </div>
            <div className="col-lg-4">
              {/* Sidebar content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;