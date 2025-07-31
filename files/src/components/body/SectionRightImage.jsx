import React from 'react';
import './Section.css';

function SectionRightImage({ imageSrc, title, text, bgColor = 'white' }) {
  return (
    <section
      className="section-container"
      style={{ backgroundColor: bgColor }}
    >
      <div className="section-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="section-image">
        <img src={imageSrc} alt={title} />
      </div>
    </section>
  );
}

export default SectionRightImage;

