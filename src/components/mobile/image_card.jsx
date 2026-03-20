const ImageCard = ({ title }) => {
  return (
    <div style={styles.card}>
      <div style={styles.image}></div>
      <p>{title}</p>
    </div>
  );
};

const styles = {
  card: {
    width: "48%"
  },
  image: {
    height: "100px",
    background: "#ddd",
    borderRadius: "10px",
    marginBottom: "8px"
  }
};

export default ImageCard;