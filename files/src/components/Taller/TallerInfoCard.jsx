// src/components/TallerInfoCard.jsx
import React from 'react';
import './TallerInfoCard.css';

function TallerInfoCard({ title, description, image, link }) {
  return (
    <div className="taller-info-card">
      <img src={image} alt={title} className="taller-info-image" />
      <div className="taller-info-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="taller-info-button">
          Más información
        </a>
      </div>
    </div>
  );
}

export default TallerInfoCard;
