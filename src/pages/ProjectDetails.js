import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Common/Breadcrumb';

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div className="project-details-page">
      <Breadcrumb title="Project Details" items={[{ label: 'Projects', link: '/projects' }, { label: 'Project Details' }]} />
      
      <div className="space">
        <div className="container">
          <h2>Project Details - {id}</h2>
          <p>Project details content will be added here.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;