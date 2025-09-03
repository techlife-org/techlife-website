import React from 'react';
import Breadcrumb from '../components/Common/Breadcrumb';

const Blog = () => {
  return (
    <div className="blog-page">
      <Breadcrumb title="Blog" />
      <div className="space">
        <div className="container">
          <h2>Blog</h2>
          <p>Blog page content will be added here.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;