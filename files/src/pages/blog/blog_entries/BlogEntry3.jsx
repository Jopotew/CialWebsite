// src/pages/blog_entries/BlogEntry2.jsx
import React from 'react';
import BlogEntryLayout from '../../../components/Blog/BlogEntryLayout'
import blogImage1 from '../../../assets/cial_logo.png';

function BlogEntry3() {
  const content = (
    <div>
      <h2>¿Qué es el Diseño Responsivo?</h2>
      <p>
        El diseño responsivo garantiza que un sitio web se vea y funcione bien en una variedad de dispositivos y tamaños de pantalla.
      </p>
      <h2>Beneficios</h2>
      <p>
        Mejora la experiencia del usuario, aumenta el tiempo de permanencia en el sitio y es favorable para el SEO.
      </p>
      <h2>Implementación</h2>
      <p>
        Utilizando media queries, unidades relativas y un diseño flexible, se puede lograr un sitio web completamente responsivo.
      </p>
    </div>
  );

  return (
    <BlogEntryLayout
      title="La Importancia del Diseño Responsivo"
      image={blogImage1}
      content={content}
      prevLink="/blog/2"
      nextLink={null}
    />
  );
}

export default BlogEntry3;
