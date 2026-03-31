import React from 'react';
import './css/footer.css';
import instaLogo from '../../../assets/instagram_logo.png';
import logo from '../../../assets/Logo/logo_sin_texto.png';
import decorImg from '../../../assets/Body/Inicio/14.jpeg';
import wppLogo from '../../../assets/whatsapp_logo.jpg';

function FooterDesktop() {
  return (
    <footer className="footer-dt">
      <hr className="footer-dt__divider" />

      <div className="footer-dt__container">

        <div className="footer-dt__left">
          <img src={decorImg} alt="Decoración" className="footer-dt__decor-img" />
        </div>

        <div className="footer-dt__center">
          <p className="footer-dt__phrase">"#EscucharNosHaceBien."</p>
          <img src={logo} alt="Logo CIAL" className="footer-dt__logo" />

          <div className="footer-dt__info">
            <p>Luis Toschi 258, Cipolletti, Río Negro</p>
            <p>cial.nqn@gmail.com</p>
            
            <div className="footer-dt__socials">
              <a
                href="https://wa.me/5492995079658"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-dt__social-link"
              >
                <img src={wppLogo} alt="WhatsApp" className="footer-dt__social-icon" />
                <span><strong>Rehabilitación:</strong> +54 9 299 507-9658</span>
              </a>
              
              <a
                href="https://wa.me/54929950700000"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-dt__social-link"
              >
                <img src={wppLogo} alt="WhatsApp" className="footer-dt__social-icon" />
                <span><strong>Audiología:</strong> +54 9 299 507-XXXX</span>
              </a>

              <a
                href="https://instagram.com/cialconsultorios"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-dt__social-link"
              >
                <img src={instaLogo} alt="Instagram" className="footer-dt__social-icon" />
                <span>@cialconsultorios</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      <hr className="footer-dt__divider" />
      
    </footer>
  );
}

export default FooterDesktop;