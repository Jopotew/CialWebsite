import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import "./navbar.css";

const Navbar = () => {
  const { pathname } = useLocation();

  const menuItems = [
    { label: "Inicio", to: "/" },
    { label: "Equipo", to: "/equipo" },
    { 
      label: "Servicios", 
      to: "/servicios",
      submenu: [
        { label: "Talleres", to: "/servicios/talleres" },
        { label: "Audiología", to: "/servicios/espacios/audiologia" },
        { label: "Rehabilitación", to: "/servicios/espacios/rehabilitacion-auditiva" },
      ]
    },
    { 
      label: "Novedades", 
      to: "/novedades",
      submenu: [
        { label: "Blog", to: "/novedades/blog" },
        { label: "Noticias", to: "/novedades/noticias" },
      ]
    },
    { label: "Contacto", to: "/contacto" },
  ];

  return (
    <header className="navbar-desktop">
      <div className="navbar-desktop__container">
        {/* Logo y Nombre */}
        <Link to="/" className="navbar-desktop__logo">
          <div className="logo-circle">Logo</div>
          <span className="logo-text">C.I.A.L</span>
        </Link>

        {/* Navegación */}
        <nav className="navbar-desktop__nav">
          <ul className="navbar-desktop__menu">
            {menuItems.map((item) => (
              <li key={item.to} className="navbar-desktop__item">
                <div className="navbar-desktop__link-container">
                  <Link 
                    to={item.to} 
                    className={`navbar-desktop__link ${pathname === item.to ? 'active' : ''}`}
                  >
                    {item.label}
                    {item.submenu && <ChevronDown size={14} className="chevron" />}
                  </Link>
                  
                  {/* Desplegable */}
                  {item.submenu && (
                    <ul className="navbar-desktop__dropdown">
                      {item.submenu.map((sub) => (
                        <li key={sub.to}>
                          <Link to={sub.to} className="dropdown-link">
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;