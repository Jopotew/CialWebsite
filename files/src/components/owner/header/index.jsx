import React from 'react';
import './header.css';


function OwnerHeader({ name, title, image }) {
  return (
    <div className="owner-header">
      <div className="owner-text">
        <h1 className="owner-name">{name}</h1>
        <h2 className="owner-title">{title}</h2>
      </div>
      <div className="owner-image-container">
        <img src={image} alt={name} className="owner-image" />
      </div>
    </div>
  );
}

export default OwnerHeader;
