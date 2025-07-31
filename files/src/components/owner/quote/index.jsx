import React from 'react';
import './quote.css';

function OwnerQuote({ quote }) {
  return (
    <section className="owner-phrase-container">
      <p className="owner-phrase">“{quote}”</p>
    </section>
  );
}

export default OwnerQuote;

