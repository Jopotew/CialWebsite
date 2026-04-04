import { Link } from "react-router-dom";
import "./css/team_section.css";
import mini_all from "../../../assets/home/mini-team.jpg";
import { home_text } from "../../../textos/home";

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2 className="team-section__title">Nuestro Equipo</h2>

      <div className="team-section__card">
        <img src={mini_all} alt="Nuestro Equipo" className="team-section__img" />
        <div className="team-section__body">
          {home_text.nuestro_equipo.parrafos.map((p, i) => (
            <p key={i} className="team-section__p">{p}</p>
          ))}
          <Link to="/equipo" className="team-section__btn">
            Conocer más
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;