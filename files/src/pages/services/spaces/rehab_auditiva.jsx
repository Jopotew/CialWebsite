
import React from 'react';
import InformativePage from '../../../components/blog/InformativePage';
import headerImg from '../../../assets/Body/Inicio/14.jpeg';
import { textos } from '../../../textos/home/textos';

function RehabAuditiva() {
  return (
    <InformativePage
      title={textos.rehabilitacionAuditiva.titulo}
      image={headerImg}
      paragraphs={textos.rehabilitacionAuditiva.parrafos}
    />
  );
}

export default RehabAuditiva;
