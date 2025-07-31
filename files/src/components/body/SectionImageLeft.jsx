import React from 'react';
import './Section.css';

function SectionImageLeft({ imageSrc, title, text, bgColor = 'white' }) {
  return (
    <section className="section-container left" style={{ backgroundColor: bgColor }}>
      <div className="section-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="section-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}

export default SectionImageLeft;
