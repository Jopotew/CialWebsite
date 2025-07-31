import React from 'react';
import './Section.css';

function NewsSectionRightImage({ imageSrc, title, text, link, linkLabel = 'Leer más', bgColor = 'white' }) {
  return (
    <section
      className="section-container"
      style={{ backgroundColor: bgColor }}
    >
      <div className="section-text">
        <h2>{title}</h2>
        <p>{text}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="news-button">
          {linkLabel}
        </a>
      </div>
      <div className="section-image">
        <img src={imageSrc} alt={title} />
      </div>
    </section>
  );
}

export default NewsSectionRightImage;
