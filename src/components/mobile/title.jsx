const Title = ({ children }) => {
  return <h2 style={styles.title}>{children}</h2>;
};

const styles = {
  title: {
    color: "#7C3AED", // violeta
    textAlign: "center",
    marginBottom: "12px"
  }
};

export default Title;