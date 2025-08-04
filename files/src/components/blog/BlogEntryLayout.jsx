// src/components/Blog/BlogEntryLayout.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogEntryLayout.css';

function BlogEntryLayout({ title, content, prevLink, nextLink }) {
  return (
    <div className="blog-entry-container">
      <h1 className="blog-entry-title">{title}</h1>
      
      <div className="blog-entry-content">{content}</div>
      <div className="blog-entry-navigation">
        {prevLink && <Link to={prevLink} className="nav-button">← Anterior</Link>}
        {nextLink && <Link to={nextLink} className="nav-button">Siguiente →</Link>}
      </div>
    </div>
  );
}

export default BlogEntryLayout;
