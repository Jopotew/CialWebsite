import { Link } from "react-router-dom";
import { Newspaper, BookOpen, ArrowRight } from "lucide-react";
import "./novedades_desktop.css";

const secciones = [
  {
    to: "/novedades/noticias",
    icon: Newspaper,
    title: "Noticias",
    description: "Un espacio para compartir experiencias, conocimientos y novedades que nos ayudan a crecer juntos.",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1080",
  },
  {
    to: "/novedades/blog",
    icon: BookOpen,
    title: "Blog",
    description: "Ideas, herramientas y evidencia para acompañar el desarrollo del lenguaje, la audición y la comunicación en la vida cotidiana.",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1080",
  },
];

const NovedadesPageDesktop = () => {
  return (
    <div className="novedades-dt">
      <div className="novedades-dt__header">
        <h1 className="novedades-dt__title">Novedades</h1>
        <p className="novedades-dt__subtitle">
          Mantenete informado sobre lo último en CIAL
        </p>
      </div>

      <div className="novedades-dt__grid">
        {secciones.map(({ to, icon: Icon, title, description, img }) => (
          <Link to={to} key={to} className="novedades-dt-card">
            <img src={img} alt={title} className="novedades-dt-card__img" />
            <div className="novedades-dt-card__body">
              <div className="novedades-dt-card__top">
                <Icon size={22} className="novedades-dt-card__icon" />
                <h2 className="novedades-dt-card__title">{title}</h2>
              </div>
              <p className="novedades-dt-card__desc">{description}</p>
              <div className="novedades-dt-card__footer">
                <span className="novedades-dt-card__cta">Ver {title.toLowerCase()}</span>
                <ArrowRight size={18} className="novedades-dt-card__arrow" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NovedadesPageDesktop;
