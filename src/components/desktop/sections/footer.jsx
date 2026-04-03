import React from 'react';
import './css/footer.css';
import instaLogo from '../../../assets/instagram_logo.png';
import logo from '../../../assets/Logo/logo_sin_texto.png';
import decorImg from '../../../assets/Body/Inicio/14.jpeg';
import wppLogo from '../../../assets/whatsapp_logo.jpg';

function FooterDesktop() {
  return (
    <footer className="footer-dt">
      <div className="footer-dt__container">

        <div className="footer-dt__left">
          <img src={decorImg} alt="Decoración" className="footer-dt__decor-img" />
        </div>

        <div className="footer-dt__vdivider" />

        <div className="footer-dt__center">
          <p className="footer-dt__phrase">"#EscucharNosHaceBien"</p>
          <img src={logo} alt="Logo CIAL" className="footer-dt__logo" />
          <p className="footer-dt__company-name">Consultorios</p>
          <p className="footer-dt__address">Luis Toschi 258, Cipolletti, Río Negro</p>
        </div>

        <div className="footer-dt__vdivider" />

        <div className="footer-dt__right">

          <a
            href="https://wa.me/5492995079658"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-dt__contact-item"
          >
            <div className="footer-dt__contact-icon footer-dt__contact-icon--wpp">
              <img src={wppLogo} alt="WhatsApp" className="footer-dt__social-icon" />
            </div>
            <div>
              <span className="footer-dt__contact-label">Rehabilitación</span>
              <span className="footer-dt__contact-value">+54 9 299 155079658</span>
            </div>
          </a>

          <a
            href="https://wa.me/54929950700000"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-dt__contact-item"
          >
            <div className="footer-dt__contact-icon footer-dt__contact-icon--wpp">
              <img src={wppLogo} alt="WhatsApp" className="footer-dt__social-icon" />
            </div>
            <div>
              <span className="footer-dt__contact-label">Audiología</span>
              <span className="footer-dt__contact-value">+54 9 299 5575035</span>
            </div>
          </a>

          <a
            href="mailto:cial.nqn@gmail.com"
            className="footer-dt__contact-item"
          >
            <div className="footer-dt__contact-icon footer-dt__contact-icon--mail">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5927af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
            </div>
            <div>
              <span className="footer-dt__contact-label">Email</span>
              <span className="footer-dt__contact-value">cial.nqn@gmail.com</span>
            </div>
          </a>

          <a
            href="https://instagram.com/cialconsultorios"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-dt__contact-item"
          >
            <div className="footer-dt__contact-icon footer-dt__contact-icon--ig">
              <img src={instaLogo} alt="Instagram" className="footer-dt__social-icon" />
            </div>
            <div>
              <span className="footer-dt__contact-label">Instagram</span>
              <span className="footer-dt__contact-value">@cialconsultorios</span>
            </div>
          </a>

        </div>
      </div>

      <hr className="footer-dt__divider" />
      <p className="footer-dt__bottom">2026 CIAL Consultorios · Luis Toschi 258, Cipolletti, Río Negro</p>
    </footer>
  );
}

export default FooterDesktop;