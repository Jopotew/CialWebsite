import React from 'react';
import './HeroImage.css';

function HeroImageText({ imageSrc, title, text, animate = false }) {
  return (
    <section
      className="hero-image-text"
      style={{ backgroundImage: `url(${imageSrc})` }}
      {...(animate ? { 'data-aos': 'fade-up' } : {})}
    >
      <div className="hero-overlay">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export default HeroImageText;
