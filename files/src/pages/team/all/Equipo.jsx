import React from 'react';
import NuestroEquipo from '../../../components/Nosotros/NuestroEquipo/NuestroEquipo';

import persona1 from '../../../assets/cial_logo.png';
import adriana from '../../../assets/Body/Nosotros/adriana.png';
import ana from '../../../assets/Body/Nosotros/ana.png';
import belen from '../../../assets/Body/Nosotros/belen.png';
import gimena from '../../../assets/Body/Nosotros/gimena.png';
import maria_sol from '../../../assets/Body/Nosotros/maria_sol.png';
import nati from '../../../assets/Body/Nosotros/nati.png';
import juliana from '../../../assets/Body/Nosotros/juliana.png';
import eva from '../../../assets/Body/Nosotros/eva.png';




const miembros = [
  {
    title: "NUESTRO EQUIPO",
    image: persona1,
    name: 'Maria Lorena Valenzuela',
    description: 'Especialista en Apraxia y Trastornos del Lenguaje. Fundadora de CIAL.',
  },
  {
    image: adriana,
    name: 'Lic. Adriana Dietrich',
    description: 'Psicomotricidad',
  },
  {
    image: maria_sol,
    name: 'Lic. María sol Trasarti',
    description: 'Fonoaudiologa- Audiologa',
  },
  {
    image: ana,
    name: 'Lic Ana Swchab.',
    description: 'Fonoaudiologa- Prompt Bridging Trained - Especialista en CAA',
  },
  {
    image: belen,
    name: 'Lic. Belén Montecino ',
    description: 'Fonoaudiologa - Audiologa',
  },
  {
    image: eva,
    name: 'Lic. M. Eva Skruta',
    description: 'Psicopedagoga ',
  },
  {
    image: juliana,
    name: 'Lic. Juliana Lamela ',
    description: 'Psicopedagoga',
  },
  {
    image: nati,
    name: 'Lic. Natasha Carballo',
    description: 'Psicóloga',
  },
  {
    image: gimena,
    name: 'Lic. Gimena Aravena',
    description: 'Psicóloga',
  },


];

function Equipo() {
  return (
    <div>
      {/* Primera fila: 1 miembro */}
      <NuestroEquipo members={miembros.slice(0, 1)} layout="one" />

      {/* Segunda fila: 4 miembros */}
      <NuestroEquipo members={miembros.slice(1, 5)} layout="four" />

      {/* Tercera fila: 4 miembros restantes */}
      <NuestroEquipo members={miembros.slice(5, 9)} layout="four" />
    </div>
  );
}



export default Equipo;
