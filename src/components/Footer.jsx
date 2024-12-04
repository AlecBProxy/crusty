import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Crusty. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
