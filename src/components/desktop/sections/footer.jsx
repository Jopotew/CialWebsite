import { MessageCircle, MapPin, Mail } from "lucide-react";
import "./css/footer.css";

const Footer = () => {
  return (
    <footer className="footer-desktop">
      <div className="footer-desktop__inner">

        <div className="footer-desktop__col">
          <h3 className="footer-desktop__brand">CIAL</h3>
          <p className="footer-desktop__tagline">
            Centro Integral de Audiología y Lenguaje
          </p>
        </div>

        <div className="footer-desktop__col">
          <h4 className="footer-desktop__col-title">Contacto</h4>
          <p className="footer-desktop__item">
            <MapPin size={15} />
            <span>Luis Toschi 258, Cipolletti, Río Negro</span>
          </p>
          <p className="footer-desktop__item">
            <MessageCircle size={15} />
            <a href="https://wa.me/5492995079658" target="_blank" rel="noopener noreferrer">
              +54 9 299 507-9658
            </a>
          </p>
          <p className="footer-desktop__item">
            <Mail size={15} />
            <a href="mailto:cial.nqn@gmail.com">cial.nqn@gmail.com</a>
          </p>
        </div>

        <div className="footer-desktop__col">
          <h4 className="footer-desktop__col-title">Redes</h4>
          <p className="footer-desktop__item">
            <a
              href="https://instagram.com/cialconsultorios"
              target="_blank"
              rel="noopener noreferrer"
            >
              @cialconsultorios
            </a>
          </p>
        </div>

      </div>

      <div className="footer-desktop__bottom">
        © 2025 CIAL - Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
