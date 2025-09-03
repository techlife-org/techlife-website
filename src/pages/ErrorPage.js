import React from 'react';
import Button from '../components/Common/Button';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h1 className="display-1">404</h1>
              <h2>Page Not Found</h2>
              <p>The page you are looking for doesn't exist.</p>
              <Button to="/" icon="fa-regular fa-arrow-left" iconPosition="left">
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;