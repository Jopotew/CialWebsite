
import React from 'react';
import InformativePage from '../../../components/blog/InformativePage';
import headerImg from '../../../assets/Body/Spaces/psicopedagogia/1.png';
import { textos } from '../../../textos/home/textos';



const imgs = [headerImg];

function Psicopedagogia() {
  return (
    <InformativePage
      title={textos.psicopedagogia.titulo}
      images={imgs}
      paragraphs={textos.psicopedagogia.parrafos}
    />
  );
}

export default Psicopedagogia;
