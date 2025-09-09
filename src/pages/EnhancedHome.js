import React from 'react';
import EnhancedHero from '../components/Enhanced/EnhancedHero';
import EnhancedServices from '../components/Enhanced/EnhancedServices';
import EnhancedAbout from '../components/Enhanced/EnhancedAbout';
import EnhancedPortfolio from '../components/Enhanced/EnhancedPortfolio';
import EnhancedTeam from '../components/Enhanced/EnhancedTeam';
import EnhancedContact from '../components/Enhanced/EnhancedContact';

const EnhancedHome = () => {
  return (
    <div className="enhanced-home-page">
      {/* Enhanced Hero Section */}
      <EnhancedHero />
      
      {/* Enhanced About Section */}
      <EnhancedAbout />
      
      {/* Enhanced Services Section */}
      <EnhancedServices />
      
      {/* Enhanced Portfolio Section */}
      <EnhancedPortfolio />
      
      {/* Enhanced Team Section */}
      <EnhancedTeam />
      
      {/* Enhanced Contact Section */}
      <EnhancedContact />
    </div>
  );
};

export default EnhancedHome;