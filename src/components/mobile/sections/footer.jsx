import React from 'react';
import './css/footer.css';
import instaLogo from '../../../assets/instagram_logo.png';
import logo from '../../../assets/Logo/logo_sin_texto.png';
import wppLogo from '../../../assets/whatsapp_logo.jpg';

function FooterMobile() {
  return (
    <footer className="footer-mb">

      <div className="footer-mb__logo-block">
        <img src={logo} alt="Logo CIAL" className="footer-mb__logo" />
        <p className="footer-mb__phrase">"#EscucharNosHaceBien"</p>
        <p className="footer-mb__address">Luis Toschi 258, Cipolletti, Río Negro</p>
      </div>

      <div className="footer-mb__divider" />

      <div className="footer-mb__contact">
        <p className="footer-mb__contact-title">Contacto</p>

        <a
          href="https://wa.me/5492995079658"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-mb__contact-item"
        >
          <div className="footer-mb__contact-icon footer-mb__contact-icon--wpp">
            <img src={wppLogo} alt="WhatsApp" className="footer-mb__social-icon" />
          </div>
          <div>
            <span className="footer-mb__contact-label">Rehabilitación</span>
            <span className="footer-mb__contact-value">+54 9 299 155079658</span>
          </div>
        </a>

        <a
          href="https://wa.me/5492995575035"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-mb__contact-item"
        >
          <div className="footer-mb__contact-icon footer-mb__contact-icon--wpp">
            <img src={wppLogo} alt="WhatsApp" className="footer-mb__social-icon" />
          </div>
          <div>
            <span className="footer-mb__contact-label">Audiología</span>
            <span className="footer-mb__contact-value">+54 9 299 5575035</span>
          </div>
        </a>

        <a
          href="mailto:cial.nqn@gmail.com"
          className="footer-mb__contact-item"
        >
          <div className="footer-mb__contact-icon footer-mb__contact-icon--mail">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5927af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M2 7l10 7 10-7"/>
            </svg>
          </div>
          <div>
            <span className="footer-mb__contact-label">Email</span>
            <span className="footer-mb__contact-value">cial.nqn@gmail.com</span>
          </div>
        </a>

        <a
          href="https://instagram.com/cialconsultorios"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-mb__contact-item"
        >
          <div className="footer-mb__contact-icon footer-mb__contact-icon--ig">
            <img src={instaLogo} alt="Instagram" className="footer-mb__social-icon" />
          </div>
          <div>
            <span className="footer-mb__contact-label">Instagram</span>
            <span className="footer-mb__contact-value">@cialconsultorios</span>
          </div>
        </a>
      </div>

      <div className="footer-mb__bottom">
        <p>2026 CIAL Consultorios · Luis Toschi 258, Cipolletti, Río Negro</p>
      </div>

    </footer>
  );
}

export default FooterMobile;