import React from 'react';
import EquipoCard from './EquipoCard';
import './NuestroEquipo.css';

function NuestroEquipo({ members, layout }) {
  return (
    <section className="nuestro-equipo-container">
      {members.title && <h2 className="nuestro-equipo-title">{members.title}</h2>}
      <div className={`nuestro-equipo-grid layout-${layout}`}>
        {members.map((member, idx) => (
          <EquipoCard
            key={idx}
            image={member.image}
            name={member.name}
            description={member.description}
          />
        ))}
      </div>
    </section>
  );
}

export default NuestroEquipo;

