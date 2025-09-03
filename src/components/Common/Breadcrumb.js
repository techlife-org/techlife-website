import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ title, items = [] }) => {
  return (
    <div className="breadcumb-wrapper" data-bg-src="/assets/img/bg/breadcumb-bg.jpg">
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">{title}</h1>
          <ul className="breadcumb-menu">
            <li><Link to="/">Home</Link></li>
            {items.map((item, index) => (
              <li key={index}>
                {item.link ? <Link to={item.link}>{item.label}</Link> : item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;