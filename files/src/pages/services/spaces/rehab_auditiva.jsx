
import React from 'react';
import InformativePage from '../../../components/blog/InformativePage';
import headerImg from '../../../assets/Body/Spaces/rehab_auditiva/1.png';
import { textos } from '../../../textos/home/textos';



const imgs = [headerImg];

function RehabAuditiva() {
  return (
    <InformativePage
      title={textos.rehabilitacionAuditiva.titulo}
      images={imgs}
      paragraphs={textos.rehabilitacionAuditiva.parrafos}
    />
  );
}

export default RehabAuditiva;
