import { MapPin, Mail, Phone } from "lucide-react";
import wppLogo from "../../assets/whatsapp_logo.jpg";
import instaLogo from "../../assets/instagram_logo.png";
import "./contact_desktop.css";

const ContactoPageDesktop = () => {
  return (
    <div className="contacto-desktop">
      <div className="contacto-desktop__header">
        <h1 className="contacto-desktop__title">Contactanos</h1>
        <p className="contacto-desktop__subtitle">Estamos para ayudarte</p>
      </div>
      <div className="contacto-desktop__body">
        <div className="contacto-desktop__map">
          <iframe
            title="Mapa CIAL"
            src="https://www.google.com/maps?q=Luis+Toschi+258,+Cipolletti,+Río+Negro,+Argentina&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="contacto-desktop__info">
          <div className="contacto-card">
            <div className="contacto-card__icon-wrap">
              <MapPin size={20} className="contacto-card__icon" />
            </div>
            <div className="contacto-card__body">
              <span className="contacto-card__label">Dirección</span>
              <a href="https://maps.google.com/?q=Luis+Toschi+258,+Cipolletti,+Río+Negro,+Argentina" target="_blank" rel="noopener noreferrer" className="contacto-card__value contacto-card__value--link">
                Luis Toschi 258, Cipolletti, Río Negro
              </a>
            </div>
          </div>
          <div className="contacto-card">
            <div className="contacto-card__icon-wrap">
              <Mail size={20} className="contacto-card__icon" />
            </div>
            <div className="contacto-card__body">
              <span className="contacto-card__label">Email</span>
              <a href="mailto:cial.nqn@gmail.com" className="contacto-card__value contacto-card__value--link">
                cial.nqn@gmail.com
              </a>
            </div>
          </div>
          <div className="contacto-card">
            <div className="contacto-card__icon-wrap">
              <Phone size={20} className="contacto-card__icon" />
            </div>
            <div className="contacto-card__body">
              <span className="contacto-card__label">Rehabilitacion</span>
              <a href="tel:+5492995079658" className="contacto-card__value contacto-card__value--link">
                +54 9 299 155079658
              </a>
            </div>
          </div>
          <div className="contacto-card">
            <div className="contacto-card__icon-wrap">
              <Phone size={20} className="contacto-card__icon contacto-card__icon--audio" />
            </div>
            <div className="contacto-card__body">
              <span className="contacto-card__label">Audiología</span>
              <a href="tel:+5492995079658" className="contacto-card__value contacto-card__value--link">
                +54 9 299 5575035
              </a>
            </div>
          </div>
          
          <div className="contacto-card">
            <div className="contacto-card__icon-wrap">
              <img src={instaLogo} alt="Instagram" className="contacto-card__logo" />
            </div>
            <div className="contacto-card__body">
              <span className="contacto-card__label">Instagram</span>
              <a href="https://instagram.com/cialconsultorios" target="_blank" rel="noopener noreferrer" className="contacto-card__value contacto-card__value--link">
                @cialconsultorios
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoPageDesktop;