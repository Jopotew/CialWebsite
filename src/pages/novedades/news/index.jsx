import { Link } from "react-router-dom";
import { ChevronLeft, ExternalLink } from "lucide-react";
import "./news.css";

const noticias = [
  {
    id: 1,
    title: "Avances en implantes cocleares para bebés",
    description: "Nuevas técnicas permiten detectar hipoacusia en recién nacidos con mayor precisión.",
    img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1080",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    type: "video",
    source: "YouTube",
  },
  {
    id: 2,
    title: "La importancia del screening auditivo neonatal",
    description: "Especialistas destacan la detección temprana como clave para el desarrollo del lenguaje.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1080",
    url: "https://www.infobae.com",
    type: "articulo",
    source: "Infobae",
  },
  {
    id: 3,
    title: "Fonoaudiología y tecnología: nuevas herramientas",
    description: "Apps y dispositivos que están revolucionando el tratamiento del lenguaje en niños.",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1080",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    type: "video",
    source: "YouTube",
  },
  {
    id: 4,
    title: "Congreso Iberoamericano de Implantes Cocleares 2025",
    description: "Resumen de los principales hallazgos del GICCA 2025 presentados por especialistas.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1080",
    url: "https://www.lanacion.com.ar",
    type: "articulo",
    source: "La Nación",
  },
];

const typeBadge = {
  video:   { label: "▶ Ver video",   bg: "#fee2e2", color: "#dc2626" },
  articulo: { label: "↗ Leer artículo", bg: "#ede9fe", color: "#7c3aed" },
};

const NoticiasListPage = () => {
  return (
    <div className="noticias-list-page">
      <Link to="/noticias" className="noticias-list-page__back">
        <ChevronLeft size={18} />
        <span>Novedades</span>
      </Link>

      <div className="noticias-list-page__header">
        <h1 className="noticias-list-page__title">Noticias</h1>
        <p className="noticias-list-page__subtitle">
          Artículos y videos seleccionados sobre audiología y fonoaudiología
        </p>
      </div>

      <div className="noticias-list-page__list">
        {noticias.map((n) => {
          const badge = typeBadge[n.type];
          return (
            <a
              key={n.id}
              href={n.url}
              target="_blank"
              rel="noopener noreferrer"
              className="noticia-card"
            >
              <div className="noticia-card__img-wrap">
                <img src={n.img} alt={n.title} className="noticia-card__img" />
                <span
                  className="noticia-card__badge"
                  style={{ backgroundColor: badge.bg, color: badge.color }}
                >
                  {badge.label}
                </span>
              </div>
              <div className="noticia-card__body">
                <div className="noticia-card__source">
                  <ExternalLink size={12} />
                  <span>{n.source}</span>
                </div>
                <h2 className="noticia-card__title">{n.title}</h2>
                <p className="noticia-card__desc">{n.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default NoticiasListPage;