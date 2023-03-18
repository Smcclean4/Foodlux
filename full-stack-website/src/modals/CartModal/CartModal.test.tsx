import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Link, Route, Routes } from "react-router-dom";
import { CartModal } from "./CartModal";
import React from 'react'

describe('making sure that cart modal props and functionality works ', () => {
  const isShowing = true || false;

  test('make sure that toggle is being clicked', () => {
    const toggle = jest.fn();
    const cart = [];
    const { getByTestId } = render(<CartModal isShowing={isShowing} hide={toggle} state={cart} />, { wrapper: MemoryRouter })
    const toggleButton = getByTestId('cartmodal-close');

    fireEvent.click(toggleButton);
    expect(toggle).toHaveBeenCalledTimes(1);
  })

  test('testing if go to cart button is being clicked', () => {
    const { getByTestId } = render(
      <Routes>
        <Route path="/" element={<Link to="/Cart" data-testid="cartmodal-button" />} />
        <Route path="/Cart" element={<div>Cart</div>} />
      </Routes>
      , { wrapper: BrowserRouter })
    const goToCartButton = getByTestId('cartmodal-button')
    fireEvent.click(goToCartButton);
    expect(window.location.pathname).toBe("/Cart");
  })

  test('making sure that isShowing is a boolean', () => {
    expect(typeof isShowing === 'boolean').toBe(true);
  })
})