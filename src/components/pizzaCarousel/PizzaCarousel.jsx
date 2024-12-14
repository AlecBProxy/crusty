import { useState } from 'react';
import { motion, useMotionValue } from 'framer-motion'
// import pizzaCarousel.css
import './pizzaCarousel.css'


const pizzaOptions = [
  { name: 'Margherita', image: 'https://pinza.com/application/files/7816/2796/6583/0023_PINZA-mask-slice-MEATY-tandoori.png', price: 10, ingredients: ['Tomato Sauce', 'Mozzarella Cheese', 'Basil'] },
  { name: 'Pepperoni', image: 'https://pinza.com/application/files/2916/2796/6597/0030_PINZA-mask-slice-MEATY-pepperoni.png', price: 12, ingredients: ['Tomato Sauce', 'Mozzarella Cheese', 'Pepperoni'] },
  { name: 'Hawaiian', image: 'https://pinza.com/application/files/2916/2796/6595/0029_PINZA-mask-slice-MEATY-pesto.png', price: 13, ingredients: ['Tomato Sauce', 'Mozzarella Cheese', 'Ham', 'Pineapple'] },
  { name: 'Veggie', image: 'https://pinza.com/application/files/8216/2796/6544/0000_PINZA-mask-slice-VEGETARIAN-SEAFOOD-veggielicious.png', price: 14, ingredients: ['Tomato Sauce', 'Mozzarella Cheese', 'Mushrooms', 'Bell Peppers', 'Olives'] },
  { name: 'BBQ Chicken', image: 'https://pinza.com/application/files/2716/2796/6548/0003_PINZA-mask-slice-VEGETARIAN-SEAFOOD-pinzafied.png', price: 15, ingredients: ['BBQ Sauce', 'Mozzarella Cheese', 'Chicken', 'Red Onions'] },
  { name: 'Meat Lovers', image: 'https://pinza.com/application/files/1016/7585/7358/0038_PINZA-mask-slice-MEATY-truffle-salami.png', price: 16, ingredients: ['Tomato Sauce', 'Mozzarella Cheese', 'Pepperoni', 'Sausage', 'Bacon'] },
  { name: 'Supreme', image: 'https://pinza.com/application/files/5516/3594/0715/0000_PINZA-mask-slice-MEATY-Shish.png', price: 17, ingredients: ['Tomato Sauce', 'Mozzarella Cheese', 'Pepperoni', 'Sausage', 'Mushrooms', 'Bell Peppers', 'Olives'] },
];

const PizzaCarousel = ({ pizzas, addOrder }) => {


  // if Pizzas are not passed as props, use the pizzaOptions array
  if (pizzas.length === 0) {
    pizzas = pizzaOptions
  }

  const DRAG_BUFFER = 50

  const dragX = useMotionValue(0)
  const [imageIndex, setImageIndex] = useState(Math.floor(pizzas.length / 2))

  const [dragging, setDragging] = useState(true)

  const handleDragStart = () => {
    setDragging(true)
  }

  const handleDragEnd = () => {
    setDragging(false)
    const x = Math.round(dragX.get())
    console.log(x)
    if (x < -DRAG_BUFFER && imageIndex < pizzas.length - 1) {
      setImageIndex(pv => pv + 1)
    } else if (x > DRAG_BUFFER && imageIndex > 0) {
      setImageIndex(pv => pv - 1)
    }
  }

  const handleAddOrder = (order) => {
    addOrder(order)
  }


  return (
    <div className="pizza-page">
      <motion.div
        drag='x'
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        animate={{ translateX: -imageIndex * 280 }}
        transition={{ type: 'spring', stiffness: 300, damping: 50 }}
        className={`carousel-container`}
        style={{ x: dragX, marginLeft: `${(Math.round(pizzas.length / 2) + 2) * 280}px` }}
      >
        {pizzas.map((pizza, index) => (
          <motion.div
            key={index}
            className={`pizza-card 
              ${imageIndex == index ? 'pizza-card-active' : ''} 
              ${imageIndex - 1 == index ? 'pizza-card-prev1' : ''} 
              ${imageIndex - 2 == index ? 'pizza-card-prev2' : ''}
              ${imageIndex - 3 == index ? 'pizza-card-prev3' : ''}`}>
            <img className='pizza-card-img' src={pizza.image} alt={pizza.name} />
            <h2>{pizza.name}</h2>
            <div className={`pizza-sizes ${imageIndex == index ? 'pizza-content-active' : ''} `}>
              <div className="pizza-size-container">
                <button
                  onClick={() => handleAddOrder({ name: pizza.name, size: 12, price: pizza.price })}
                  className='pizza-size pizza-size-12'>12&quot;</button>
                <p>${pizza.price}</p>
              </div>
              <div className="pizza-size-container">
                <button
                  onClick={() => handleAddOrder({ name: pizza.name, size: 16, price: pizza.price + 2 })}
                  className='pizza-size pizza-size-16'>16&quot;</button>
                <p>${pizza.price + 2}</p>
              </div>
              <div className="pizza-size-container">
                <button
                  onClick={() => handleAddOrder({ name: pizza.name, size: 18, price: pizza.price + 4 })}
                  className='pizza-size pizza-size-18'>18&quot;</button>
                <p>${pizza.price + 4}</p>
              </div>
            </div>
            <ul className='pizza-card-list'>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
      <Dots imageIndex={imageIndex} setImageIndex={setImageIndex} pizzas={pizzas} />
    </div>
  );
}

const Dots = ({ imageIndex, setImageIndex, pizzas }) => {
  return (
    <div className="dots">
      {pizzas.map((_, index) => (
        <button
          key={index}
          className={`dot ${index === imageIndex ? 'dot-active' : ''}`}
          onClick={() => setImageIndex(index)}
        />
      ))}
    </div>
  )
}

export default PizzaCarousel