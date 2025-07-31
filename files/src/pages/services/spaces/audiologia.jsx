
import React from 'react';
import InformativePage from '../../../components/blog/InformativePage';
import headerImg from '../../../assets/Body/Inicio/14.jpeg';
import { textos } from '../../../textos/home/textos';

function Audiologia() {
  return (
    <InformativePage
      title={textos.audiologia.titulo}
      image={headerImg}
      paragraphs={textos.audiologia.parrafos}
    />
  );
}

export default Audiologia;
