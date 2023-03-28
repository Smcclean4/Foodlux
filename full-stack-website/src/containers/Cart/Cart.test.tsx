import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import React from "react";
import { MemoryRouter } from 'react-router-dom';
import Cart from './Cart';

describe('creating tests for cart container', () => {
  test('tesing that home button is correctly rendered', () => {
    const { getByTestId } = render(<Cart />, { wrapper: MemoryRouter })
    let homeButton = getByTestId('home-button-test')
    expect(homeButton).toBeInTheDocument();
    expect(homeButton).toBeDefined();
  })

  test('testing that checkout button is correctly rendered', () => {
    const { getByTestId } = render(<Cart />, { wrapper: MemoryRouter })
    let checkoutButton = getByTestId('checkout-button-test')
    expect(checkoutButton).toBeInTheDocument();
    expect(checkoutButton).toBeDefined();
  })

  test('testing that cart items are rendered correctly', () => {
    const { queryByTestId } = render(<Cart />, { wrapper: MemoryRouter })
    let cartItems = queryByTestId('Cartitems')
    expect(cartItems).toBeDefined();
  })
})