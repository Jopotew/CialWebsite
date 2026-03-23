import { Link } from "react-router-dom";
import "./all.css";

import adriana   from "../../assets/Body/Nosotros/adriana.png";
import ana       from "../../assets/Body/Nosotros/ana.png";
import belen     from "../../assets/Body/Nosotros/belen.png";
import gimena    from "../../assets/Body/Nosotros/gimena.png";
import maria_sol from "../../assets/Body/Nosotros/maria_sol.jpg";
import nati      from "../../assets/Body/Nosotros/nati.png";
import juliana   from "../../assets/Body/Nosotros/juliana.png";
import eva       from "../../assets/Body/Nosotros/eva.png";
import lorena    from "../../assets/Body/Nosotros/lorena2.jpg";

const members = [
  {
    image: lorena,
    name: "Lic. María Lorena Valenzuela",
    description: "LSLS Cert. AVT · Fonoaudióloga · Prof. Para sordos · Fundadora de CIAL",
    isOwner: true,
    to: "/equipo/lorena-valenzuela",
  },
  {
    image: adriana,
    name: "Lic. Adriana Dietrich",
    description: "Psicomotricidad",
  },
  {
    image: maria_sol,
    name: "Lic. María Sol Trasarti",
    description: "Fonoaudióloga · Audióloga",
  },
  {
    image: ana,
    name: "Lic. Ana Swchab.",
    description: "Fonoaudióloga · Prompt Bridging Trained · Especialista en CAA",
  },
  {
    image: belen,
    name: "Lic. Belén Montecino",
    description: "Fonoaudióloga · Audióloga",
  },
  {
    image: eva,
    name: "Lic. M. Eva Skruta",
    description: "Psicopedagoga",
  },
  {
    image: juliana,
    name: "Lic. Juliana Lamela",
    description: "Psicopedagoga",
  },
  {
    image: nati,
    name: "Lic. Natasha Carballo",
    description: "Psicóloga",
  },
  {
    image: gimena,
    name: "Lic. Gimena Aravena",
    description: "Psicóloga",
  },
];

const TeamPage = () => {
  return (
    <div className="team-page">
      <h1 className="team-page__title">Nuestro Equipo</h1>

      {/* Card destacada de Lorena */}
      {members
        .filter((m) => m.isOwner)
        .map((m) => (
          <Link to={m.to} key={m.name} className="team-card team-card--owner">
            <div className="team-card__img-wrap">
              <img src={m.image} alt={m.name} className="team-card__img" />
            </div>
            <div className="team-card__body">
              <span className="team-card__badge">Fundadora</span>
              <h2 className="team-card__name">{m.name}</h2>
              <p className="team-card__desc">{m.description}</p>
              <span className="team-card__cta">Ver perfil completo →</span>
            </div>
          </Link>
        ))}

      {/* Grilla del resto del equipo */}
      <div className="team-grid">
        {members
          .filter((m) => !m.isOwner)
          .map((m) => (
            <div key={m.name} className="team-grid__card">
              <img src={m.image} alt={m.name} className="team-grid__img" />
              <div className="team-grid__body">
                <h3 className="team-grid__name">{m.name}</h3>
                <p className="team-grid__desc">{m.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TeamPage;