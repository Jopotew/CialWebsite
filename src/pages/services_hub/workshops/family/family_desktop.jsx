import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import "./family_desktop.css";
import miniatura1 from "../../../../assets/workshop/parents/lectura-en-casa.jpg";
import miniatura2 from "../../../../assets/workshop/parents/talleres-padres.jpg";

const benefits = [
  "Acompañamiento profesional especializado",
  "Espacios de encuentro con otras familias",
  "Estrategias concretas para aplicar en lo cotidiano",
  "Recursos que potencian el desarrollo y la comunicación",
];

const FamiliesDesktop = () => {
  return (
    <div className="family-dt">
      <Link to="/servicios" className="family-dt__back">
        <ChevronLeft size={18} />
        <span>Servicios</span>
      </Link>

      {/* Hero */}
      <div className="family-dt__hero">
        <img src={miniatura1} alt="Talleres para Familias" className="family-dt__hero-img" />
        <div className="family-dt__hero-overlay">
          <h1 className="family-dt__hero-title">Talleres para Familias</h1>
        </div>
      </div>

      <div className="family-dt__content">
        <p className="family-dt__intro">
          Espacios diseñados para acompañar a familias en la crianza y educación
          de sus hijos. Aprende estrategias prácticas y comparte experiencias con
          otras familias.
        </p>

        {/* Card destacada + beneficios side by side */}
        <div className="family-dt__two-col">
          <div className="family-dt-card">
            <img
              src={miniatura2}
              alt="Fortaleciendo el aprendizaje en casa"
              className="family-dt-card__img"
            />
            <div className="family-dt-card__body">
              <h2 className="family-dt-card__title">
                Fortaleciendo el Aprendizaje en Casa
              </h2>
              <p className="family-dt-card__text">
                El hogar es el primer espacio de aprendizaje
                Cuando las familias participan, el desarrollo se potencia.
                Acompañamos con estrategias concretas para fortalecer la comunicación, la escucha y el lenguaje en el día a día.

  
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSduT8Esk_kMgGiOj-AiX2NA_jVmL5aUfZHtj6paxGKKWtvpUg/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="family-dt-card__btn">Más información</button>
              </a>
            </div>
          </div>

          <div className="family-dt-benefits">
            <h3 className="family-dt-benefits__title">
              ¿Por qué participar en nuestros talleres?
            </h3>
            <ul className="family-dt-benefits__list">
              {benefits.map((b, i) => (
                <li key={i} className="family-dt-benefits__item">
                  <span className="family-dt-benefits__check">✓</span>
                  <p>{b}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamiliesDesktop;
