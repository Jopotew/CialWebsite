import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import "./BlogListPage.css";

const posts = [
  {
    id: 1,
    slug: "estimulacion-auditiva-temprana",
    title: "Estimulación auditiva temprana en bebés",
    excerpt: "Conocé por qué los primeros meses de vida son cruciales para el desarrollo auditivo y qué podés hacer en casa.",
    img: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=1080",
    author: "Lic. María Lorena Valenzuela",
    date: "15 de marzo, 2025",
  },
  {
    id: 2,
    slug: "lenguaje-y-juego",
    title: "El juego como motor del lenguaje",
    excerpt: "Cómo las actividades lúdicas potencian el desarrollo comunicativo en niños de 2 a 5 años.",
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1080",
    author: "Lic. Ana Swchab",
    date: "2 de marzo, 2025",
  },
  {
    id: 3,
    slug: "hipoacusia-preguntas-frecuentes",
    title: "Hipoacusia: preguntas frecuentes",
    excerpt: "Todo lo que necesitás saber sobre la pérdida auditiva, sus tipos, causas y tratamientos disponibles.",
    img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1080",
    author: "Lic. María Sol Trasarti",
    date: "18 de febrero, 2025",
  },
  {
    id: 4,
    slug: "implante-coclear-vida-cotidiana",
    title: "Implante coclear: la vida cotidiana después",
    excerpt: "Testimonios y guía práctica para familias que atraviesan el proceso de rehabilitación post-implante.",
    img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1080",
    author: "Lic. Belén Montecino",
    date: "5 de febrero, 2025",
  },
];

const BlogListPage = () => {
  return (
    <div className="blog-list-page">
      <Link to="/noticias" className="blog-list-page__back">
        <ChevronLeft size={18} />
        <span>Novedades</span>
      </Link>

      <div className="blog-list-page__header">
        <h1 className="blog-list-page__title">Blog</h1>
        <p className="blog-list-page__subtitle">
          Artículos escritos por nuestro equipo de profesionales
        </p>
      </div>

      <div className="blog-list-page__list">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/noticias/blog/${post.slug}`}
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