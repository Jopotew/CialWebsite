import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./services_desktop.css";
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
      "Profundizamos el análisis clínico y la toma de decisiones profesionales. Acompañamos con mirada integral, articulando evidencia, experiencia y contexto.",
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
        {sections.map((s) => {
          // Definimos las propiedades comunes para no repetir código
          const commonProps = {
            key: s.title,
            className: "services-dt-card"
          };

          // Contenido interno de la card (lo que se ve)
          const CardContent = (
            <>
              <img src={s.img} alt={s.title} className="services-dt-card__img" />
              <div className="services-dt-card__body">
                <h2 className="services-dt-card__title">{s.title}</h2>
                <p className="services-dt-card__desc">{s.description}</p>
                <div className="services-dt-card__footer">
                  <span className="services-dt-card__cta">Ver detalles</span>
                  <ArrowRight size={18} className="services-dt-card__arrow" />
                </div>
              </div>
            </>
          );

          // Lógica de decisión: ¿Es link externo o interno?
          if (s.target === "_blank") {
            return (
              <a 
                href={s.to} 
                target="_blank" 
                rel="noopener noreferrer" 
                {...commonProps}
              >
                {CardContent}
              </a>
            );
          }

          return (
            <Link to={s.to} {...commonProps}>
              {CardContent}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesDesktop;
