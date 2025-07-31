// src/pages/TalleresProfesionales.jsx
import React from 'react';
import TallerInfoCard from '../../../../components/Taller/TallerInfoCard';
import './TalleresDetalle.css';
import q from '../../../../assets/Body/Inicio/5.jpeg';
import t from '../../../../assets/Body/Inicio/10.jpeg';
import h from '../../../../assets/Body/Inicio/13.jpeg';

function TalleresProfesionales() {
  const talleres = [
    {
      title: 'Construyendo Aulas Accesibles',
      description: 'Crear aulas inclusivas es una responsabilidad que tiene el poder de transformar realidades. La inclusión comienza con pequeños cambios que generan un impacto significativo en la vida de los estudiantes.',
      image: q,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSeUC1iJG6ZH_8T3ER-frjdnsh4qA2zHEFEAikIexLEWUyAniw/viewform',
    },
    {
      title: 'Impulsando tu Desarrollo y Fortaleciendo tu Práctica',
      description: 'Un espacio pensado para impulsar tu desarrollo profesional, brindando una formación integral y de alta calidad',
      image: t,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfL975vaDGtNxWU2XYGjDp4tTujKQm-Mq9l-pWwsiCpmVqh_g/viewform',
    },
    {
      title: 'Pasantias 2025',
      description: 'Bbrindamos oportunidades únicas de observación y práctica profesional dirigidas a estudiantes avanzados de Fonoaudiología, Psicología, Psicopedagogía, Psicomotricidad, así como a docentes y profesionales en formación.',
      image: h,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSd8lNbT1kDFk0xdmEVwrJlOAHo5tjoS-MuaLt4lce4-iF1alQ/viewform',
    },
    // Agrega más talleres según sea necesario
  ];

  return (
    <div className="talleres-detalle-container">
      <h1>Talleres para Profesionales</h1>
      <div className="talleres-detalle-cards">
        {talleres.map((taller, index) => (
          <TallerInfoCard
            key={index}
            title={taller.title}
            description={taller.description}
            image={taller.image}
            link={taller.link}
          />
        ))}
      </div>
    </div>
  );
}

export default TalleresProfesionales;
