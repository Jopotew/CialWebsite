
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;

  return (
    <nav style={styles.nav}>
      <Link style={isActive("/") ? styles.active : styles.link} to="/">Inicio</Link>
      <Link style={isActive("/services") ? styles.active : styles.link} to="/services">Servicios</Link>
      <Link style={isActive("/contact") ? styles.active : styles.link} to="/contact">Contacto</Link>
    </nav>
  );
};

const styles = {
  nav: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: "65px",
    background: "#fff",
    borderTop: "1px solid #ddd",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  link: {
    textDecoration: "none",
    color: "gray"
  },
  active: {
    textDecoration: "none",
    color: "purple",
    fontWeight: "bold"
  }
};

export default BottomNav;