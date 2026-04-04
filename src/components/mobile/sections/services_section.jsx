import ImageCard from "../ui/reusables/image_card";
import "./css/services_section.css";
import mini5 from "../../../assets/home/mini5.jpg";

const services = [
  {
    title: "Talleres",
    description:
      "Generamos espacios de encuentro, diálogo y aprendizaje para familias y profesionales. Creemos en la construcción conjunta como motor del desarrollo.",
    img: mini5,
    to: "/servicios/",
  },
  {
    title: "Asesorias y Supervisiones",
    description:
      "Tratamiento y terapia del lenguaje y la comunicación. Trabajamos con niños y adultos en problemas de habla, lenguaje y deglución.",
    img: "https://images.unsplash.com/photo-1610890912938-ddcf5f9d4256?w=1080",
    to: "/servicios/",
  },
  {
    title: "Nuestros espaciosEspacios",
    description:
      "Diseñados para el aprendizaje y la interacción.",
    img: "https://images.unsplash.com/photo-1766932901295-d4185660341b?w=1080",
    to: "/espacios",
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