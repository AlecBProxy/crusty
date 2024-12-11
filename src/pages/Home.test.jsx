import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Home from "./Home";
import "@testing-library/jest-dom";

describe("Home Page", () => {
  it("renders the order button with correct text", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const button = screen.getByRole("button", { name: /order now!/i });
    expect(button).toBeInTheDocument();
  });

  it("renders the link for the order page", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });

  it("renders the bottom banner image", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const bannerImage = screen.getByAltText(/farm hill banner/i);
    expect(bannerImage).toBeInTheDocument();
  });
});
