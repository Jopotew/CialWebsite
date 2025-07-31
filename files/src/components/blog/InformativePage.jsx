// src/components/InformativePage.jsx
import React from 'react';
import './InformativePage.css';

function InformativePage({ title, image, paragraphs = [] }) {
  return (
    <div className="informative-page-container">
      <div className="informative-header">
        <img src={image} alt={title} className="informative-header-image" />
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
