import React from 'react';
import './bio.css';

function OwnerBio({ paragraphs }) {
  return (
    <section className="owner-story-container">
      <div className="owner-story-content">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}

export default OwnerBio;
