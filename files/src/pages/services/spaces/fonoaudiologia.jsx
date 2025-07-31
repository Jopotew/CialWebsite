
import React from 'react';
import InformativePage from '../../../components/blog/InformativePage';
import headerImg from '../../../assets/Body/Inicio/14.jpeg';
import { textos } from '../../../textos/home/textos';

function Fonoaudiologia() {
  return (
    <InformativePage
      title={textos.fonoaudiologia.titulo}
      image={headerImg}
      paragraphs={textos.fonoaudiologia.parrafos}
    />
  );
}

export default Fonoaudiologia;
