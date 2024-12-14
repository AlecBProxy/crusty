import PizzaCarousel from "../components/pizzaCarousel/PizzaCarousel";

const PizzaListings = ({ pizzas, addOrder }) => {
  return (
    <div>
      <PizzaCarousel pizzas={pizzas} addOrder={addOrder} />
    </div>
  );
};

export default PizzaListings;
