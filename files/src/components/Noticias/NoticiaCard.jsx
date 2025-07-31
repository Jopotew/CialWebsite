// src/components/Noticias/NoticiaCard.jsx
import React from 'react';
import './NoticiaCard.css';

function NoticiaCard({ image, title, excerpt, link, date }) {
  return (
    <div className="noticia-card">
      <img src={image} alt={title} className="noticia-card-image" />
      <h3 className="noticia-card-title">{title}</h3>
      <p className="noticia-card-excerpt">{excerpt}</p>

      <a href={link} className="noticia-card-button" target="_blank" rel="noopener noreferrer">
        Ver más
      </a>

      <hr className="noticia-card-divider" />
      <p className="noticia-card-date">{date}</p>
    </div>
  );
}

export default NoticiaCard;
