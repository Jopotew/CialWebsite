import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./services_mobile.css";
import miniatura1 from "../../assets/workshop/profesionals/miniatura1.jpg";

const sections = [
  {
      title: "Talleres para Familias",
      description:
        "Acompañamos a las familias en el desarrollo de la comunicación y el aprendizaje. Brindamos herramientas prácticas para aplicar en la vida cotidiana.",
      img: "https://images.unsplash.com/photo-1596289052396-b9525fe23d6d?w=1080",
      to: "/servicios/talleres/familias",
    },
    {
      title: "Talleres para Profesionales",
      description:
        "Fortalecemos la práctica profesional a través del aprendizaje y el intercambio. Trabajamos con casos reales, evidencia y estrategias aplicables.",
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
  {
    title: "Curso CAA y (Re)Habilitación Auditiva",
    description:
      "El rol del terapeuta en rehabilitación auditiva, frente a trayectorias comunicativas diversas en personas con diagnóstico de hipoacusia, exige ampliar el razonamiento clínico, integrar apoyos multimodales y sostener intervenciones individualizadas, dinámicas y contextualizadas en el entorno familiar y educativo.",
    img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1080",
    to: "https://docs.google.com/forms/d/e/1FAIpQLSfVbB825ipmpOmjfCVWZkuHlc0IexbQW5RARYlcfdyFv1Uuqg/viewform?fbclid=PAT01DUAQ72ZBleHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafDBszhA6BlFxtb0DRe9mh3aO3tY0BN4yM5goDQ-hwhQyfWcyMaYVD67YqTpg_aem___QK5WxqwoaoFmygOav4Pw",
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