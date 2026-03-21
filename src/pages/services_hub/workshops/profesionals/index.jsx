import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import "./profesionals.css";

const benefits = [
  "Formación continua en técnicas actualizadas de audiología y fonoaudiología",
  "Intercambio de experiencias con otros profesionales del área",
  "Certificación de asistencia en todos los talleres",
  "Acceso a bibliografía y recursos exclusivos para profesionales",
];

const ProfessionalsPage = () => {
  return (
    <div className="wdetail-page">
      <Link to="/services" className="wdetail-page__back">
        <ChevronLeft size={18} />
        <span>Servicios</span>
      </Link>

      <img
        src="https://images.unsplash.com/photo-1755548413928-4aaeba7c740e?w=1080"
        alt="Talleres para Profesionales"
        className="wdetail-page__hero"
      />

      <div className="wdetail-page__content">
        <h1 className="wdetail-page__title">Talleres para Profesionales</h1>

        <p className="wdetail-page__intro">
          Capacitaciones y actualizaciones para profesionales del área
          educativa y social. Formación continua en las últimas técnicas y
          metodologías.
        </p>

        {/* Card destacada */}
        <div className="wdetail-card">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1080"
            alt="Capacitación profesional"
            className="wdetail-card__img"
          />
          <div className="wdetail-card__body">
            <h2 className="wdetail-card__title">
              Actualización y Formación Continua
            </h2>
            <p className="wdetail-card__text">
              Nuestros talleres para profesionales están diseñados para
              ofrecer herramientas actualizadas y metodologías innovadoras.
              Trabajamos con expertos nacionales e internacionales para
              brindar la mejor formación en audiología, fonoaudiología y
              áreas afines.
            </p>
            <button className="wdetail-card__btn">Más información</button>
          </div>
        </div>

        {/* Beneficios */}
        <div className="wdetail-benefits">
          <h3 className="wdetail-benefits__title">
            ¿Por qué elegirnos?
          </h3>
          <ul className="wdetail-benefits__list">
            {benefits.map((b, i) => (
              <li key={i} className="wdetail-benefits__item">
                <span className="wdetail-benefits__check">✓</span>
                <p>{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalsPage;