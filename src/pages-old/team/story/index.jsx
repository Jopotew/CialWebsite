import React from 'react';
import Historia from '../../../components/Nosotros/Historia';
import BloqueInfo from '../../../components/Nosotros/BloqueInfo';


import './Nosotros.css';

import img1 from '../../../assets/Body/Inicio/22.png';
import img2 from '../../../assets/Body/Inicio/23.png';
import img3 from '../../../assets/Body/Inicio/24.png';

function Nosotros() {
  return (
    <main className="nosotros">
        
      <Historia images={[img1]} />

      <BloqueInfo
        title="Misión"
        images={[]}
        paragraphs={[
          "En CIAL, nuestra misión es brindar un tratamiento de vanguardia para bebés, niños y adolescentes que necesiten apoyo en su desarrollo del lenguaje y comunicación. Nos comprometemos a ofrecer un enfoque personalizado y efectivo a través de un equipo de profesionales altamente capacitados y en constante actualización, asegurando que cada niño alcance su máximo potencial. Además, buscamos compartir nuestra experiencia y conocimiento con otros profesionales mediante la capacitación continua y programas de formación clínica."
        ]}
      />

      <BloqueInfo
        title="Visión"
        images={[img3]}
        paragraphs={[
          "Nuestra visión es convertirnos en un centro líder en el tratamiento de trastornos del habla y lenguaje, destacándonos por la calidad de nuestro equipo de profesionales y el enfoque innovador que implementamos. Aspiramos a ser una referencia en el campo, proporcionando no solo atención de calidad, sino también formación profesional de excelencia, que permita a nuestros colegas replicar nuestro modelo de intervención en todo el mundo."
        ]}
      />

      <BloqueInfo
        title="Enfoque"
        images={[]}
        paragraphs={[
          "El enfoque de CIAL está centrado en la intervención intensiva y personalizada, diseñada para abordar de manera integral las necesidades específicas de cada niño. Basado en los últimos avances en el tratamiento de Apraxia del Habla Infantil y trastornos relacionados, nuestro método busca avanzar rápidamente hacia resultados duraderos. A través de múltiples estrategias y herramientas, trabajamos en equipo para garantizar que los niños avancen en su desarrollo, siempre con una mirada que fomente la creatividad, el aprendizaje y la colaboración profesional."
        ]}
      />

      <BloqueInfo
        title="Valores"
        images={[img2]}
        paragraphs={[
          "En CIAL, nuestros valores fundamentales incluyen el compromiso con la excelencia, la empatía y el respeto por cada niño y su familia. Creemos en la importancia de una formación continua y el perfeccionamiento constante para garantizar un servicio de alta calidad. Fomentamos un ambiente inclusivo donde la colaboración entre profesionales, familias y colegas sea esencial para el éxito de cada tratamiento. Asimismo, nos orientamos a ser un referente en el desarrollo de programas de capacitación que puedan replicarse en distintos contextos profesionales."
        ]}
      />
      
    </main>
  )
}

export default Nosotros;

