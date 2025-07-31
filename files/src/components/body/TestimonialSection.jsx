import React from 'react';
import './TestimonialSection.css';

function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">
        Historias que inspiran!
      </h2>

      <div className="video-grid">
        <iframe
          src="https://www.youtube.com/embed/fpzHSjhU8Qw"
          title="Testimonio 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/Z4-NKX0oDa4"
          title="Testimonio 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default TestimonialSection;
