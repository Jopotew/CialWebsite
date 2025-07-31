import React from 'react';
import './BloqueInfo.css';

function BloqueInfo({ title, paragraphs, images }) {
  return (
    <section className="bloque-info-container">
      <div className="bloque-info-images">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`${title} ${idx + 1}`} />
        ))}
      </div>
      <div className="bloque-info-text">
        <h2>{title.toUpperCase()}</h2>
        {paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
    </section>
  );
}

export default BloqueInfo;
