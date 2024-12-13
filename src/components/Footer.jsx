import "../styles/footer.css";
import logo from "../media/logo.png";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Crusti Logo" className="logo" />
      <p>&copy; {new Date().getFullYear()} Crusty. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
