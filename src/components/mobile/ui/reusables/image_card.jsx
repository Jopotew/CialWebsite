
import { Link } from "react-router-dom";
import "./css/image_card.css";


const ImageCard = ({ title, description, img, to = "/", variant = "button" }) => {
  return (
    <div className="image-card">
      <img src={img} alt={title} className="image-card__img" />
      <div className="image-card__body">
        <h3 className="image-card__title">{title}</h3>
        <p className="image-card__text">{description}</p>

        {variant === "button" ? (
          <Link to={to} className="image-card__btn">
            Conocer más
          </Link>
        ) : (
          <Link to={to} className="image-card__link">
            CONOCER MÁS →
          </Link>
        )}
      </div>
    </div>
  );
};

export default ImageCard;