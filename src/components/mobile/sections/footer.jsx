import { MessageCircle } from "lucide-react";
import "./css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <h3 className="footer__contact-title">¿Necesitas hacernos una consulta?</h3>

        <p className="footer__contact-item">
          <MessageCircle size={16} className="footer__icon" />
          <span>WhatsApp: +569 1234 5678</span>
        </p>

        <p className="footer__contact-item">
          <MessageCircle size={16} className="footer__icon" />
          <span>contacto@cial.cl</span>
        </p>
      </div>

      <div className="footer__bottom">
        © 2025 CIAL - Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;