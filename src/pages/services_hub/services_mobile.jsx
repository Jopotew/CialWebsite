import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./services_mobile.css";
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
    title: "Asesorías y Supervisiones",
    description:
      "Un espacio pensado para impulsar tu desarrollo profesional, brindando una formación integral y de alta calidad",
    img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1080",
    to: "https://docs.google.com/forms/d/e/1FAIpQLSfL975vaDGtNxWU2XYGjDp4tTujKQm-Mq9l-pWwsiCpmVqh_g/viewform?pli=1",
    target: "_blank",
  },
];

const Services = () => {
  return (
    <div className="workshops-page">
      <div className="workshops-page__header">
        <h1 className="workshops-page__title">Talleres y Capacitaciones</h1>
        <p className="workshops-page__subtitle">
          Espacios diseñados para familias y profesionales
        </p>
      </div>

      <div className="workshops-page__list">
        {sections.map((s) => (
          <Link to={s.to} key={s.title} className="ws-card">
            <img src={s.img} alt={s.title} className="ws-card__img" />
            <div className="ws-card__body">
              <h2 className="ws-card__title">{s.title}</h2>
              <p className="ws-card__desc">{s.description}</p>
              <div className="ws-card__footer">
                <span className="ws-card__cta">Ver detalles</span>
                <ArrowRight size={18} className="ws-card__arrow" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;