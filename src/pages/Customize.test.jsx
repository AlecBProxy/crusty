import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'; // Add this import
import Customize from './Customize';

describe('Customize Component', () => {
  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <Customize />
      </BrowserRouter>
    );

    // Check if the Customize page renders essential sections
    expect(screen.getByText(/Customize/)).toBeInTheDocument();
    expect(screen.getByText(/Size:/)).toBeInTheDocument();
    expect(screen.getByText(/Toppings:/)).toBeInTheDocument();
    expect(screen.getByText(/Extras:/)).toBeInTheDocument();
  });

  it('updates size selection', () => {
    render(
      <BrowserRouter>
        <Customize />
      </BrowserRouter>
    );

    // Simulate changing the size dropdown
    const sizeDropdown = screen.getByRole('combobox');
    fireEvent.change(sizeDropdown, { target: { value: '14' } }); // Medium (14 in.)

    // Assert that the dropdown's value has been updated
    expect(sizeDropdown.value).toBe('14'); // Value matches `Customize.jsx` dropdown
  });

  it('handles adding to order', async () => {
    // Mock the global fetch function
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      })
    );

    render(
      <BrowserRouter>
        <Customize />
      </BrowserRouter>
    );

    // Simulate clicking the "Add to Order" button
    const addToOrderButton = screen.getByText(/Add to Order/);
    fireEvent.click(addToOrderButton);

    // Assert that the fetch function was called with the correct parameters
    expect(fetch).toHaveBeenCalledWith(
      'http://localhost:3002/customOrders',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: expect.any(String), // Verify it's a JSON string
      })
    );

    // Check if the mock fetch was resolved
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});

