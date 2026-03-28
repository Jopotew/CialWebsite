import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import "./informative_page_desktop.css";

const InformativePageDesktop = ({ title, image, paragraphs = [], backTo = "/servicios/espacios" }) => {
  return (
    <div className="ipm-dt">
      <Link to={backTo} className="ipm-dt__back">
        <ChevronLeft size={18} />
        <span>Espacios</span>
      </Link>

      <div className="ipm-dt__hero">
        <img src={image} alt={title} className="ipm-dt__hero-img" />
        <div className="ipm-dt__hero-overlay">
          <h1 className="ipm-dt__hero-title">{title}</h1>
        </div>
      </div>

      <div className="ipm-dt__content">
        <div className="ipm-dt__body">
          {paragraphs.map((p, i) => (
            <p key={i} className="ipm-dt__paragraph">{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InformativePageDesktop;
