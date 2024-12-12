import "../styles/navbar.css";
import logo from "../media/logo.png";
import Orders from "./orders/Orders";
import { Link } from "react-router-dom";

const Navbar = ({ orders, deleteOrder }) => {
  return (
    <header className="header">
      <div className="logo-section">
        <img src={logo} alt="Crusti Logo" className="logo" />
        <h1 className="brand-name">Crusti</h1>
      </div>
      <nav className="nav">
        <a href="/">Home</a>
        <Link to="/pizza-listings">Pizzas</Link>
        <Link to="/customize">Customize</Link>
        <a href="/order">Order</a>
        <a href="/our-story">Our Story</a>
      </nav>
      <Orders orders={orders} deleteOrder={deleteOrder} />
    </header>
  );
};

export default Navbar;
