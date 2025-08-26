// src/pages/RehabilitacionAuditiva.jsx
import React from 'react';
import InformativePage from '../../../components/blog/InformativePage';
import headerImg from '../../../assets/Body/Spaces/psicomotricidad/1.png';
import { textos } from '../../../textos/home/textos';


const imgs = [headerImg];
function Psicomotricidad() {
  return (
    <InformativePage
      title={textos.psicomotricidad.titulo}
      images={imgs}
      paragraphs={textos.psicomotricidad.parrafos}
    />
  );
}

export default Psicomotricidad;
