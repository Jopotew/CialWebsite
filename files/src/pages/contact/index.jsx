import React from 'react';
import './Contacto.css';
import instaLogo from "../../assets/instagram_logo.png"
import wppLogo from '../../assets/whatsapp_logo.jpg';


function Contacto() {
  return (
    <div className="contacto-container">
      <div className="contacto-info-card">
        <h2>Contactanos</h2>
        <div className="contacto-dato">
          <strong>Dirección:</strong>
          <p>Luis Toschi 258, R8324 Cipolletti, Río Negro</p>
        </div>
        <div className="contacto-dato">
          <strong>Email:</strong>
          <p><a href="mailto:info@tusitio.com">cial.nqn@gmail.com</a></p>
        </div>
        <div className="contacto-dato">
          <strong>Teléfono:</strong>
          <p>
            <a href="https://wa.me/5492995079658" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <img src={wppLogo} alt="WhatsApp" className="footer-social-icon" />
              +54 9 299 5079658
            </a>
          </p>
        </div>
        <div className="contacto-dato">
          <strong>Nuestras Redes Sociales:</strong>
          <div className="contacto-redes">
           <a href="https://instagram.com/cialconsultorios" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <img src={instaLogo} alt="Instagram" className="footer-social-icon" />
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="contacto-mapa">
        <iframe
          title="Mapa"
          src="https://www.google.com/maps?q=Luis+Toschi+258,+Cipolletti,+Río+Negro,+Argentina&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contacto;
