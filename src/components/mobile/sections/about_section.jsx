import { Link } from "react-router-dom";
import "./css/about_section.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <h2 className="about-section__title">¿Quiénes somos?</h2>

      <p className="about-section__text">
        Somos un equipo comprometido con tu bienestar auditivo y comunicativo.
        Con más de 15 años de experiencia, ofrecemos servicios especializados
        en audiología y fonoaudiología para niños y adultos.
      </p>

      <p className="about-section__text">
        Nuestro labor es proporcionarte la mejor atención personalizada,
        utilizando tecnología de punta y tratamientos innovadores que
        garanticen tu bienestar y el de tu familia.
      </p>

      <Link to="/equipo" className="about-section__btn">
        Conocer más
      </Link>
    </section>
  );
};

export default AboutSection;