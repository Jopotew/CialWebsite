
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import HeroSlider from '../../components/body/HeroSlider';

import DoubleImageBlock from '../../components/body/DoubleImageBlock';
import TestimonialSection from '../../components/body/TestimonialSection';
import ServicesCards from '../../components/body/ServicesCards';
import CenteredTextBlock from '../../components/body/CenteredTextBlock';
import InfoSectionRightImage from '../../components/body/InfoSectionRightImage';

import { sectionConfigs } from '../../config/home/SectionConfig';

import service1 from '../../assets/Body/Inicio/29.png';
import service2 from '../../assets/Body/Inicio/27.png';
import service3 from '../../assets/Body/Inicio/28.png';
import slide2 from '../../assets/Body/Inicio/10.jpeg';
import slide3 from '../../assets/Body/Inicio/24.png';
import slide1 from '../../assets/Body/Inicio/25.png';
import slide4 from '../../assets/Body/Inicio/4.jpeg';
import double_image_block1 from '../../assets/Body/Inicio/8.jpeg';
import double_image_block2 from '../../assets/Body/Inicio/12.jpeg';
import group from '../../assets/Body/Nosotros/all.jpg'; 
import { textos } from '../../textos/home/textos';

const heroSlides = [
  {
    image: slide1,
    title: textos.slider.slide1.titulo,
    text: textos.slider.slide1.texto,
    link: textos.slider.slide1.link,
    showButton: textos.slider.slide1.showButton
  },
  {
    image: slide2,
    title: textos.slider.slide2.titulo,
    text: textos.slider.slide2.texto,
    link: textos.slider.slide2.link,
    showButton: textos.slider.slide2.showButton
  },
  {
    image: slide3,
    title: textos.slider.slide3.titulo,
    text: textos.slider.slide3.texto,
    link: textos.slider.slide3.link,
    showButton: textos.slider.slide3.showButton
  }, 
  {
    image: slide4,
    title: textos.slider.slide4.titulo,
    text: textos.slider.slide4.texto,
    link: textos.slider.slide4.link,
    showButton: textos.slider.slide4.showButton
  }
];

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      

      <div id="hero image">
        <HeroSlider slides={heroSlides} />
      </div>

      <div id="Home">


        <CenteredTextBlock
          title= {textos.intro.titulo}
          paragraphs={textos.intro.parrafos}
        />  
        
        <InfoSectionRightImage
          title={textos.nuestro_equipo.titulo}
          paragraphs={textos.nuestro_equipo.parrafos}
          imageSrc={group}
          linkLabel='Conocenos!'
          linkTo={"/equipo"}
        />
        
        <DoubleImageBlock
          title={"Conoce sobre algunos de nuestros servicios"}
          items={[
            {
              title: 'Audiología',
              image: double_image_block1,
              text: 'Acompañamos el desarrollo de la comunicación, el habla y el lenguaje desde una perspectiva integral, contemplando la singularidad de cada niño, niña o adolescente y reconociendo la diversidad de formas en las que las personas se comunican.',
              link: '/audiologia',
            },
            {
              title: 'Fonoaudiología',
              image: double_image_block2,
              text: 'Promovemos la exploración activa del entorno, el desarrollo de la atención, la comunicación y las actitudes emocionales que favorecen la autonomía, el juego compartido y los procesos de pensamiento.',
              link: '/fonoaudiologia',
            },
          ]}
        />

        <TestimonialSection />

        <ServicesCards
          services={[
            {
              title: "Cursos y talleres de capacitación",
              image: service1,
              text: "Proporcionamos talleres didacticos para profesionales y para las familias que necesiten.",
              link: "/talleres"
            },
            {
              title: "Ultimas noticias",
              image: service2,
              text: "Últimas Noticias y Actualizaciones del Entorno de CIAL: Información Relevante sobre la comunidad!",
              link: "/noticias"
            },
            {
              title: "Nuestro Blog",
              image: service3,
              text: "Compartimos recursos educativos, estrategias y experiencias.",
              link: "/blog"
            }
          ]}
        />
      </div>

      
    </>
  );
}

export default Home;
