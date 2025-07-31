import React from 'react';
import './header.css';

function OwnerHeader({ name, title, image }) {
  return (
    <div className="owner-header">
      <div className="owner-header-text">
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div className="owner-header-image">
        <img src={image} alt={name} />
      </div>
    </div>
  );
}

export default OwnerHeader;

