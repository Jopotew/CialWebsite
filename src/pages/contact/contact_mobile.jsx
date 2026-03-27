import { MapPin, Mail } from "lucide-react";
import wppLogo from "../../assets/whatsapp_logo.jpg";
import instaLogo from "../../assets/instagram_logo.png";
import "./contact_mobile.css";

const ContactoPage = () => {
  return (
    <div className="contacto-page">

      <div className="contacto-page__header">
        <h1 className="contacto-page__title">Contactanos</h1>
        <p className="contacto-page__subtitle">Estamos para ayudarte</p>
      </div>

      <div className="contacto-page__map">
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

      <div className="contacto-page__cards">

        <div className="contacto-card">
          <div className="contacto-card__icon-wrap">
            <MapPin size={20} className="contacto-card__icon" />
          </div>
          <div className="contacto-card__body">
            <span className="contacto-card__label">Dirección</span>
            <a
              href="https://maps.google.com/?q=Luis+Toschi+258,+Cipolletti,+Río+Negro,+Argentina"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-card__value contacto-card__value--link"
            >
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
            <a
              href="mailto:cial.nqn@gmail.com"
              className="contacto-card__value contacto-card__value--link"
            >
              cial.nqn@gmail.com
            </a>
          </div>
        </div>

        <div className="contacto-card">
          <div className="contacto-card__icon-wrap">
            <img src={wppLogo} alt="WhatsApp" className="contacto-card__logo" />
          </div>
          <div className="contacto-card__body">
            <span className="contacto-card__label">WhatsApp</span>
            <a
              href="https://wa.me/5492995079658"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-card__value contacto-card__value--link"
            >
              +54 9 299 507-9658
            </a>
          </div>
        </div>

        <div className="contacto-card">
          <div className="contacto-card__icon-wrap">
            <img src={instaLogo} alt="Instagram" className="contacto-card__logo" />
          </div>
          <div className="contacto-card__body">
            <span className="contacto-card__label">Instagram</span>
            <a
              href="https://instagram.com/cialconsultorios"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-card__value contacto-card__value--link"
            >
              @cialconsultorios
            </a>
          </div>
        </div>

      </div>

      <div className="contacto-page__wpp">
        <a
          href="https://wa.me/5492995079658"
          target="_blank"
          rel="noopener noreferrer"
          className="contacto-wpp-btn"
        >
          <img src={wppLogo} alt="WhatsApp" className="contacto-wpp-btn__logo" />
          Escribinos por WhatsApp
        </a>
      </div>

    </div>
  );
};

export default ContactoPage;