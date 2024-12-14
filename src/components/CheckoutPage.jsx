import React, { useState, useEffect } from "react";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  // Fetch cart items from db.json
  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await fetch("http://localhost:3002/cart");
      const data = await response.json();
      setCartItems(data);
      calculateTotal(data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  const calculateTotal = (items) => {
    const subtotal = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const tax = subtotal * 0.15; // Assume 15% tax
    setTotal(subtotal + tax);
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // Simulate clearing cart by deleting all items
      await Promise.all(
        cartItems.map((item) =>
          fetch(`http://localhost:3002/cart/${item.id}`, {
            method: "DELETE",
          })
        )
      );
      alert("Order placed successfully!");
      setCartItems([]);
      setTotal(0);
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout Summary</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Add some products to proceed.</p>
      ) : (
        <>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Product
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Quantity
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {item.name}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {item.quantity}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    ${item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: "20px" }}>
            <h3>Subtotal: ${(total / 1.15).toFixed(2)}</h3>
            <h3>Tax (15%): ${(total - total / 1.15).toFixed(2)}</h3>
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
          {/* Proceed to Checkout Button */}
          <button
            onClick={handleCheckout}
            disabled={loading}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            {loading ? "Processing..." : "Proceed to Checkout"}
          </button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
