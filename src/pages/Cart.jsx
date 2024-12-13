import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Cart = () => {
  const { state: orderData } = useLocation();
  const [cartData, setCartData] = useState(orderData);

  useEffect(() => {
    if (!orderData) {
      const savedData = JSON.parse(localStorage.getItem('cartData'));
      setCartData(savedData);
    } else {
      localStorage.setItem('cartData', JSON.stringify(orderData));
    }
  }, [orderData]);

  if (!cartData) {
    return <p>No order data available. Please customize your pizza first!</p>;
  }

  return (
    <><div>
          <h1>Your Order</h1>
          <p><strong>Size:</strong> {cartData.size}</p>
          <p><strong>Toppings:</strong> {orderData.ingredients.join(', ')}</p>
          <p><strong>Extras:</strong> {cartData.extras.join(', ')}</p>
          <p><strong>Special Instructions:</strong> {cartData.specialInstructions}</p>
      </div><div>
              {/* Existing Cart content */}
              <Link to="/customize">
                  <button>Back to Customize</button>
              </Link>
          </div></>
    

  );
};

export default Cart;