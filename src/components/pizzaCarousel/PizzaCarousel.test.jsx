import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";
import PizzaCarousel from "./PizzaCarousel";

describe("PizzaCarousel Component", () => {
  const mockPizzas = [
    {
      name: "Margherita",
      image: "http://example.com/margherita.png",
      price: 10,
      ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Basil"],
    },
    {
      name: "Pepperoni",
      image: "http://example.com/pepperoni.png",
      price: 12,
      ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Pepperoni"],
    },
  ];

  const mockAddOrder = vi.fn();

  beforeEach(() => {
    mockAddOrder.mockClear();
  });

  it("renders all pizzas", () => {
    render(<PizzaCarousel pizzas={mockPizzas} addOrder={mockAddOrder} />);
    // Use role queries for headings to avoid multiple matches
    const margheritaHeading = screen.getByRole("heading", { name: /Margherita/i });
    const pepperoniHeading = screen.getByRole("heading", { name: /Pepperoni/i });
    expect(margheritaHeading).toBeInTheDocument();
    expect(pepperoniHeading).toBeInTheDocument();
  });

  it("shows the correct active pizza", () => {
    // By default, imageIndex = Math.floor(2/2)=1, so Pepperoni should be active.
    render(<PizzaCarousel pizzas={mockPizzas} addOrder={mockAddOrder} />);
    const pepperoniHeading = screen.getByRole("heading", { name: /Pepperoni/i });
    const pepperoniCard = pepperoniHeading.closest(".pizza-card");
    expect(pepperoniCard).toHaveClass("pizza-card-active");
  });

  it("calls addOrder with the correct arguments when a size button is clicked", () => {
    render(<PizzaCarousel pizzas={mockPizzas} addOrder={mockAddOrder} />);
    // The active pizza is Pepperoni. Find the 16" button for Pepperoni.
    const sixteenInchButtons = screen.getAllByRole("button", { name: /16"/i });
    const sixteenInchButton = sixteenInchButtons[1]; // Pepperoni is second, so index=1
    fireEvent.click(sixteenInchButton);

    expect(mockAddOrder).toHaveBeenCalledTimes(1);
    expect(mockAddOrder).toHaveBeenCalledWith({
      name: "Pepperoni",
      size: 16,
      price: 14,
    });
  });

  it("changes the active pizza when a dot is clicked", () => {
    render(<PizzaCarousel pizzas={mockPizzas} addOrder={mockAddOrder} />);

    const dots = screen.getAllByRole("button", { name: "" });
    expect(dots.length).toBe(2);

    const margheritaHeading = screen.getByRole("heading", { name: /Margherita/i });
    const pepperoniHeading = screen.getByRole("heading", { name: /Pepperoni/i });

    const margheritaCard = margheritaHeading.closest(".pizza-card");
    const pepperoniCard = pepperoniHeading.closest(".pizza-card");

    // Initially Pepperoni is active
    expect(pepperoniCard).toHaveClass("pizza-card-active");

    // Click the first dot to switch to Margherita
    fireEvent.click(dots[0]);

    // Now Margherita should be active
    expect(margheritaCard).toHaveClass("pizza-card-active");
    expect(pepperoniCard).not.toHaveClass("pizza-card-active");
  });
});
