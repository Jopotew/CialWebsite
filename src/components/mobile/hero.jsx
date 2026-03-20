const Hero = ({ title, subtitle }) => {
  return (
    <div style={styles.hero}>
      <div style={styles.overlay}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

const styles = {
  hero: {
    height: "220px",
    borderRadius: "12px",
    background: "#ccc",
    display: "flex",
    alignItems: "flex-end",
    overflow: "hidden"
  },
  overlay: {
    padding: "16px",
    color: "white",
    background: "rgba(0,0,0,0.4)",
    width: "100%"
  }
};

export default Hero;