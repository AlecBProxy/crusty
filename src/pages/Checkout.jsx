import { useState } from "react";
import "../styles/checkout.css";

function CheckoutPage({ orders, deleteOrder }) {
  // Form states
  const [cardName, setCardName] = useState("John Dough");
  const [cardNumber, setCardNumber] = useState("1234567890123456");
  const [expiry, setExpiry] = useState("12/23");
  const [cvv, setCvv] = useState("123");
  const [billingAddress, setBillingAddress] = useState("1801 Pizza St");
  const [city, setCity] = useState("Pizza Town");
  const [province, setProvince] = useState("CA");
  const [zip, setZip] = useState("90210");

  // Compute subtotal, tax, total
  const subTotal = orders.reduce((acc, order) => acc + order.price, 0);
  const taxRate = 0.15;
  const tax = Math.round(subTotal * taxRate * 100) / 100;
  const total = Math.round((subTotal + tax) * 100) / 100;

  const handleCheckoutSubmit = (e) => {

    // Basic alert for demonstration
    alert(`Thank you for your order! 
Name on Card: ${cardName}
Billing Address: ${billingAddress}, ${city}, ${province} ${zip}`);

    // Clear form
    setCardName("");
    setCardNumber("");
    setExpiry("");
    setCvv("");
    setBillingAddress("");
    setCity("");
    setProvince("");
    setZip("");

    // delete all orders
    orders.forEach((order) => {
      deleteOrder(order.id);
    });

  };

  return (
    <div className="checkout-container">
      <h1>Checkout Page</h1>

      {/* Orders List */}
      <div className="checkout-orders">
        {orders.length === 0 ? (
          <p>No orders in your cart.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="checkout-order">
              <div className="checkout-order-top">
                <h3>{order.name}</h3>
                <div className="checkout-order-top-right">
                  <p>Size: {order.size}&quot;</p>
                  <p>Price: ${order.price}</p>
                  <button onClick={() => deleteOrder(order.id)}>🅧</button>
                </div>

              </div>
              {/* Optional: If your order object has these fields */}
              {order.ingredients && (
                <ul>
                  {order.ingredients.map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                  ))}
                </ul>
              )}
              {order.specialInstructions && (
                <p><strong>Special Instructions:</strong> {order.specialInstructions}</p>
              )}
            </div>
          ))
        )}
      </div>

      {/* Subtotal, Tax, and Total */}
      {orders.length > 0 && (
        <div className="checkout-summary">
          <div className="checkout-summary-line">
            <span>Subtotal:</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>
          <div className="checkout-summary-line">
            <span>Tax:</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="checkout-summary-line">
            <strong>Total:</strong>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </div>
      )}

      {/* Checkout Form */}
      <form className="checkout-form" onSubmit={handleCheckoutSubmit}>
        <div className="checkout-field">
          <label htmlFor="card-name">Name on Card:</label>
          <input
            id="card-name"
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            required
          />
        </div>

        <div className="checkout-field">
          <label htmlFor="card-number">Card Number:</label>
          <input
            id="card-number"
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            pattern="\d{16}" // 16 digits
            title="Enter a 16-digit card number"
            required
          />
        </div>

        <div className="checkout-field">
          <label htmlFor="expiry">Expiry (MM/YY):</label>
          <input
            id="expiry"
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            pattern="(0[1-9]|1[0-2])\/\d{2}"
            title="Format: MM/YY"
            placeholder="MM/YY"
            required
          />
        </div>

        <div className="checkout-field">
          <label htmlFor="cvv">CVV:</label>
          <input
            id="cvv"
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            pattern="\d{3,4}"
            title="Enter a 3 or 4 digit CVV"
            required
          />
        </div>

        <div className="checkout-field">
          <label htmlFor="billing-address">Billing Address:</label>
          <input
            id="billing-address"
            type="text"
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
            required
          />
        </div>

        <div className="checkout-field">
          <label htmlFor="city">City:</label>
          <input
            id="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div className="checkout-field">
          <label htmlFor="state">Province</label>
          <input
            id="province"
            type="text"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            required
          />
        </div>

        <div className="checkout-field">
          <label htmlFor="zip">Postal Code:</label>
          <input
            id="zip"
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            pattern="\d{6}"
            title="Enter a 6-digit postal code"
            required
          />
        </div>

        <button className="submit-btn" type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;
