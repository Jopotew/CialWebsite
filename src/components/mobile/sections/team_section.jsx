import ImageCard from "../ui/reusables/image_card";
import "./css/team_section.css";

const members = [
  {
    title: "Equipo de Audiología",
    description:
      "Profesionales altamente capacitados en diagnóstico y tratamiento auditivo. Con más de 15 años acompañando a niños y adultos.",
    img: "https://images.unsplash.com/photo-1731419711677-cb2387cfc557?w=1080",
    to: "/equipo",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2 className="team-section__title">Nuestro Equipo</h2>

      {members.map((member) => (
        <ImageCard key={member.title} {...member} />
      ))}
    </section>
  );
};

export default TeamSection;