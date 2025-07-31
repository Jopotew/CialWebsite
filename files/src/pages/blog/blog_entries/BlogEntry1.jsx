// src/pages/blog_entries/BlogEntry1.jsx
import React from 'react';
import BlogEntryLayout from '../../../components/Blog/BlogEntryLayout';
import blogImage1 from '../../../assets/cial_logo.png';

function BlogEntry1() {
  const content = (
    <div>
      <h2>Introducción</h2>
      <p>
        En el mundo actual, el desarrollo web es una habilidad esencial que permite crear experiencias digitales atractivas y funcionales.
      </p>
      <h2>Herramientas Modernas</h2>
      <p>
        Frameworks como React, Vue y Angular han revolucionado la forma en que construimos interfaces de usuario, facilitando el desarrollo de aplicaciones dinámicas.
      </p>
      <h2>Conclusión</h2>
      <p>
        Mantenerse actualizado con las últimas tecnologías y prácticas es clave para el éxito en el campo del desarrollo web.
      </p>
    </div>
  );

  return (
    <BlogEntryLayout
      title="Descubriendo el Mundo del Desarrollo Web"
      image={blogImage1}
      content={content}
      prevLink={null}
      nextLink="/blog/2"
    />
  );
}

export default BlogEntry1;
