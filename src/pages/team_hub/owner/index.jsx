import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import "./owner.css";

import profileImg from "../../../assets/Body/Nosotros/lorena2.jpg";
import gal1  from "../../../assets/Body/Owner/1.jpg";
import gal2  from "../../../assets/Body/Owner/2.jpg";
import gal3  from "../../../assets/Body/Owner/3.jpg";
import gal4  from "../../../assets/Body/Owner/4.jpg";
import gal5  from "../../../assets/Body/Owner/5.jpg";
import gal6  from "../../../assets/Body/Owner/6.jpg";
import gal7  from "../../../assets/Body/Owner/7.jpg";
import gal8  from "../../../assets/Body/Owner/8.jpg";
import gal9  from "../../../assets/Body/Owner/9.jpg";
import gal10 from "../../../assets/Body/Owner/10.jpg";

import { text } from "../../../textos/owner_speech";

const Slider = SliderImport.default ?? SliderImport;

const gallery = [
  { src: gal1,  caption: "XI Congreso Iberoamericano de implantes cocleares y ciencias afines GICCA 2025" },
  { src: gal2,  caption: "CI2025 BOSTON - Conference on Cochlear Implants - Marzo 2025." },
  { src: gal4,  caption: "Junto a Blair Richlin y Becky Clem. CI2025 BOSTON." },
  { src: gal3,  caption: "Con la Dra. Teresa Caraway, CEO de Hearing First. CI2025 BOSTON." },
  { src: gal5,  caption: "Jornada de Audiología, Hospital Castro Rendón, Neuquén Capital." },
  { src: gal6,  caption: "Jornada de Audiología, Hospital Castro Rendón, Neuquén Capital." },
  { src: gal7,  caption: "Jornada de Audiología, Hospital Castro Rendón, Neuquén Capital." },
  { src: gal8,  caption: "Jornadas Científicas en Rehabilitación - PAM Argentina. Colonia Uruguay." },
  { src: gal9,  caption: "Junto a rehabilitadoras de todo el país. Colonia Uruguay." },
  { src: gal10, caption: "2nd Rehabilitation Training Course. Medel. Marzo 2025." },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: false,
};

const OwnerPage = () => {
  return (
    <div className="owner-page">

      {/* Botón volver */}
      <Link to="/equipo" className="owner-page__back">
        <ChevronLeft size={18} />
        <span>Equipo</span>
      </Link>

      {/* Header con foto */}
      <div className="owner-header">
        <img src={profileImg} alt="Lorena Valenzuela" className="owner-header__img" />
        <div className="owner-header__overlay">
          <span className="owner-header__badge">Directora de C.I.A.L</span>
          <h1 className="owner-header__name">Lic. María Lorena Valenzuela</h1>
          <p className="owner-header__title">
            LSLS Cert. AVT · Fonoaudióloga · Prof. Para sordos
          </p>
        </div>
      </div>

      {/* Quote */}
      <div className="owner-quote">
        <span className="owner-quote__mark">"</span>
        <p className="owner-quote__text">Escuchar nos hace bien</p>
        <span className="owner-quote__mark">"</span>
      </div>

      {/* Bio */}
      <div className="owner-bio">
        {text.owner.paragraph.map((p, i) => (
          <p key={i} className="owner-bio__p">{p}</p>
        ))}
      </div>

      {/* Galería */}
      <div className="owner-gallery">
        <h2 className="owner-gallery__title">Galería</h2>
        <Slider {...sliderSettings}>
          {gallery.map((item, i) => (
            <div key={i} className="owner-gallery__slide">
              <img src={item.src} alt={item.caption} className="owner-gallery__img" />
              <p className="owner-gallery__caption">{item.caption}</p>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
};

export default OwnerPage;