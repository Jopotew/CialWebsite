import { Link } from "react-router-dom";
import "./css/news_section.css";
import mini6 from "../../../assets/home/mini6.jpg";

const news = [
  {
    title: "Últimas noticias",
    description:
      "Mantente informado sobre las últimas noticias en el campo de la audiología y fonoaudiología. Tips y recomendaciones para el cuidado auditivo.",
    img: mini6,
    to: "/novedades/noticias",
  },
  {
    title: "Nuestro Blog",
    description:
      "Lee nuestros artículos sobre desarrollo del lenguaje, prevención auditiva y muchos temas más que te ayudarán a cuidar tu salud.",
    img: "https://images.unsplash.com/photo-1771408427146-09be9a1d4535?w=1080",
    to: "/novedades/blog",
  },
];

const NewsSection = () => {
  return (
    <section className="news-section-desktop">
      <h2 className="news-section-desktop__title">Historias que inspiran!</h2>
      <div className="news-section-desktop__grid">
        {news.map((item) => (
          <Link to={item.to} key={item.title} className="news-card-desktop">
            <img src={item.img} alt={item.title} className="news-card-desktop__img" />
            <div className="news-card-desktop__body">
              <h3 className="news-card-desktop__title">{item.title}</h3>
              <p className="news-card-desktop__desc">{item.description}</p>
              <span className="news-card-desktop__cta">CONOCER MÁS →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
