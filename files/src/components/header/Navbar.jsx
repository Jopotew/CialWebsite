import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo/logo_completo.png';
import './Navbar.css';

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="CIAL Logo" />
      </Link>

      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>

        
        
        <li
          className="navbar-dropdown"
          onMouseEnter={() => setActiveDropdown('nosotros')}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Link to="/nosotros" className="navbar-link-with-caret">
            Nosotros <span className="caret">▼</span>
          </Link>
          {activeDropdown === 'nosotros' && (
            <ul className="dropdown-menu">
              <li><Link to="/nosotros">Quiénes Somos</Link></li>
              <li><Link to="/equipo">Nuestro Equipo</Link></li>
              <li><Link to="/lorena_valenzuela">Lorena Valenzuela</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/noticias">Noticias</Link></li>

        
        <li
          className="navbar-dropdown"
          onMouseEnter={() => setActiveDropdown('servicios')}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Link to="#" className="navbar-link-with-caret">
            Servicios <span className="caret">▼</span>
          </Link>
          {activeDropdown === 'servicios' && (
            <ul className="dropdown-menu">
              <li><Link to="/talleres">Talleres</Link></li>
              <li><Link to="/psicopedagogia">Psicopedagogía</Link></li>
              <li><Link to="/audiologia">Audiologia</Link></li>
              <li><Link to="/psicomotricidad">Psicomotricidad</Link></li>
              <li><Link to="/psicologia">Psicologia</Link></li>
              <li><Link to="/fonoaudiologia">Fonoaudiología</Link></li>
              <li><Link to="/rehab_auditiva">Rehabilitacion Auditiva  </Link></li>
              
              
            </ul>
          )}
        </li>


        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
