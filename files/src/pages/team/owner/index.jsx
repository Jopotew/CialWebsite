import React from 'react';
import OwnerHeader from '../../../components/owner/header';
import OwnerQuote from '../../../components/owner/quote';
import OwnerBio from '../../../components/owner/bio';
import GallerySlider from '../../../components/owner/gallery';

import profileImg from '../../../assets/Body/Nosotros/lorena2.jpg'; 



import gal1 from '../../../assets/Body/Owner/1.jpg';
import gal2 from '../../../assets/Body/Owner/2.jpg';
import gal3 from '../../../assets/Body/Owner/3.jpg';
import gal4 from '../../../assets/Body/Owner/4.jpg';
import gal5 from '../../../assets/Body/Owner/5.jpg';
import gal6 from '../../../assets/Body/Owner/6.jpg';
import gal7 from '../../../assets/Body/Owner/7.jpg';
import gal8 from '../../../assets/Body/Owner/8.jpg';
import gal9 from '../../../assets/Body/Owner/9.jpg';
import gal10 from '../../../assets/Body/Owner/10.jpg';




import { text } from '../../../textos/team/owner/text';

function Owner() {
  return (
    <>
      <OwnerHeader
        name="Lic. María Lorena Valenzuela"
        title="Fundadora de CIAL"
        image={profileImg}
      />
      <OwnerQuote quote="Slogan" />
      <OwnerBio
        paragraphs={text.owner.paragraph}
      />
      <GallerySlider
        images={[
          { src: gal1, caption: "CI2025 BOSTON - Conference on Cochlear Implants- Marzo 2025" },
          { src: gal2, caption: "Junto a la Dra. Teresa Caraway, CEO de Hearing First, junto a destacados profesionales: Dr. Jace Wolfe, Ph.D., CCC-A; Tamara Elder, M.S., CCC-SLP, LSLS Cert. AVT. CI2025 BOSTON - Conference on Cochlear Implants" },
          { src: gal3, caption: "Junto a Blair Richlin, MS, CCC-SLP / Becky Clem, MA, CCC-SLP, LSLS Cert. AVT,   CI2025 BOSTON - Conference on Cochlear Implants-" },
          { src: gal4, caption: "Con la Dra. Teresa Caraway, CEO de Hearing First, junto a destacados profesionales: Dr. Jace Wolfe, Ph.D., CCC-A; Tamara Elder, M.S., CCC-SLP, LSLS Cert. AVT. CI2025 BOSTON - Conference on Cochlear Implants" },        
          { src: gal5, caption: "Jornada de Audiología, Hospital Castro Rendón, Neuquén Capital.  Junto a Lic. Karen Grill referente del programa de Hipoacusia de la Pcia. de Neuquén " },
          { src: gal6, caption: "Jornada de Audiología, Hospital Castro Rendón, Neuquén Capital.  Junto a Lic. Karen Grill referente del programa de Hipoacusia de la Pcia. de Neuquén " },
          { src: gal7, caption: "Jornada de Audiología, Hospital Castro Rendón, Neuquén Capital.  Junto a Lic. Karen Grill referente del programa de Hipoacusia de la Pcia. de Neuquén " },
          { src: gal8, caption: "Jornadas Cientificas en Rehabilitación organaizado por Pam argentina. 20 y 21 de Marzo 2025. Colonia Uruguay" },        
          { src: gal9, caption: "Jornadas Cientificas en Rehabilitación organaizado por Pam argentina. 20 y 21 de Marzo 2025. Colonia Uruguay" },
          { src: gal10, caption: "Junto a Rehabilitadoras de todo el Pais en las Jornadas Cientificas en Rehabilitación. Colonia Uruguay" },
        
        ]}
      />
    </>
  );
}

export default Owner;
 