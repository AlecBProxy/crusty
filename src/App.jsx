import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Customize from "./pages/Customize";
import PizzaListings from "./pages/PizzaListings";
import StoryPage from "./pages/StoryPage";
import Testing from "./pages/Testing";
import Checkout from "./pages/Checkout";

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  const [orders, setOrders] = useState([]);

  const fetchPizzas = async () => {
    const response = await fetch("http://localhost:3002/pizzas");
    const pizzas = await response.json();
    return pizzas;
  };

  const fetchOrders = async () => {
    const response = await fetch("http://localhost:3002/orders");
    const orders = await response.json();
    return orders;
  };


  const addOrder = async (order) => {
    const response = await fetch("http://localhost:3002/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    const newOrder = await response.json();
    setOrders([...orders, newOrder]);
  };

  const deleteOrder = async (id) => {
    await fetch(`http://localhost:3002/orders/${id}`, {
      method: "DELETE",
    });

    setOrders(orders.filter((order) => order.id !== id));
  };

  useEffect(() => {
    const getPizzas = async () => {
      const pizzasFromServer = await fetchPizzas();
      setPizzas(pizzasFromServer);
    };
    getPizzas();

    const getOrders = async () => {
      const ordersFromServer = await fetchOrders();
      setOrders(ordersFromServer);
    };
    getOrders();
  }, []);

  return (
    <Router>
      <div>
        <Navbar orders={orders} deleteOrder={deleteOrder} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/pizza-listings"
            element={<PizzaListings pizzas={pizzas} addOrder={addOrder} />}
          />
          <Route path="/customize" element={<Customize />} />
          <Route path="/our-story" element={<StoryPage />} />
          <Route
            path="/testing"
            element={<Testing orders={orders} addOrder={addOrder} />}
          />
          <Route path="/checkout" element={<Checkout orders={orders} deleteOrder={deleteOrder} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
