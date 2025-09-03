import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Common/Breadcrumb';

const TeamDetails = () => {
  const { id } = useParams();
  return (
    <div className="team-details-page">
      <Breadcrumb title="Team Details" items={[{ label: 'Team', link: '/team' }, { label: 'Team Details' }]} />
      <div className="space">
        <div className="container">
          <h2>Team Member Details - {id}</h2>
          <p>Team member details content will be added here.</p>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;