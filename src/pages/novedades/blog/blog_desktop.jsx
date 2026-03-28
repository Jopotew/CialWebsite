import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import "./blog_desktop.css";
import miniatura1 from "../../../assets/blog/miniatura-principito.png";

const posts = [
  {
    id: 1,
    slug: "leer-antes-de-saber-leer",
    title: "Leer antes de saber leer: un viaje al mundo de la primera infancia",
    excerpt: "¿Sabías que la lectura comienza mucho antes de que un niño aprenda a descifrar letras?",
    img: miniatura1,
    author: "Lic. Juliana Lamela y Lic. María Eva Skruta",
    date: "2025",
  },
];

const BlogListDesktop = () => {
  return (
    <div className="blog-dt">
      <Link to="/novedades" className="blog-dt__back">
        <ChevronLeft size={18} />
        <span>Novedades</span>
      </Link>

      <div className="blog-dt__header">
        <h1 className="blog-dt__title">Voces y Palabras ~ Nuestro blog.</h1>
        <p className="blog-dt__subtitle">
          Artículos escritos por nuestro equipo de profesionales
        </p>
      </div>

      <div className="blog-dt__grid">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/novedades/blog/${post.slug}`}
            className="blog-dt-card"
          >
            <img src={post.img} alt={post.title} className="blog-dt-card__img" />
            <div className="blog-dt-card__body">
              <h2 className="blog-dt-card__title">{post.title}</h2>
              <p className="blog-dt-card__excerpt">{post.excerpt}</p>
              <div className="blog-dt-card__meta">
                <span className="blog-dt-card__author">{post.author}</span>
                <span className="blog-dt-card__date">{post.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogListDesktop;
