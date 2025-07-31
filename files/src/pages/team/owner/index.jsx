import React from 'react';
import OwnerHeader from '../../../components/owner/header';
import OwnerQuote from '../../../components/owner/quote';
import OwnerBio from '../../../components/owner/bio';
import GallerySlider from '../../../components/owner/gallery';

import profileImg from '../../../assets/cial_logo.png';
import gal1 from '../../../assets/cial_logo.png';
import gal2 from '../../../assets/cial_logo.png';

import { text } from '../../../textos/team/owner/text';

function Owner() {
  return (
    <>
      <OwnerHeader
        name="Maria Lorena Valenzuela"
        title="Directora y Fundadora de CIAL"
        image={profileImg}
      />
      <OwnerQuote quote="VIVIR Y JUGAR CON GRANDZA WACHOOOOOOOO" />
      <OwnerBio
        paragraphs={text.owner.paragraph}
      />
      <GallerySlider
        images={[
          { src: gal1, caption: "Primer congreso internacional de Apraxia del Habla" },
          { src: gal2, caption: "Jornada de formación en lenguaje y neurodesarrollo" }
        ]}
      />
    </>
  );
}

export default Owner;
