import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import "./css/informative_page.css";

const InformativePageMobile = ({ title, image, paragraphs = [], backTo = "/espacios" }) => {
  return (
    <div className="ipm-page">
      <Link to={backTo} className="ipm-back">
        <ChevronLeft size={18} />
        <span>Espacios</span>
      </Link>

      <img src={image} alt={title} className="ipm-img" />

      <div className="ipm-content">
        <h1 className="ipm-title">{title}</h1>
        {paragraphs.map((p, i) => (
          <p key={i} className="ipm-paragraph">{p}</p>
        ))}
      </div>
    </div>
  );
};

export default InformativePageMobile;