
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
import double_image_block1 from '../../assets/Body/Inicio/8.jpeg';
import double_image_block2 from '../../assets/Body/Inicio/12.jpeg';
import noticia_img1 from '../../assets/Body/Inicio/18.jpeg'; 
import { textos } from '../../textos/home/textos';

const heroSlides = [
  {
    image: slide1,
    title: 'Centro Integral de Audicion y Lenguaje',
    text: 'Somos un equipo interdisciplinario con raíces patagónicas y más de veinte años de trayectoria',
    link: '/nosotros',
    showButton: true
  },
  {
    image: slide2,
    title: 'Terapias adaptadas a cada etapa',
    text: 'Individualizamos cada proceso para lograr los mejores resultados.',
    link: '#inicio',
    showButton: false
  },
  {
    image: slide3,
    title: 'Talleres disponibles!',
    text: 'Revisa nuestros talleres para padres y profesionales.',
    link: '/talleres'
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
          imageSrc={noticia_img1}
          linkLabel='Conocenos!'
          linkTo={"/equipo"}
        />
        
        <DoubleImageBlock
          title={"Conoce sobre algunos de nuestros servicios"}
          items={[
            {
              title: 'Fonoaudiologia',
              image: double_image_block1,
              text: 'Acompañamos el desarrollo de la comunicación, el habla y el lenguaje desde una perspectiva integral, contemplando la singularidad de cada niño, niña o adolescente y reconociendo la diversidad de formas en las que las personas se comunican.',
              link: '/fonoaudiologia',
            },
            {
              title: 'Psicomotricidad',
              image: double_image_block2,
              text: 'Promovemos la exploración activa del entorno, el desarrollo de la atención, la comunicación y las actitudes emocionales que favorecen la autonomía, el juego compartido y los procesos de pensamiento.',
              link: '/psicomotricidad',
            },
          ]}
        />

        <TestimonialSection />

        <ServicesCards
          services={[
            {
              title: "Talleres para todos!",
              image: service1,
              text: "Proporcionamos talleres didacticos para profesionales y para los padres que necesiten.",
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
              text: "Compartimos recursos educativos, estrategias y experiencias sobre tratamientos para niños con dificultades del habla.",
              link: "/blog"
            }
          ]}
        />
      </div>

      
    </>
  );
}

export default Home;
