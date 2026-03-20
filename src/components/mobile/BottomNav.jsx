import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;

  return (
    <nav className="bottom-nav">
      <Link className={isActive("/") ? "active" : ""} to="/">
        <span>🏠</span>
        <p>Inicio</p>
      </Link>

      <Link className={isActive("/team") ? "active" : ""} to="/team">
        <span>👥</span>
        <p>Equipo</p>
      </Link>

      <Link className={isActive("/news") ? "active" : ""} to="/news">
        <span>📰</span>
        <p>Noticias</p>
      </Link>

      <Link className={isActive("/services") ? "active" : ""} to="/services">
        <span>🛠️</span>
        <p>Servicios</p>
      </Link>

      <Link className={isActive("/contact") ? "active" : ""} to="/contact">
        <span>📞</span>
        <p>Contacto</p>
      </Link>
    </nav>
  );
};

export default BottomNav;