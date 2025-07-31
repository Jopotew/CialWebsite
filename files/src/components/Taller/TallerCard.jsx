import React from 'react';
import { Link } from 'react-router-dom';
import './TallerCard.css';

function TallerCard({ title, description, image, link }) {
  return (
    <Link to={link} className="taller-card">
      <div className="taller-card-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="taller-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default TallerCard;
