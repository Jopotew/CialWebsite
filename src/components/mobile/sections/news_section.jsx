import ImageCard from "../ui/reusables/image_card";
import "./css/news_section.css";
import mini6 from "../../../assets/home/mini6.jpg";
const news = [
  {
    title: "Últimas noticias",
    description:
      "Un espacio para compartir experiencias, conocimientos y novedades que nos ayudan a crecer juntos.",
    img: mini6,
    to: "/novedades/noticias",
  },
  {
    title: "Nuestro Blog",
    description:
      "Ideas, herramientas y evidencia para acompañar el desarrollo del lenguaje, la audición y la comunicación en la vida cotidiana.",
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