import React, { useEffect, useState } from "react";

const Order = () => {
  const [pizzas, setPizzas] = useState([]);

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

  return (
    <div style={styles.container}>
      <h1>Our Pizzas</h1>
      <ul style={styles.list}>
        {pizzas.map((pizza) => (
          <li key={pizza.id} style={styles.item}>
            {pizza.name} - ${pizza.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;
