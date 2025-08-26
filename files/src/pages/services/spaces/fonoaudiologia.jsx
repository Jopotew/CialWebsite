
import React from 'react';
import InformativePage from '../../../components/blog/InformativePage';
import headerImg from '../../../assets/Body/Spaces/fonoaudiologia/1.png';
import { textos } from '../../../textos/home/textos';



const imgs = [headerImg];

function Fonoaudiologia() {
  return (
    <InformativePage
      title={textos.fonoaudiologia.titulo}
      images={imgs}
      paragraphs={textos.fonoaudiologia.parrafos}
    />
  );
}

export default Fonoaudiologia;
