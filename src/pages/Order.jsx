import React, { useEffect, useState } from "react";

const Order = () => {
  const [pizzas, setPizzas] = useState([]);
  const [Orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/pizzas")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Error fetching pizzas:", error));
  }, []);

  // Fetch the custom orders from JSON Server
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:3002/Orders");
        if (response.ok) {
          const data = await response.json();
          setOrders(data);
        } else {
          console.error("Failed to fetch custom orders.");
        }
      } catch (error) {
        console.error("Error fetching custom orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Order Summary</h1>

      {/* Predefined Pizzas Section */}
      {pizzas.length > 0 && (
        <div>
          <h2>Our Pizzas</h2>
          <ul>
            {pizzas.map((pizza) => (
              <li key={pizza.id}>
                {pizza.name} - ${pizza.price.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Custom Orders Section */}
      {Orders.length > 0 && (
        <div>
          <h2>Your Custom Orders</h2>
          {Orders.map((order) => (
            <div key={order.id}>
              <h3>Order ID: {order.id}</h3>
              <p>Size: {order.size}</p>
              <p>Ingredients: {order.ingredients ? order.ingredients.join(", ") : "None"}</p>
              <p>Extras: {order.extras ? order.extras.join(", ") : "None"}</p>
              <p>Special Instructions: {order.specialInstructions || "None"}</p>
              <p>Price: ${order.price ? order.price.toFixed(2) : "N/A"}</p>
              <hr />
            </div>
          ))}
        </div>
      )}

      {pizzas.length === 0 && Orders.length === 0 && (
        <p>No orders or pizzas available yet. Please check back later.</p>
      )}
    </div>
  );
};

export default Order;

