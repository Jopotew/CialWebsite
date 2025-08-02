import React from 'react';
import './ServicesCards.css';

function ServicesCards({ services }) {
  return (
   
      <section className="services-section">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="card-body">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href={item.link} className="service-button">CONOCER MÁS</a>
            </div>
          </div>
        ))}
      </section>

  );
}

export default ServicesCards;
