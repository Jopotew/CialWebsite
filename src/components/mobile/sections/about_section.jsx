import { Link } from "react-router-dom";
import "./css/about_section.css";
import { home_text } from "../../../textos/home";
const AboutSection = () => {
  return (
    <section className="about-section">
      <h2 className="about-section__title">
        {home_text.intro.titulo}
      </h2>

      <p className="about-section__text">
        {home_text.intro.parrafos[0]}
      </p>

      <p className="about-section__text">
        {home_text.intro.parrafos[1]}
      </p>

    </section>
  );
};

export default AboutSection;