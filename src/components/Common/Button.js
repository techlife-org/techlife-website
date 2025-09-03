import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  href, 
  onClick, 
  className = '', 
  style = '', 
  type = 'button',
  disabled = false,
  icon = null,
  iconPosition = 'right'
}) => {
  const baseClass = `th-btn ${style} ${className}`;

  const renderIcon = () => {
    if (!icon) return null;
    return <i className={`${icon} ${iconPosition === 'left' ? 'me-2' : 'ms-2'}`}></i>;
  };

  const content = (
    <>
      {iconPosition === 'left' && renderIcon()}
      {children}
      {iconPosition === 'right' && renderIcon()}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {content}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      className={baseClass} 
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;