import React from "react";

const styles = {
  fontFamily: "Lato",
  fontSize: "3rem",
  color: "#fb4c09"
};

const Text = ({ children }) => <span style={styles}>{children}</span>;

export default Text;
