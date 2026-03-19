import React from 'react';
import TallerCard from '../../../../components/Taller/TallerCard';
import './Talleres.css';
import padresImage from '../../../../assets/Body/Inicio/30.png';
import profesionalesImage from '../../../../assets/Body/Inicio/21.jpeg';
function Talleres() {
  return (
    <div className="talleres-container">
      <h1>Talleres y Capacitaciones</h1>
      <div className="talleres-cards">
        <TallerCard 
          title="Talleres para Familias"
          description="Espacios diseñados para acompañar a familias en la crianza y educación de sus hijos."
          image={padresImage}
          link="/talleres/padres"
        />
        <TallerCard
          title="Talleres para Profesionales"
          description="Capacitaciones y actualizaciones para profesionales del área educativa y social."
          image={profesionalesImage}
          link="/talleres/profesionales"
        />
      </div>
    </div>
  );
}

export default Talleres;
