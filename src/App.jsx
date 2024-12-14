import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Customize from "./pages/Customize";
import PizzaListings from "./pages/PizzaListings";
import StoryPage from "./pages/StoryPage";
import Testing from "./pages/Testing";
import CheckoutPage from "./components/CheckoutPage";

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  const [orders, setOrders] = useState([]);
  const [ingredients, setIngredients] = useState([]);

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

  const fetchIngredients = async () => {
    const response = await fetch("http://localhost:3002/ingredients");
    const ingredients = await response.json();
    return ingredients;
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

    const getIngredients = async () => {
      const ingredients = await fetchIngredients();
      console.log(ingredients);
    };
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
          <Route path="/order" element={<Order />} />
          <Route path="/customize" element={<Customize />} />
          <Route path="/our-story" element={<StoryPage />} />
          <Route
            path="/testing"
            element={<Testing orders={orders} addOrder={addOrder} />}
          />
          <Route path="/checkout" element={<CheckoutPage />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          {/* Added this route */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
