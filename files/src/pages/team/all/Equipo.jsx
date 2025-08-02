import React from 'react';
import NuestroEquipo from '../../../components/Nosotros/NuestroEquipo/NuestroEquipo';


import adriana from '../../../assets/Body/Nosotros/adriana.png';
import ana from '../../../assets/Body/Nosotros/ana.png';
import belen from '../../../assets/Body/Nosotros/belen.png';
import gimena from '../../../assets/Body/Nosotros/gimena.png';
import maria_sol from '../../../assets/Body/Nosotros/maria_sol.jpg';
import nati from '../../../assets/Body/Nosotros/nati.png';
import juliana from '../../../assets/Body/Nosotros/juliana.png';
import eva from '../../../assets/Body/Nosotros/eva.png';
import lorena from '../../../assets/Body/Nosotros/lorena.jpg';




const miembros = [
  {
    title: "NUESTRO EQUIPO",
    image: lorena,
    name: 'Lic. María Lorena Valenzuela',
    description: 'LSLS Cert. AVT - Fonoaudióloga - Prof. Para sordos - Prompt Bridging Trained - Especialista en CAA',
  },
  {
    image: adriana,
    name: 'Lic. Adriana Dietrich',
    description: 'Psicomotricidad',
  },
  {
    image: maria_sol,
    name: 'Lic. María Sol Trasarti',
    description: 'Fonoaudióloga - Audióloga',
  },
  {
    image: ana,
    name: 'Lic. Ana Swchab.',
    description: 'Fonoaudióloga - Prompt Bridging Trained - Especialista en CAA',
  },
  {
    image: belen,
    name: 'Lic. Belén Montecino ',
    description: 'Fonoaudióloga  - Audióloga ',
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
      <NuestroEquipo 
        members={miembros.slice(0, 1)} 
        layout="one" 
        showButton={true} 
        buttonLink="/lorena_valenzuela" 
      />

      <NuestroEquipo 
        members={miembros.slice(1, 5)} 
        layout="four" 
        showButton={false}
      />

      <NuestroEquipo 
        members={miembros.slice(5, 9)} 
        layout="four" 
        showButton={false}
      />

    </div>
  );
}



export default Equipo;
