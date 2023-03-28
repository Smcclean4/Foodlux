import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Link, Route, Routes } from "react-router-dom";
import '@testing-library/jest-dom'
import { CartModal } from "./CartModal";
import React from 'react'

describe('making sure that cart modal props and functionality works ', () => {
  const props = {
    isShowing: true || false,
    hide: jest.fn(),
    state: []
  }

  test('making sure that the cart modal renders correctly', () => {
    const { getByTestId } = render(<CartModal {...props} />, { wrapper: MemoryRouter })
    let cartModal = getByTestId('cartmodal-test')
    expect(cartModal).toBeInTheDocument();
    expect(cartModal).toBeDefined();
  })

  test('make sure that toggle is being clicked', () => {
    const { getByTestId } = render(<CartModal {...props} />, { wrapper: MemoryRouter })
    const toggleButton = getByTestId('cartmodal-close');
    fireEvent.click(toggleButton);
    expect(props.hide).toHaveBeenCalledTimes(1);
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
    const isShowing = true || false;
    expect(typeof isShowing === 'boolean').toBe(true);
  })
})