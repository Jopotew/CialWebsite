import React from 'react';
import InformativePage from '../../../components/blog/InformativePage';
import img1 from '../../../assets/Body/Spaces/audiologia/1.png';
import img2 from '../../../assets/Body/Spaces/audiologia/2.png';
import img3 from '../../../assets/Body/Spaces/audiologia/3.png';
import { textos } from '../../../textos/home/textos';

const imgs = [img1, img2, img3];

function Audiologia() {
  return (
    <InformativePage
      title={textos.audiologia.titulo}
      images={imgs}
      paragraphs={textos.audiologia.parrafos}
    />
  );
}

export default Audiologia;
