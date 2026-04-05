import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";
import "./spaces_mobile.css";

import img1 from "../../../assets/spaces/1.png";
import img2 from "../../../assets/spaces/2.png";
import img3 from "../../../assets/spaces/3.png";
import img4 from "../../../assets/spaces/4.png";
import img6 from "../../../assets/spaces/psicomotricidad.png";
import img5 from "../../../assets/spaces/5.jpg";

const espacios = [
  {
    title: "Audiología",
    description: "Cuidamos la salud auditiva en todas las edades. Evaluación, diagnóstico, equipamiento y seguimiento.",
    img: img1,
    to: "/espacios/audiologia",
  },
  {
    title: "Fonoaudiología",
    description: "Acompañamos el desarrollo del habla, el lenguaje y la comunicación. Integramos distintas estrategias para favorecer la comunicación en cada contexto.",
    img: img4,
    to: "/espacios/fonoaudiologia",
  },
  {
    title: "Psicología",
    description: "Sostenemos el bienestar emocional en cada etapa de la vida. Acompañamiento para niños, adolescentes y adultos.",
    img: img5,
    to: "/espacios/psicologia",
  },
  {
    title: "Psicopedagogía",
    description: "Favorecemos los procesos de aprendizaje. Evaluación y acompañamiento en el ámbito educativo.",
    img: img3,
    to: "/espacios/psicopedagogia",
  },
  {
    title: "Psicomotricidad",
    description: "Integramos cuerpo, movimiento y desarrollo. Trabajo sobre habilidades motoras y organización corporal.",
    img: img6,
    to: "/espacios/psicomotricidad",
  },
  {
    title: "Rehabilitación Auditiva",
    description: "Transformamos el acceso al sonido en comunicación significativa. Acompañamos el desarrollo auditivo y del lenguaje en la vida cotidiana.",
    img: img2,
    to: "/espacios/rehabilitacion-auditiva",
  },
];

const EspaciosPage = () => {
  return (
    <div className="espacios-page">

      <div className="espacios-page__header">
        <h1 className="espacios-page__title">Áreas de trabajo</h1>
        <p className="espacios-page__subtitle">
          Integramos distintas disciplinas para acompañar cada trayectoria desde una mirada integral, en alianza con cada familia.
        </p>
      </div>

      <div className="espacios-page__grid">
        {espacios.map((e) => (
          <Link to={e.to} key={e.title} className="espacio-card">
            <img src={e.img} alt={e.title} className="espacio-card__img" />
            <div className="espacio-card__body">
              <h2 className="espacio-card__title">{e.title}</h2>
              <p className="espacio-card__desc">{e.description}</p>
              <div className="espacio-card__footer">
                <span className="espacio-card__cta">Ver más</span>
                <ArrowRight size={16} className="espacio-card__arrow" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EspaciosPage;