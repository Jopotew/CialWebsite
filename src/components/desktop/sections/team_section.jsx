import { Link } from "react-router-dom";
import "./css/team_section.css";
import mini_all from "../../../assets/home/mini-team.jpg";
import { home_text } from "../../../textos/home";

const TeamSection = () => {
  return (
    <section className="team-section-desktop">
      <div className="team-section-desktop__inner">
        <div className="team-section-desktop__text">
          <h2 className="team-section-desktop__title">Nuestro Equipo</h2>
          <p className="team-section-desktop__p">
            {home_text.nuestro_equipo.parrafos[0]}
          </p>
          <p className="team-section-desktop__p">
            {home_text.nuestro_equipo.parrafos[1]}
          </p>
          <Link to="/equipo" className="team-section-desktop__btn">
            Conocer al equipo
          </Link>
        </div>
        <div className="team-section-desktop__img-wrap">
          <img
            src={mini_all}
            alt="Nuestro Equipo"
            className="team-section-desktop__img"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
