
import React from 'react';
import InformativePage from '../../../components/blog/InformativePage';
import headerImg from '../../../assets/Body/Spaces/psicologia/1.png';
import { textos } from '../../../textos/home/textos';



const imgs = [headerImg];

function Psicologia() {
  return (
    <InformativePage
      title={textos.psicologia.titulo}
      images={imgs}
      paragraphs={textos.psicologia.parrafos}
    />
  );
}

export default Psicologia;
