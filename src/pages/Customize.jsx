import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/customize.css";
import pizzaBanner from '../media/pizza_customize_banner.jpg';
import pizza_custom_preview from '../media/pizza-preview_customize.jpg';
import Cheese from '../media/Ingredients/Cheese.jpg';
import Pepperoni from '../media/Ingredients/Pepperoni.jpg';
import Salami from '../media/Ingredients/Salami.jpg';
import Ham from '../media/Ingredients/Ham.jpg';
import Bacon from '../media/Ingredients/Bacon.jpg';
import GreenPepper from '../media/Ingredients/GreenPepper.jpg';
import RedPepper from '../media/Ingredients/RedPepper.jpg';
import Onion from '../media/Ingredients/Onion.jpg';
import Mushrooms from '../media/Ingredients/Mushrooms.jpg';
import BlackOlives from '../media/Ingredients/BlackOlives.jpg';
import ExtraCheese from '../media/Ingredients/ExtraCheese.jpg';
import ParmesanCheese from '../media/Ingredients/ParmesanCheese.jpg';
import RedChiliFlakes from '../media/Ingredients/RedChiliFlakes.jpg';
import GarlicAndHerbs from '../media/Ingredients/GarlicAndHerbs.jpg';
import BBQSauce from '../media/Ingredients/BBQSauce.jpg';
import Basil from '../media/Ingredients/Basil.jpg';
import Pineapple from '../media/Ingredients/Pineapple.jpg';
import Sausage from '../media/Ingredients/Sausage.jpg';
import TomatoSauce from '../media/Ingredients/TomatoSauce.jpg';

const ingredientImages = {
  TomatoSauce, Cheese, Pepperoni, Salami, Ham, Bacon, GreenPepper, RedPepper, Onion, Mushrooms, BlackOlives, BBQSauce, Basil, Pineapple, Sausage
};

const extraImages = {
  ExtraCheese, ParmesanCheese, RedChiliFlakes, GarlicAndHerbs,
};

function Customize() {
  const [size, setSize] = useState('Medium');
  const [ingredients, setIngredients] = useState([])
  const [extras, setExtras] = useState([]);
  const [specialInstructions, setSpecialInstructions] = useState('');

  const navigate = useNavigate();

  const availableIngredients = Object.keys(ingredientImages);
  const availableExtras = Object.keys(extraImages);

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleCheckboxChange = (item, setItems, itemsKey) => {
    const updatedItems = itemsKey.includes(item)
      ? itemsKey.filter(i => i !== item)
      : [...itemsKey, item];
    setItems(updatedItems);
  };

  const sizePrices = {
    "10": 10, // Small
    "14": 14, // Medium
    "16": 16, // Large
    "18": 18, // Extra Large
  };
  
  const ingredientPrice = 1; 
  const extraPrice = 0.5; 
  
  const calculatePrice = () => {
    const basePrice = sizePrices[size] || 0;
    const ingredientsCost = ingredients.length * ingredientPrice;
    const extrasCost = extras.length * extraPrice;
  
    return basePrice + ingredientsCost + extrasCost;
  };

  const handleSpecialInstructionsChange = (event) => {
    setSpecialInstructions(event.target.value);
  };

  const handleAddToOrder = async () => {
    const calculatedPrice = calculatePrice(); // Call the calculation function
  
    const newOrder = {
      id: crypto.randomUUID(),
      size: size,
      ingredients: ingredients,
      extras: extras,
      specialInstructions: specialInstructions,
      price: calculatedPrice, // Use the calculated price
    };
  
    try {
      const response = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOrder),
      });
      if (response.ok) {
        console.log("Order successfully added!");
        navigate("/orders"); // Redirect to the orders page
      } else {
        console.error("Failed to add order.");
      }
    } catch (error) {
      console.error("Error adding order:", error);
    }
  };

  const renderOptions = (items, setItems, itemsKey, images) =>
    items.map(item => (
      <div key={item} className="option-container">
        <input
          type="checkbox"
          value={item}
          checked={itemsKey.includes(item)}
          onChange={() => handleCheckboxChange(item, setItems, itemsKey)}
        />
        <label>{item}</label>
        <img src={images[item]} alt={item} className="option-image" />
      </div>
    ));

  return (
    <div className="customize-container">
      <div className="custom_banner">
        <img src={pizzaBanner} alt="Custom Banner" />
        <h1 className="banner-title">Customize</h1>
      </div>

      <div className="content-section">
        <div className="left-section">
          <div className="custom-preview">
            <img src={pizza_custom_preview} alt="Pizza Preview" className="customize-picture" />
          </div>
        </div>

        <div className="right-section">
          <div className="customizer-section">
            <h3 className="selection-title">Selection</h3>
            <div className="size-selection">
              <h3>Size:</h3>
              <select value={size} onChange={handleSizeChange} className="size-dropdown">
                <option value="10">Small (10 in.)</option>
                <option value="14">Medium (14 in.)</option>
                <option value="16">Large (16 in.)</option>
                <option value="18">Extra Large (18 in.)</option>
              </select>
            </div>
            <h3>Toppings:</h3>
            <div className="ingredients-selection">
              {renderOptions(availableIngredients, setIngredients, ingredients, ingredientImages)}
            </div>
            <h3>Extras:</h3>
            <div className="extra-options-selection">
              {renderOptions(availableExtras, setExtras, extras, extraImages)}
            </div>
            <div className="special-instructions">
              <h3>Special Instructions:</h3>
              <textarea
                placeholder="Type here..."
                value={specialInstructions}
                onChange={handleSpecialInstructionsChange}
                className="special-instructions-textarea"
              ></textarea>

              <button onClick={handleAddToOrder} className="add-to-order-button">
                Add to Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customize;

