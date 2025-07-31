
import React from 'react';
import InformativePage from '../../../components/blog/InformativePage';
import headerImg from '../../../assets/Body/Inicio/14.jpeg';
import { textos } from '../../../textos/home/textos';

function Psicologia() {
  return (
    <InformativePage
      title={textos.psicologia.titulo}
      image={headerImg}
      paragraphs={textos.psicologia.parrafos}
    />
  );
}

export default Psicologia;
