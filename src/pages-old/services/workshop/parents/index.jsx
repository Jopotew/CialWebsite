// src/pages/TalleresPadres.jsx
import React from 'react';
import TallerInfoCard from '../../../../components/Taller/TallerInfoCard';
import './TalleresDetalle.css';
import comunicacionImage from '../../../../assets/Body/Inicio/18.jpeg';


function TalleresPadres() {
  const talleres = [
    {
      title: 'Fortaleciendo el Aprendizaje en Casa',
      description: 'El hogar es el primer y más importante espacio de aprendizaje. Diversas investigaciones confirman que el éxito en los tratamientos se potencia cuando las familias participan activamente, convirtiéndose en los principales modelos para guiar a sus hijos en el desarrollo de sus habilidades de comunicación, escucha y habla.',
      image: comunicacionImage,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSduT8Esk_kMgGiOj-AiX2NA_jVmL5aUfZHtj6paxGKKWtvpUg/viewform',
    },
    // Agrega más talleres según sea necesario
  ];

  return (
    <div className="talleres-detalle-container">
      <h1>Talleres para Padres</h1>
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

export default TalleresPadres;
