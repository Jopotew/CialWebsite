import { Link } from "react-router-dom";
import "./team_desktop.css";

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
    description: "LSLS Cert. AVT · Fonoaudióloga · Prof. Para sordos · Directora de C.I.A.L",
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

const TeamPageDesktop = () => {
  return (
    <div className="team-page-dt">
      <div className="team-page-dt__header">
        <h1 className="team-page-dt__title">Nuestro Equipo</h1>
        <p className="team-page-dt__subtitle">
          Profesionales especializados comprometidos con tu bienestar
        </p>
      </div>

      {/* Card destacada Lorena */}
      {members
        .filter((m) => m.isOwner)
        .map((m) => (
          <div className="team-page-dt__owner-wrap" key={m.name}>
            <Link to={m.to} className="team-owner-dt">
              <div className="team-owner-dt__img-wrap">
                <img src={m.image} alt={m.name} className="team-owner-dt__img" />
              </div>
              <div className="team-owner-dt__body">
                <span className="team-owner-dt__badge">Directora</span>
                <h2 className="team-owner-dt__name">{m.name}</h2>
                <p className="team-owner-dt__desc">{m.description}</p>
                <span className="team-owner-dt__cta">Ver perfil completo →</span>
              </div>
            </Link>
          </div>
        ))}

      {/* Grilla del equipo */}
      <div className="team-grid-dt">
        {members
          .filter((m) => !m.isOwner)
          .map((m) => (
            <div key={m.name} className="team-grid-dt__card">
              <img src={m.image} alt={m.name} className="team-grid-dt__img" />
              <div className="team-grid-dt__body">
                <h3 className="team-grid-dt__name">{m.name}</h3>
                <p className="team-grid-dt__desc">{m.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TeamPageDesktop;
