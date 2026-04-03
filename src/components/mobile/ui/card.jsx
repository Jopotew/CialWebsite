const Card = ({ title, text, img }) => {
  return (
    <div className="card">
      <img src={img} />
      <div className="card_body">
        <h3>{title}</h3>
        <p>{text}</p>
        <button>Conocer más</button>
      </div>
    </div>
  );
};

export default Card;