import ImageCard from "../ui/reusables/image_card";
import "./css/news_section.css";

const news = [
  {
    title: "Cómo y cuándo es capacitación",
    description:
      "Conoce cómo y desde qué edad es importante realizar evaluaciones auditivas en los niños y qué hacer si se detecta un problema...",
    img: "https://images.unsplash.com/photo-1753705745770-6ceefc22ed33?w=1080",
    to: "/news/capacitacion",
  },
  {
    title: "Últimas noticias",
    description:
      "Mantente informado sobre las últimas noticias en el campo de la audiología y fonoaudiología. Tips y recomendaciones para el cuidado...",
    img: "https://images.unsplash.com/photo-1692160756327-f0481e950b28?w=1080",
    to: "/news/ultimas",
  },
  {
    title: "Nuestro Blog",
    description:
      "Lee nuestros artículos sobre desarrollo del lenguaje, prevención auditiva y muchos temas más que te ayudarán a cuidar tu salud...",
    img: "https://images.unsplash.com/photo-1771408427146-09be9a1d4535?w=1080",
    to: "/news/blog",
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