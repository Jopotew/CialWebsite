const Section = ({ children }) => {
  return <div style={styles.section}>{children}</div>;
};

const styles = {
  section: {
    padding: "20px 16px"
  }
};

export default Section;