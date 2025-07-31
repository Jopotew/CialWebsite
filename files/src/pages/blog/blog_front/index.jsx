// src/pages/Blog.jsx
import React from 'react';
import BlogCard from '../../../components/Blog/BlogCard';
import blogImage1 from '../../../assets/cial_logo.png';
import './BlogFront.css';

function Blog() {
  const blogEntries = [
    {
      image: blogImage1,
      title: 'Descubriendo el Mundo del Desarrollo Web',
      excerpt: 'Explora las tendencias actuales en el desarrollo web y cómo están moldeando el futuro de la tecnología.',
      link: '/blog/1',
      date: '04 de junio de 2025',
    },
    {
      image: blogImage1,
      title: 'La Importancia del Diseño Responsivo',
      excerpt: 'Aprende por qué el diseño responsivo es esencial en la era moderna de dispositivos móviles.',
      link: '/blog/2',
      date: '03 de junio de 2025',
    },
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">Nuestro Blog</h1>
      <div className="blog-list">
        {blogEntries.map((entry, index) => (
          <BlogCard
            key={index}
            image={entry.image}
            title={entry.title}
            excerpt={entry.excerpt}
            link={entry.link}
            date={entry.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
