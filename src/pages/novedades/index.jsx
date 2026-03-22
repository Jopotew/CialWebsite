import { Link } from "react-router-dom";
import { Newspaper, BookOpen, ArrowRight } from "lucide-react";
import "./novedades.css";

const secciones = [
  {
    to: "/novedades/noticias",
    icon: Newspaper,
    title: "Noticias",
    description: "Novedades del mundo de la audiología y fonoaudiología. Artículos de diarios y contenido audiovisual seleccionado.",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1080",
  },
  {
    to: "/novedades/blog",
    icon: BookOpen,
    title: "Blog",
    description: "Artículos escritos por nuestro equipo de profesionales sobre temas de salud auditiva, lenguaje y comunicación.",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1080",
  },
];

const NovedadesPage = () => {
  return (
    <div className="novedades-page">
      <div className="novedades-page__header">
        <h1 className="novedades-page__title">Novedades</h1>
        <p className="novedades-page__subtitle">
          Mantenete informado sobre lo ultimo en CIAL!
        </p>
      </div>

      <div className="novedades-page__list">
        {secciones.map(({ to, icon: Icon, title, description, img }) => (
          <Link to={to} key={to} className="novedades-card">
            <img src={img} alt={title} className="novedades-card__img" />
            <div className="novedades-card__body">
              <div className="novedades-card__top">
                <Icon size={20} className="novedades-card__icon" />
                <h2 className="novedades-card__title">{title}</h2>
              </div>
              <p className="novedades-card__desc">{description}</p>
              <div className="novedades-card__footer">
                <span className="novedades-card__cta">Ver {title.toLowerCase()}</span>
                <ArrowRight size={18} className="novedades-card__arrow" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NovedadesPage;