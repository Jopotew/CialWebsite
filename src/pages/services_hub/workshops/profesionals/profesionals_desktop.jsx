import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import "./profesionals_desktop.css";

const talleres = [
  {
    title: "Construyendo Aulas Accesibles",
    description: "Crear aulas inclusivas es una responsabilidad que tiene el poder de transformar realidades. La inclusión comienza con pequeños cambios que generan un impacto significativo en la vida de los estudiantes.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeUC1iJG6ZH_8T3ER-frjdnsh4qA2zHEFEAikIexLEWUyAniw/viewform",
  },
  {
    title: "Impulsando tu Desarrollo y Fortaleciendo tu Práctica",
    description: "Un espacio pensado para impulsar tu desarrollo profesional, brindando una formación integral y de alta calidad.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfL975vaDGtNxWU2XYGjDp4tTujKQm-Mq9l-pWwsiCpmVqh_g/viewform",
  },
  {
    title: "Pasantias 2025",
    description: "Brindamos oportunidades únicas de observación y práctica profesional dirigidas a estudiantes avanzados de Fonoaudiología, Psicología, Psicopedagogía, Psicomotricidad, así como a docentes y profesionales en formación.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSd8lNbT1kDFk0xdmEVwrJlOAHo5tjoS-MuaLt4lce4-iF1alQ/viewform",
  },
];

const benefits = [
  "Formación continua en técnicas actualizadas de audiología y fonoaudiología",
  "Intercambio de experiencias con otros profesionales del área",
  "Certificación de asistencia en todos los talleres",
  "Acceso a bibliografía y recursos exclusivos para profesionales",
];

const ProfessionalsDesktop = () => {
  return (
    <div className="prof-dt">
      <Link to="/servicios" className="prof-dt__back">
        <ChevronLeft size={18} />
        <span>Servicios</span>
      </Link>

      {/* Hero */}
      <div className="prof-dt__hero">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1080&q=80"
          alt="Talleres para Profesionales"
          className="prof-dt__hero-img"
        />
        <div className="prof-dt__hero-overlay">
          <h1 className="prof-dt__hero-title">Talleres para Profesionales</h1>
        </div>
      </div>

      <div className="prof-dt__content">
        <p className="prof-dt__intro">
          Capacitaciones y actualizaciones para profesionales del área educativa
          y social. Formación continua en las últimas técnicas y metodologías.
        </p>

        {/* Grid de talleres */}
        <div className="prof-dt__grid">
          {talleres.map((taller, i) => (
            <div className="prof-dt-card" key={i}>
              <img src={taller.image} alt={taller.title} className="prof-dt-card__img" />
              <div className="prof-dt-card__body">
                <h2 className="prof-dt-card__title">{taller.title}</h2>
                <p className="prof-dt-card__text">{taller.description}</p>
                <a href={taller.link} target="_blank" rel="noopener noreferrer">
                  <button className="prof-dt-card__btn">Más información</button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Beneficios */}
        <div className="prof-dt-benefits">
          <h3 className="prof-dt-benefits__title">¿Por qué elegirnos?</h3>
          <div className="prof-dt-benefits__grid">
            {benefits.map((b, i) => (
              <div key={i} className="prof-dt-benefits__item">
                <span className="prof-dt-benefits__check">✓</span>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalsDesktop;
