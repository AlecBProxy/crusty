import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>Crusty</h1>
      <ul style={styles.links}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/order">Order</a>
        </li>
        <li>
          <a href="/customize">Customize</a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    backgroundColor: "#ffcc00",
    color: "#333",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  links: {
    listStyleType: "none",
    display: "flex",
    gap: "1rem",
  },
};

export default Navbar;
