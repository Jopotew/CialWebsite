// src/components/InformativePage.jsx
import React from 'react';
import './InformativePage.css';

// Componente que recibe: title, images (array) y paragraphs
function InformativePage({ title, images = [], paragraphs = [] }) {
  return (
    <div className="informative-page-container">
      <div className="informative-header">
        {/* Renderiza todas las imágenes recibidas */}
        <div className="informative-images">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${title} - ${idx + 1}`}
              className="informative-header-image"
            />
          ))}
        </div>
        <h1 className="informative-title">{title}</h1>
      </div>
      <div className="informative-content">
        {paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export default InformativePage;
