// src/pages/Noticias.jsx
import React from 'react';
import NoticiaCard from '../../components/Noticias/NoticiaCard';
import './news.css';
import noticia1 from '../../assets/cial_logo.png'
import valen from '../../assets/Body/News/valen.png'
import suyai from '../../assets/Body/News/suyai.png'
import maxi from '../../assets/Body/News/maxi.png'
import bastian from '../../assets/Body/News/bastian.png'
import noticia2 from '../../assets/cial_logo.png'


const noticiasData = [
  {
    image: valen,
    title: 'Historias que inspiran: Valentin',
    excerpt: '',
    link: 'https://www.lmcipolletti.com/provincia/el-dia-valentin-cumple-anos-y-un-gran-sueno-al-presentar-su-obra-n1169942',
    date: '',
  },
  {
    image: maxi,
    title: 'Historias que inspiran: Maxi',
    excerpt: '',
    link: 'https://www.instagram.com/reel/C20m_cKOnb5/?igsh=OXBzcWVyN2t4YWx0',
    date: '',
  },
  {
    image: bastian,
    title: 'La experiencia de: Bastian',
    excerpt: '',
    link: 'https://www.rionegro.com.ar/sociedad/un-bebe-y-un-nene-podran-volver-a-escuchar-tras-una-importante-cirugia-en-el-hospital-de-roca-2662696/',
    date: '',
  },
  {
    image: suyai,
    title: 'La experiencia de: Suyai',
    excerpt: '',
    link: 'https://www.lmneuquen.com/la-novedosa-cirugia-que-se-hizo-el-alto-valle-y-que-permitira-oir-una-nena-n878440',
    date: '',
  },
  

];

function Noticias() {
  return (
    <div className="noticias-page">
      <h2 className="noticias-title">Últimas Noticias</h2>
      <div className="noticias-grid">
        {noticiasData.map((noticia, index) => (
          <NoticiaCard
            key={index}
            image={noticia.image}
            title={noticia.title}
            excerpt={noticia.excerpt}
            link={noticia.link}
            date={noticia.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Noticias;
