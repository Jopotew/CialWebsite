// src/components/Blog/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

function BlogCard({ image, title, excerpt, link, date }) {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-card-image" />
      <h3 className="blog-card-title">{title}</h3>
      <p className="blog-card-excerpt">{excerpt}</p>
      <Link to={link} className="blog-card-button">Leer más</Link>

      <hr className="blog-card-divider" />
      <p className="blog-card-date">{date}</p>
    </div>
  );
}

export default BlogCard;
