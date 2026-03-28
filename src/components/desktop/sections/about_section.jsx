import { Link } from "react-router-dom";
import "./css/about_section.css";
import { home_text } from "../../../textos/home";

const AboutSection = () => {
  return (
    <section className="about-section-desktop">
      <div className="about-section-desktop__inner">
        <div className="about-section-desktop__text">
          <h2 className="about-section-desktop__title">
            {home_text.intro.titulo}
          </h2>
          <p className="about-section-desktop__p">
            {home_text.intro.parrafos[0]}
          </p>
          <p className="about-section-desktop__p">
            {home_text.intro.parrafos[1]}
          </p>
          <Link to="/equipo" className="about-section-desktop__btn">
            Conocer más
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
