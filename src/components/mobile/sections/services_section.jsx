import ImageCard from "../ui/reusables/image_card";
import "./css/services_section.css";
import mini5 from "../../../assets/home/mini5.jpg";
import service1 from "../../../assets/home/service3.jpg";
import service2 from "../../../assets/home/service2.jpg";

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
      "Pensado para impulsar tu desarrollo profesional, brindando una formación integral y de alta calidad",
    img: service1,
    to: "/servicios/",
  },
  {
    title: "Áreas de trabajo",
    description:
      "Integramos distintas disciplinas para acompañar cada trayectoria desde una mirada integral, en alianza con cada familia.",
    img: service2,
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