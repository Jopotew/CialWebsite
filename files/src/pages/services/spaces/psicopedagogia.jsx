
import React from 'react';
import InformativePage from '../../../components/blog/InformativePage';
import headerImg from '../../../assets/Body/Inicio/14.jpeg';
import { textos } from '../../../textos/home/textos';

function Psicopedagogia() {
  return (
    <InformativePage
      title={textos.psicopedagogia.titulo}
      image={headerImg}
      paragraphs={textos.psicopedagogia.parrafos}
    />
  );
}

export default Psicopedagogia;
