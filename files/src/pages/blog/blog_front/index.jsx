// src/pages/Blog.jsx
import React from 'react';
import BlogCard from '../../../components/Blog/BlogCard';
import blogImage1 from '../../../assets/Body/Blog/Entry1/3.png';
import './BlogFront.css';

function Blog() {
  const blogEntries = [
    {
      image: blogImage1,
      title: 'Leer antes de saber leer',
      excerpt: 'Un viaje al mundo de la primera infancia',
      link: '/blog/1',
      date: '04 de junio de 2025',
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
