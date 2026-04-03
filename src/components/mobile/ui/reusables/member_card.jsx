import { Link } from "react-router-dom";
import "./css/member_card.css";

const MemberCard = ({ member, featured = false }) => {
  const slug = member.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  if (featured) {
    return (
      <Link to={`/team/${slug}`} className="member-card member-card--featured">
        <img src={member.image} alt={member.name} className="member-card__img member-card__img--featured" />
        <div className="member-card__body member-card__body--featured">
          <h2 className="member-card__name member-card__name--featured">{member.name}</h2>
          <p className="member-card__title">{member.title}</p>
          {member.subtitle && (
            <p className="member-card__subtitle">{member.subtitle}</p>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/team/${slug}`} className="member-card">
      <img src={member.image} alt={member.name} className="member-card__img" />
      <div className="member-card__body">
        <h3 className="member-card__name">{member.name}</h3>
        <p className="member-card__title">{member.title}</p>
      </div>
    </Link>
  );
};

export default MemberCard;