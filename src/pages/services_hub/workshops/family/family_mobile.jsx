import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import "./family_mobile.css";
import miniatura1 from "../../../../assets/workshop/parents/lectura-en-casa.jpg";
import miniatura2 from "../../../../assets/workshop/parents/talleres-padres.jpg";

const benefits = [
  "Aprende de profesionales experimentados en audiología y fonoaudiología",
  "Comparte experiencias con otras familias en situaciones similares",
  "Obtén herramientas prácticas para aplicar en el día a día",
  "Accede a material didáctico y recursos exclusivos",
];

const FamiliesPage = () => {
  return (
    <div className="wdetail-page">
      <Link to="/servicios" className="wdetail-page__back">
        <ChevronLeft size={18} />
        <span>Servicios</span>
      </Link>

      <img
        src={miniatura1}
        alt="Talleres para Familias"
        className="wdetail-page__hero"
      />

      <div className="wdetail-page__content">
        <h1 className="wdetail-page__title">Talleres para Familias</h1>

        <p className="wdetail-page__intro">
          Espacios diseñados para acompañar a familias en la crianza y
          educación de sus hijos. Aprende estrategias prácticas y comparte
          experiencias con otras familias.
        </p>

        {/* Card destacada */}
        <div className="wdetail-card">
          <img
            src={miniatura2}
            alt="Fortaleciendo el aprendizaje en casa"
            className="wdetail-card__img"
          />
          <div className="wdetail-card__body">
            <h2 className="wdetail-card__title">
              Fortaleciendo el Aprendizaje en Casa
            </h2>
            <p className="wdetail-card__text">
              El hogar es el primer y más importante espacio de aprendizaje.
              Diversas investigaciones confirman que el éxito en los
              tratamientos se potencia cuando las familias participan
              activamente, convirtiéndose en los principales modelos para
              guiar a sus hijos en el desarrollo de sus habilidades de
              comunicación, escucha y habla.
            </p>
            
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSduT8Esk_kMgGiOj-AiX2NA_jVmL5aUfZHtj6paxGKKWtvpUg/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="wdetail-card__link-wrapper"
            >
              <button className="wdetail-card__btn">Más información</button>
            </a>
          </div> 
        </div>

        {/* Beneficios */}
        <div className="wdetail-benefits">
          <h3 className="wdetail-benefits__title">
            ¿Por qué participar en nuestros talleres?
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

export default FamiliesPage;