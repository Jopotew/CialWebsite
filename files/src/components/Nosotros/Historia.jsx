import React from 'react';
import './Historia.css';





function Historia({ images }) {
  return (
    <section className="historia-container">
      <div className="historia-images">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Historia ${idx + 1}`} />
        ))}
      </div>
      <div className="historia-text">
        <h2>TRAYECTORIA</h2>
        <p>
          <strong>CIAL</strong> nace en el año 2012 en Zona Norte de Gran Buenos Aires, Argentina, como fruto de la especialización de Mariana en Estados Unidos sobre Trastornos del Espectro Autista (TEA) y Apraxia del Habla Infantil (CAS). Mariana se recibió en la U.B.A. y revalidó sus títulos en los estados de California, Nueva York, Nueva Jersey y Virginia.
        </p>
        <p>
          Tras años de intervención personalizada e intensiva, desarrolló un enfoque propio basado en lineamientos de intervención en Apraxia del Habla Infantil, buscando que mediante múltiples enfoques e intensidad los niños avancen a estadios superiores del desarrollo en programas similares a los Summer Camps de Speech.
        </p>
        <p>
          Habiendo recorrido múltiples países, como Estados Unidos, España, Chile, Marruecos y Paraguay, donde proveía su programa de intervención intensiva, Mariana decidió crear y formar profesionales para poder atender la creciente demanda de niños con Apraxia del Habla Infantil (AHÍ).
        </p>
      </div>
    </section>
  );
}

export default Historia;
