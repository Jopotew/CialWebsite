import { Link } from "react-router-dom";
import "./css/services_section.css";
import mini5 from "../../../assets/home/mini5.jpg";

const services = [
  {
    title: "Audiología",
    description:
      "Realizamos estudios completos de audición en niños y adultos. Contamos con equipos especializados para diagnóstico y tratamiento auditivo.",
    img: mini5,
    to: "/servicios/espacios/audiologia",
  },
  {
    title: "Rehabilitación Auditiva",
    description:
      "Tratamiento y terapia del lenguaje y la comunicación. Trabajamos con niños y adultos en problemas de habla, lenguaje y deglución.",
    img: "https://images.unsplash.com/photo-1610890912938-ddcf5f9d4256?w=1080",
    to: "/servicios/espacios/rehabilitacion-auditiva",
  },
  {
    title: "Talleres y Espacios",
    description:
      "Ofrecemos talleres grupales de estimulación del lenguaje y desarrollo de habilidades comunicativas.",
    img: "https://images.unsplash.com/photo-1766932901295-d4185660341b?w=1080",
    to: "/servicios",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section-desktop">
      <h2 className="services-section-desktop__title">
        Conoce sobre algunos de nuestros servicios
      </h2>
      <div className="services-section-desktop__grid">
        {services.map((s) => (
          <Link to={s.to} key={s.title} className="service-card-desktop">
            <img src={s.img} alt={s.title} className="service-card-desktop__img" />
            <div className="service-card-desktop__body">
              <h3 className="service-card-desktop__title">{s.title}</h3>
              <p className="service-card-desktop__desc">{s.description}</p>
              <span className="service-card-desktop__cta">Conocer más →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
