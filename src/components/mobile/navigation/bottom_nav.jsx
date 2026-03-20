import { Link, useLocation } from "react-router-dom";
import { Home, Users, Briefcase, Newspaper, MessageCircle } from "lucide-react";
import "./bottom_nav.css";

const BottomNav = () => {
  const { pathname } = useLocation();

  const links = [
    { to: "/",        icon: Home,          label: "Inicio"    },
    { to: "/team",    icon: Users,         label: "Equipo"    },
    { to: "/services",icon: Briefcase,     label: "Servicios" },
    { to: "/news",    icon: Newspaper,     label: "Noticias"  },
    { to: "/contact", icon: MessageCircle, label: "Contacto"  },
  ];

  return (
    <nav className="bottom-nav">
      {links.map(({ to, icon: Icon, label }) => { //
        const isActive = pathname === to;
        return (
          <Link
            key={to}
            to={to}
            className={`bottom-nav__item ${isActive ? "bottom-nav__item--active" : ""}`}
          >
            <Icon size={22} strokeWidth={isActive ? 2.2 : 1.8} />
            <span className="bottom-nav__label">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;