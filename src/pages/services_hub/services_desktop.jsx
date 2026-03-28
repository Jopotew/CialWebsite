import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./services_desktop.css";
import miniatura1 from "../../assets/workshop/profesionals/miniatura1.jpg";

const sections = [
  {
    title: "Talleres para Familias",
    description:
      "Espacios diseñados para acompañar a familias en la crianza y educación de sus hijos. Aprende estrategias prácticas y comparte experiencias.",
    img: "https://images.unsplash.com/photo-1596289052396-b9525fe23d6d?w=1080",
    to: "/servicios/talleres/familias",
  },
  {
    title: "Talleres para Profesionales",
    description:
      "Capacitaciones y actualizaciones para profesionales del área educativa y social. Formación continua en las últimas técnicas y metodologías.",
    img: miniatura1,
    to: "/servicios/talleres/profesionales",
  },
  {
    title: "Espacios",
    description:
      "Conocé nuestros espacios especializados: Audiología, Fonoaudiología, Psicología, Psicopedagogía y más.",
    img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1080",
    to: "/servicios/espacios",
  },
];

const ServicesDesktop = () => {
  return (
    <div className="services-dt">
      <div className="services-dt__header">
        <h1 className="services-dt__title">Talleres y Capacitaciones</h1>
        <p className="services-dt__subtitle">
          Espacios diseñados para familias y profesionales
        </p>
      </div>

      <div className="services-dt__grid">
        {sections.map((s) => (
          <Link to={s.to} key={s.title} className="services-dt-card">
            <img src={s.img} alt={s.title} className="services-dt-card__img" />
            <div className="services-dt-card__body">
              <h2 className="services-dt-card__title">{s.title}</h2>
              <p className="services-dt-card__desc">{s.description}</p>
              <div className="services-dt-card__footer">
                <span className="services-dt-card__cta">Ver detalles</span>
                <ArrowRight size={18} className="services-dt-card__arrow" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesDesktop;
