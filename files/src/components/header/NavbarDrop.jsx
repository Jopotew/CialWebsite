import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/cial_logo.png';
import './NavbarDropdown.css';

function NavbarDropdown() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Cierre automático al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar" ref={menuRef}>
      <img src={logo} alt="CIAL Logo" className="navbar-logo" />

      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <div className={`dropdown-menu ${open ? 'open' : ''}`}>
        <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
        <a href="#nosotros" onClick={() => setOpen(false)}>Nosotros</a>
        <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
        <a href="#noticias" onClick={() => setOpen(false)}>Noticias</a>
      </div>
    </nav>
  );
}

export default NavbarDropdown;
