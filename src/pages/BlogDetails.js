import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Common/Breadcrumb';

const BlogDetails = () => {
  const { id } = useParams();
  return (
    <div className="blog-details-page">
      <Breadcrumb title="Blog Details" items={[{ label: 'Blog', link: '/blog' }, { label: 'Blog Details' }]} />
      <div className="space">
        <div className="container">
          <h2>Blog Post Details - {id}</h2>
          <p>Blog post details content will be added here.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;