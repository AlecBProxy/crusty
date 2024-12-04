import React from "react";

const Navbar = () => {
  return (
    <nav>
      <h1>Crusty</h1>
      <ul>
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
