// import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]); // Declare state for cart items

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch("http://localhost:3002/orders");
        if (response.ok) {
          const data = await response.json();
          setCartItems(data); // Update state with fetched data
        } else {
          console.error("Failed to fetch cart items.");
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index}>
            <p><strong>Size:</strong> {item.size}</p>
            <p><strong>Ingredients:</strong> {item.ingredients.join(", ")}</p>
            <p><strong>Extras:</strong> {item.extras.join(", ")}</p>
            <p><strong>Special Instructions:</strong> {item.specialInstructions}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;