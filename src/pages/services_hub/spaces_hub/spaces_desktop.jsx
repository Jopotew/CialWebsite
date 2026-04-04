import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";
import "./spaces_desktop.css";

const espacios = [
  {
    title: "Audiología",
    description: "Evaluación, diagnóstico, equipamiento y seguimiento de la salud auditiva en todas las edades. El acceso auditivo oportuno es clave para el desarrollo del lenguaje, el aprendizaje y la participación plena.",
    img: "https://images.unsplash.com/photo-1692160756327-f0481e950b28?w=1080",
    to: "/espacios/audiologia",
  },
  {
    title: "Fonoaudiología",
    description: "Tratamiento del lenguaje, habla y comunicación.",
    img: "https://images.unsplash.com/photo-1610890912938-ddcf5f9d4256?w=1080",
    to: "/espacios/fonoaudiologia",
  },
  {
    title: "Psicología",
    description: "Acompañamiento emocional y psicológico para niños y adultos.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1080",
    to: "/espacios/psicologia",
  },
  {
    title: "Psicopedagogía",
    description: "Acompañamiento integral de los procesos de aprendizaje.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1080",
    to: "/espacios/psicopedagogia",
  },
  {
    title: "Psicomotricidad",
    description: "Desarrollo motriz y corporal en niños.",
    img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1080",
    to: "/espacios/psicomotricidad",
  },
  {
    title: "Rehabilitación Auditiva",
    description: "Acompañamos el desarrollo auditivo y comunicativo a través de intervenciones personalizadas centradas en la familia. Potenciamos el acceso al sonido para favorecer el lenguaje, la comunicación y la participación en la vida cotidiana.",
    img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1080",
    to: "/espacios/rehabilitacion-auditiva",
  },
];

const EspaciosDesktop = () => {
  return (
    <div className="espacios-dt">

      <div className="espacios-dt__header">
        <h1 className="espacios-dt__title">Nuestros Espacios</h1>
        <p className="espacios-dt__subtitle">
          Servicios especializados para cada necesidad
        </p>
      </div>

      <div className="espacios-dt__grid">
        {espacios.map((e) => (
          <Link to={e.to} key={e.title} className="espacio-dt-card">
            <img src={e.img} alt={e.title} className="espacio-dt-card__img" />
            <div className="espacio-dt-card__body">
              <h2 className="espacio-dt-card__title">{e.title}</h2>
              <p className="espacio-dt-card__desc">{e.description}</p>
              <div className="espacio-dt-card__footer">
                <span className="espacio-dt-card__cta">Conocer más</span>
                <ArrowRight size={16} className="espacio-dt-card__arrow" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EspaciosDesktop;
