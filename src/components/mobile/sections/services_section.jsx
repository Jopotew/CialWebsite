import ImageCard from "../ui/reusables/image_card";
import "./css/services_section.css";

const services = [
  {
    title: "Audiología",
    description:
      "Realizamos estudios completos de audición en niños y adultos. Contamos con equipos especializados para diagnóstico y tratamiento auditivo.",
    img: "https://images.unsplash.com/photo-1692160756327-f0481e950b28?w=1080",
    to: "/servicios/espacios/audiologia",
  },
  {
    title: "Fonoaudiología",
    description:
      "Tratamiento y terapia del lenguaje y la comunicación. Trabajamos con niños y adultos en problemas de habla, lenguaje y deglución.",
    img: "https://images.unsplash.com/photo-1610890912938-ddcf5f9d4256?w=1080",
    to: "/servicios/espacios/fonoaudiologia",
  },
  {
    title: "Talleres y Espacios",
    description:
      "Ofrecemos talleres grupales de estimulación del lenguaje y desarrollo de habilidades comunicativas. Espacios diseñados para el aprendizaje y la interacción.",
    img: "https://images.unsplash.com/photo-1766932901295-d4185660341b?w=1080",
    to: "/servicios",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2 className="services-section__title">
        Conoce sobre algunos de nuestros servicios
      </h2>

      {services.map((service) => (
        <ImageCard key={service.title} {...service} />
      ))}
    </section>
  );
};

export default ServicesSection;