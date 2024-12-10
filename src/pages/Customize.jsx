import React, { useState, useEffect } from 'react';
import "../styles/customize.css";

// CustomizePizza Component
function CustomizePizza() {
  const [size, setSize] = useState('Medium');
  const [toppings, setToppings] = useState([]);
  const [extras, setExtras] = useState([]);

  const availableToppings = ['Cheese', 'Pepperoni', 'Salami', 'Ham', 'Bacon', 'Ground Beef', 'Green Pepper', 'Red Pepper', 'Onion', 'Mushrooms', 'Black Olives'];
  const availableExtras = ['Extra Cheese', 'Parmesan Cheese', 'Red Chili Flakes', 'Extra Garlic & Herbs'];

  useEffect(() => {
    const savedSize = localStorage.getItem('pizzaSize');
    const savedToppings = JSON.parse(localStorage.getItem('pizzaToppings') || '[]');
    const savedExtras = JSON.parse(localStorage.getItem('pizzaExtras') || '[]');
    
    if (savedSize) setSize(savedSize);
    if (savedToppings.length) setToppings(savedToppings);
    if (savedExtras.length) setExtras(savedExtras);
  }, []);

  const handleSizeChange = (event) => {
    const newSize = event.target.value; 
    setSize(newSize); 
    localStorage.setItem('pizzaSize', newSize); 
  };

  const handleToppingChange = (event) => {
    const selectedTopping = event.target.value;
    let updatedToppings;
    if (toppings.includes(selectedTopping)) {
        updatedToppings = toppings.filter(topping => topping !== selectedTopping);
    } else {
        updatedToppings = [...toppings, selectedTopping];
    }
    setToppings(updatedToppings);
    localStorage.setItem('pizzaToppings', JSON.stringify(updatedToppings));
  };

  const handleExtraOptionChange = (event) => {
    const selectedOption = event.target.value;
    let updatedExtras;
    if (extras.includes(selectedOption)) {
        updatedExtras = extras.filter(option => option !== selectedOption);
    } else {
        updatedExtras = [...extras, selectedOption];
    }
    setExtras(updatedExtras);
    localStorage.setItem('pizzaExtras', JSON.stringify(updatedExtras));
  };

  return (
    <div className="customize-container">
        <div className="customize-pizza">
        <h1>Customize your pizza the Crusti way!</h1>

        <div className="hero-banner">
        <img src="" alt="Delicious Pizza" className="banner-image" />
        </div>

        {/* Size Selection */}
        <div className="size-selection">
            <h3>Select Size:</h3>
            <select value={size} onChange={handleSizeChange}>
            <option value="Small (10 in.)">Small (10 in.)</option>
            <option value="Medium (14 in.)">Medium (14 in.)</option>
            <option value="Large (16 in.)">Large (16 in.)</option>
            <option value="Extra Large (18 in.)">Extra Large (18 in.)</option>
            </select>
        </div>

        {/* Topping Selector */}
        <div className="toppings-selection">
            <h3>Select Toppings:</h3>
            {availableToppings.map((topping) => (
            <div key={topping}>
                <input
                type="checkbox"
                value={topping}
                checked={toppings.includes(topping)}
                onChange={handleToppingChange}
                />
                <label>{topping}</label>
            </div>
            ))}
        </div>

        {/* Extra Options Selection */}
        <div className="extra-options-selection">
            <h3>Select Extra Options:</h3>
            {availableExtras.map((option) => (
            <div key={option}>
                <input
                type="checkbox"
                value={option}
                checked={extras.includes(option)}
                onChange={handleExtraOptionChange}
                />
                <label>{option}</label>
            </div>
            ))}
        </div>

        {/* Summary of the Pizza */}
        <div className="pizza-summary">
            <h3>Your Pizza:</h3>
            <p>Size: {size}</p>
            <p>Toppings: {toppings.length > 0 ? toppings.join(', ') : 'None'}</p>
            <p>Extra Options: {extras.length > 0 ? extras.join(', ') : 'None'}</p>
        </div>
        
         {/* Picture Section */}
        <div className="picture-section">
            <img src="your-image-url.jpg" alt="Pizza" className="customize-picture" />
        </div>
        </div>
    </div>
  );
}

export default CustomizePizza;