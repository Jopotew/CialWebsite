// src/pages/RehabilitacionAuditiva.jsx
import React from 'react';
import InformativePage from '../../../components/blog/InformativePage';
import headerImg from '../../../assets/Body/Inicio/14.jpeg';
import { textos } from '../../../textos/home/textos';

function Psicomotricidad() {
  return (
    <InformativePage
      title={textos.psicomotricidad.titulo}
      image={headerImg}
      paragraphs={textos.psicomotricidad.parrafos}
    />
  );
}

export default Psicomotricidad;
