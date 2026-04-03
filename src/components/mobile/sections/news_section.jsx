import ImageCard from "../ui/reusables/image_card";
import "./css/news_section.css";
import mini6 from "../../../assets/home/mini6.jpg";
const news = [
  {
    title: "Últimas noticias",
    description:
      "Mantente informado sobre las últimas noticias en el campo de la audiología y fonoaudiología. Tips y recomendaciones para el cuidado...",
    img: mini6,
    to: "/novedades/noticias",
  },
  {
    title: "Nuestro Blog",
    description:
      "Lee nuestros artículos sobre desarrollo del lenguaje, prevención auditiva y muchos temas más que te ayudarán a cuidar tu salud...",
    img: "https://images.unsplash.com/photo-1771408427146-09be9a1d4535?w=1080",
    to: "/novedades/blog",
  },
];

const NewsSection = () => {
  return (
    <section className="news-section">
      <h2 className="news-section__title">Historias que inspiran!</h2>

      {news.map((item) => (
        <ImageCard key={item.title} {...item} variant="link" />
      ))}
    </section>
  );
};

export default NewsSection;