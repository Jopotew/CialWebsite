import React from 'react';
import './Footer.css';
import instaLogo from '../../assets/instagram_logo.png';
import logo from '../../assets/Logo/logo_sin_texto.png';
import decorImg from '../../assets/Body/Inicio/14.jpeg';
import wppLogo from '../../assets/whatsapp_logo.jpg';

function Footer() {
  return (
    <footer className="footer">
      <hr className="footer-divider" />

      <div className="footer-container">
        <div className="footer-left-img">
          <img src={decorImg} alt="Decoración" className="footer-decor-img" />
        </div>

        <div className="footer-center">
          <p className="footer-phrase">“#EscucharNosHaceBien.”</p>
          <img src={logo} alt="Logo CIAL" className="footer-logo-center" />
          <div className="footer-middle">
            <p>Luis Toschi 258, Cipolletti, Río Negro</p>
           
            <p>cial.nqn@gmail.com</p>
            <div className="footer-contact-group">
            
            <div className="footer-socials">
              <a href="https://wa.me/5492995079658" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <img src={wppLogo} alt="WhatsApp" className="footer-social-icon" />
                +54 9 299 5079658
              </a>

              <a href="https://instagram.com/cialconsultorios" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <img src={instaLogo} alt="Instagram" className="footer-social-icon" />
                Instagram
              </a>
            </div>

            </div>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© 2025 CIAL | Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
