// src/components/Nosotros/EquipoCard.jsx
import React from 'react';
import './EquipoCard.css';

function EquipoCard({ image, name, description }) {
  return (
    <div className="equipo-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{description}</p>
    </div>

  );
}

export default EquipoCard;
