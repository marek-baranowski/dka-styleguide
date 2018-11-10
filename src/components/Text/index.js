import React from "react";

const styles = {
  fontFamily: "Lato",
  fontSize: "2rem",
  color: "#3676fb"
};

const Text = ({ children }) => <span style={styles}>{children}</span>;

export default Text;
