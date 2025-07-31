// src/components/body/CenteredTextBlock.jsx
import React from 'react';
import './CenteredTextBlock.css';

function CenteredTextBlock({ title, paragraphs = [] }) {
  return (
    <section className="centered-text-block">
      {title && <h2 className="centered-title">{title}</h2>}
      <div className="centered-paragraphs">
        {paragraphs.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
    </section>
  );
}

export default CenteredTextBlock;
