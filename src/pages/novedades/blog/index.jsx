import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import "./blog.css";

const posts = [
  {
    id: 1,
    slug: "leer-antes-de-saber-leer",
    title: "Leer antes de saber leer: un viaje al mundo de la primera infancia",
    excerpt: "¿Sabías que la lectura comienza mucho antes de que un niño aprenda a descifrar letras?",
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1080", 
    author: "Lic. Juliana Lamela y Lic. María Eva Skruta",
    date: "2025",
  },
];
const BlogListPage = () => {
  return (
    <div className="blog-list-page">
      <Link to="/novedades" className="blog-list-page__back">
        <ChevronLeft size={18} />
        <span>Novedades</span>
      </Link>

      <div className="blog-list-page__header">
        <h1 className="blog-list-page__title">Voces y Palabras ~ Nuestro blog.</h1>
        <p className="blog-list-page__subtitle">
          Artículos escritos por nuestro equipo de profesionales
        </p>
      </div>

      <div className="blog-list-page__list">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/novedades/blog/${post.slug}`}
            className="blog-card"
          >
            <img src={post.img} alt={post.title} className="blog-card__img" />
            <div className="blog-card__body">
              <h2 className="blog-card__title">{post.title}</h2>
              <p className="blog-card__excerpt">{post.excerpt}</p>
              <div className="blog-card__meta">
                <span className="blog-card__author">{post.author}</span>
                <span className="blog-card__date">{post.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;