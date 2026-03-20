const TextBlock = ({ children }) => {
  return <p style={styles.text}>{children}</p>;
};

const styles = {
  text: {
    color: "#444",
    lineHeight: "1.6",
    marginBottom: "10px",
    textAlign: "left"
  }
};

export default TextBlock;