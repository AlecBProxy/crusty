import { useState } from "react";

const Testing = ({ orders, addOrder }) => {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      name,
      size: parseInt(size, 10),
      price: parseFloat(price),
    };

    addOrder(newOrder);

    // Clear form inputs
    setName("");
    setSize("");
    setPrice("");
  };

  return (
    <div>
      <h1>Testing</h1>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            {order.name} - {order.size}&quot; - ${order.price}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          step="1"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Testing;
