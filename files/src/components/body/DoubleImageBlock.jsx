import React from 'react';
import './DoubleImageBlock.css';
import { Link } from 'react-router-dom';

function DoubleImageBlock({ title, items }) {
  return (
    <div className="double-image-block">
      <h2 className="double-image-title">{title}</h2>

      {items.map((item, index) => (
        <div key={index} className="block-column">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.text}</p>

          {item.link.startsWith('http') ? (
            <a
              href={item.link}
              className="block-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conocer más
            </a>
          ) : (
            <Link to={item.link} className="block-button">
              Conocer más
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

export default DoubleImageBlock;
