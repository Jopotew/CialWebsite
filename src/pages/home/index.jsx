import Section from "../../components/mobile/section";
import Title from "../../components/mobile/title";
import TextBlock from "../../components/mobile/text_block";
import Hero from "../../components/mobile/hero";
import ImageCard from "../../components/mobile/image_card";

import "./home.css";

const Home = () => {
  return (
    <div className="home_container">
      
      <Hero
        title="Cuidando tu audición"
        subtitle="Servicios especializados en audiología y fonoaudiología"
      />

      <Section>
        <Title>¿Quiénes somos?</Title>

        <TextBlock>
          Somos un equipo comprometido con tu bienestar auditivo y comunicativo.
        </TextBlock>

        <TextBlock>
          Con más de 15 años de experiencia, ofrecemos servicios especializados.
        </TextBlock>
      </Section>

      <Section>
        <Title>Nuestro Equipo</Title>
        <div className="placeholder_box"></div>
      </Section>

    </div>
  );
};

export default Home;