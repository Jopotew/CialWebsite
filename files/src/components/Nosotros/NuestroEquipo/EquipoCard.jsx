import React from 'react';
import './EquipoCard.css';

function EquipoCard({ image, name, description, showButton, buttonLink }) {
  return (
    <div className="equipo-card">
      <img src={image} alt={name} className="equipo-card-image" />
      {showButton ? (
        <a href={buttonLink} className="equipo-card-button-link">
          <h3 className="equipo-card-name-button">{name}</h3>
        </a>
      ) : (
        <h3 className="equipo-card-name">{name}</h3>
      )}
      <p className="equipo-card-description">{description}</p>
    </div>
  );
}

export default EquipoCard;
