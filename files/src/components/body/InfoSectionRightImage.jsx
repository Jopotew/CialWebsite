import React from 'react';
import { Link } from 'react-router-dom';
import './Section.css';

function InfoSectionRightImage({ title, paragraphs, imageSrc, linkTo, linkLabel = 'Ver más', bgColor = 'white' }) {
  return (
    <section className="section-container" style={{ backgroundColor: bgColor }}>
      <div className="section-inner">
        <div className="section-text">
          <h2>{title}</h2>
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
          {linkTo && (
            <Link to={linkTo} className="news-button">
              {linkLabel}
            </Link>
          )}
        </div>
        <div className="section-image">
          <img src={imageSrc} alt={title} />
        </div>
      </div>
    </section>

  );
}

export default InfoSectionRightImage;
