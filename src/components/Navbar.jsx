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

export default Navbar;
