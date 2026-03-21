import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";
import "./spaces_hub.css";

const espacios = [
  {
    title: "Audiología",
    description: "Estudios completos de audición en niños y adultos.",
    img: "https://images.unsplash.com/photo-1692160756327-f0481e950b28?w=1080",
    to: "/services/espacios/audiologia",
  },
  {
    title: "Fonoaudiología",
    description: "Tratamiento del lenguaje, habla y comunicación.",
    img: "https://images.unsplash.com/photo-1610890912938-ddcf5f9d4256?w=1080",
    to: "/services/espacios/fonoaudiologia",
  },
  {
    title: "Psicología",
    description: "Acompañamiento emocional y psicológico para niños y adultos.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1080",
    to: "/services/espacios/psicologia",
  },
  {
    title: "Psicopedagogía",
    description: "Acompañamiento integral de los procesos de aprendizaje.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1080",
    to: "/services/espacios/psicopedagogia",
  },
  {
    title: "Psicomotricidad",
    description: "Desarrollo motriz y corporal en niños.",
    img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1080",
    to: "/services/espacios/psicomotricidad",
  },
  {
    title: "Rehabilitación Auditiva",
    description: "Rehabilitación especializada para personas con hipoacusia.",
    img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1080",
    to: "/services/espacios/rehabilitacion",
  },
];

const EspaciosPage = () => {
  return (
    <div className="espacios-page">
      <Link to="/services" className="espacios-page__back">
        <ChevronLeft size={18} />
        <span>Servicios</span>
      </Link>

      <div className="espacios-page__header">
        <h1 className="espacios-page__title">Nuestros Espacios</h1>
        <p className="espacios-page__subtitle">
          Servicios especializados para cada necesidad
        </p>
      </div>

      <div className="espacios-page__grid">
        {espacios.map((e) => (
          <Link to={e.to} key={e.title} className="espacio-card">
            <img src={e.img} alt={e.title} className="espacio-card__img" />
            <div className="espacio-card__body">
              <h2 className="espacio-card__title">{e.title}</h2>
              <p className="espacio-card__desc">{e.description}</p>
              <div className="espacio-card__footer">
                <span className="espacio-card__cta">Ver más</span>
                <ArrowRight size={16} className="espacio-card__arrow" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EspaciosPage;