import { Link } from "react-router-dom";
import { ChevronLeft, ExternalLink } from "lucide-react";
import valen from "../../../assets/news/valen.png";
import maxi from "../../../assets/news/maxi.png";
import bastian from "../../../assets/news/bastian.png";
import suyai from "../../../assets/news/suyai.png";
import anahi from "../../../assets/news/anahi.png";
import lolo from "../../../assets/news/lolo.png";
import "./news_mobile.css";

const noticias = [
  {
    id: 1,
    title: 'Historias que inspiran: Valentin',
    description: "Valentín Artus, el fotógrafo aeronáutico y de cancha que 'superó todas las barreras', expondrá en la vecina ciudad. Una historia de superación en una emotiva jornada.",
    img: valen,
    url: "https://www.lmcipolletti.com/provincia/el-dia-valentin-cumple-anos-y-un-gran-sueno-al-presentar-su-obra-n1169942",
    type: "articulo",
    source: "lmcipolletti.com",
  },
  {
    id: 2,
    title: "Historias que inspiran: Maxi",
    description: "Maxi, el nene de Roca que nació con sordera y cambió su vida: a cada paso, un nuevo sonido.",
    img: maxi,
    url: "https://www.instagram.com/reel/C20m_cKOnb5/?igsh=OXBzcWVyN2t4YWx0",
    type: "video",
    source: "Instagram",
  },
  {
    id: 3,
    title: "La experiencia de: Bastian",
    description: "Con la llegada de profesionales de alto nivel, se realizó una intervención en Roca y se les colocaron implantes. Ahora los dos pequeños podrán conocer los sonidos y empezar a hablar.",
    img: bastian,
    url: "https://www.rionegro.com.ar/sociedad/un-bebe-y-un-nene-podran-volver-a-escuchar-tras-una-importante-cirugia-en-el-hospital-de-roca-2662696/",
    type: "articulo",
    source: "rionegro.com.ar",
  },
  {
    id: 4,
    title: "La experiencia de: Suyai",
    description: "La novedosa cirugía que se hizo en el Alto Valle y que permitirá oír a una nena",
    img: suyai,
    url: "https://www.lmneuquen.com/la-novedosa-cirugia-que-se-hizo-el-alto-valle-y-que-permitira-oir-una-nena-n878440",
    type: "articulo",
    source: "LM Neuquén",
  },
  {
    id: 5,
    title: "Escuchar por primera vez: Anahí y Aneley",
    description: "*ESCUCHAR POR PRIMERA VEZ*: Anahí y Aneley, dos niñas neuquinas de 1 y 5 años escucharon por primera vez.",
    img: anahi,
    url: "https://www.instagram.com/reel/DNEmHv4MgWa/?igsh=dHVodmdtZTE4djNt",
    type: "video",
    source: "Instagram",
  },
  {
    id: 6,
    title: "Las antenitas de Lolo",
    description: "Lorenzo tiene siete años, es de Neuquén y adquirió una hipoacusia bilateral al nacer. Fue implantado y la sordera quedó atrás",
    img: lolo,
    url: "https://www.rionegro.com.ar/sociedad/las-antenitas-de-lolo-conocio-los-sonidos-con-implantes-cocleares-y-su-vida-cambio-para-siempre/",
    type: "articulo",
    source: "Río Negro",
  },
];




const typeBadge = {
  video:   { label: "▶ Ver video",   bg: "#fee2e2", color: "#dc2626" },
  articulo: { label: "↗ Leer artículo", bg: "#ede9fe", color: "#7c3aed" },
};

const NoticiasListPage = () => {
  return (
    <div className="noticias-list-page">
      <Link to="/novedades" className="noticias-list-page__back">
        <ChevronLeft size={18} />
        <span>Novedades</span>
      </Link>

      <div className="noticias-list-page__header">
        <h1 className="noticias-list-page__title">Noticias</h1>
        <p className="noticias-list-page__subtitle">
          Artículos y videos seleccionados sobre audiología y fonoaudiología
        </p>
      </div>

      <div className="noticias-list-page__list">
        {noticias.map((n) => {
          const badge = typeBadge[n.type];
          return (
            <a
              key={n.id}
              href={n.url}
              target="_blank"
              rel="noopener noreferrer"
              className="noticia-card"
            >
              <div className="noticia-card__img-wrap">
                <img src={n.img} alt={n.title} className="noticia-card__img" />
                <span
                  className="noticia-card__badge"
                  style={{ backgroundColor: badge.bg, color: badge.color }}
                >
                  {badge.label}
                </span>
              </div>
              <div className="noticia-card__body">
                <div className="noticia-card__source">
                  <ExternalLink size={12} />
                  <span>{n.source}</span>
                </div>
                <h2 className="noticia-card__title">{n.title}</h2>
                <p className="noticia-card__desc">{n.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default NoticiasListPage;