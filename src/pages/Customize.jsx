import React, { useState, useEffect } from 'react';
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

const toppingImages = {
  Cheese, Pepperoni, Salami, Ham, Bacon, GreenPepper, RedPepper, Onion, Mushrooms, BlackOlives,
};

const extraImages = {
  ExtraCheese, ParmesanCheese, RedChiliFlakes, GarlicAndHerbs,
};

function CustomizePizza() {
  const [size, setSize] = useState('Medium');
  const [toppings, setToppings] = useState([]);
  const [extras, setExtras] = useState([]);
  const [specialInstructions, setSpecialInstructions] = useState('');

  const availableToppings = Object.keys(toppingImages);
  const availableExtras = Object.keys(extraImages);

  useEffect(() => {
    setSize(localStorage.getItem('pizzaSize') || 'Medium');
    setToppings(JSON.parse(localStorage.getItem('pizzaToppings') || '[]'));
    setExtras(JSON.parse(localStorage.getItem('pizzaExtras') || '[]'));
    setSpecialInstructions(localStorage.getItem('pizzaSpecialInstructions') || '');
  }, []);

  const handleSizeChange = (event) => {
    const newSize = event.target.value;
    setSize(newSize);
    localStorage.setItem('pizzaSize', newSize);
  };

  const handleCheckboxChange = (item, setItems, itemsKey) => {
    const updatedItems = itemsKey.includes(item)
      ? itemsKey.filter(i => i !== item)
      : [...itemsKey, item];
    setItems(updatedItems);
    localStorage.setItem(`pizza${setItems === setToppings ? 'Toppings' : 'Extras'}`, JSON.stringify(updatedItems));
  };

  const handleSpecialInstructionsChange = (event) => {
    const instructions = event.target.value;
    setSpecialInstructions(instructions);
    localStorage.setItem('pizzaSpecialInstructions', instructions);
  };

  const handleAddToCart = () => {
    const cartData = {
      size,
      toppings,
      extras,
      specialInstructions,
    };
    localStorage.setItem('cartItem', JSON.stringify(cartData));
    alert('Your selections have been added to the cart!');
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
      {/* Full-Width Banner */}
      <div className="custom_banner">
        <img src={pizzaBanner} alt="Custom Banner" />
        <h1 className="banner-title">Customize</h1>
      </div>

      {/* Two-Column Content Section */}
      <div className="content-section">
        {/* Left Section: Pizza Preview */}
        <div className="left-section">
          <div className="custom-preview">
            <img src={pizza_custom_preview} alt="Pizza Preview" className="customize-picture" />
          </div>
        </div>

        {/* Right Section: Selection */}
        <div className="right-section">
          <div className="customizer-section">
            <h3 className="selection-title">Selection</h3>
            <div className="size-selection">
              <h3>Size:</h3>
              <select value={size} onChange={handleSizeChange} className="size-dropdown">
                <option value="Small (10 in.)">Small (10 in.)</option>
                <option value="Medium (14 in.)">Medium (14 in.)</option>
                <option value="Large (16 in.)">Large (16 in.)</option>
                <option value="Extra Large (18 in.)">Extra Large (18 in.)</option>
              </select>
            </div>
            <div className="toppings-selection">
              <h3>Toppings:</h3>
              {renderOptions(availableToppings, setToppings, toppings, toppingImages)}
            </div>
            <div className="extra-options-selection">
              <h3>Extras:</h3>
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

              {/* Add to Cart Button */}
              <button onClick={handleAddToCart} className="add-to-cart-button">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomizePizza;
