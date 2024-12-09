import React from "react";
import "../styles/navbar.css";
import logo from "../media/logo.png";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <img src={logo} alt="Crusti Logo" className="logo" />
        <h1 className="brand-name">Crusti</h1>
      </div>
      <nav className="nav">
        <a href="/customize">Customize</a>
        <a href="/order">Order</a>
        <a href="/our-story">Our Story</a>
      </nav>
    </header>
  );
};

export default Navbar;
