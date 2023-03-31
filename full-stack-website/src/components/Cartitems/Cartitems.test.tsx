import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import React from "react";
import Cartitems from './Cartitems';

describe('creating tests for cart items component', () => {
  const props = {
    items: [],
    additem: jest.fn(),
    removeitem: jest.fn()
  }
  test('making sure that cart items component renders', () => {
    const { getByTestId } = render(<Cartitems {...props} />)
    let cartItems = getByTestId('Cartitems')
    expect(cartItems).toBeInTheDocument();
    expect(cartItems).toBeDefined();
  })

  test('testing to see if the item is rendering', () => {
    const { queryByTestId } = render(<Cartitems {...props} />)
    let cartItemTest = queryByTestId('cart-item-test')
    expect(cartItemTest).toBeDefined();
  })

  test('testing to see if the image is rendering', () => {
    const { queryByTestId } = render(<Cartitems {...props} />)
    let cartImageTest = queryByTestId('cart-image-test')
    expect(cartImageTest).toBeDefined();
  })

  test('testing to see if the quantity is rendering', () => {
    const { queryByTestId } = render(<Cartitems {...props} />)
    let cartQuantityTest = queryByTestId('cart-quantity-test')
    expect(cartQuantityTest).toBeDefined();
  })

  test('testing to see if the description is rendering', () => {
    const { queryByTestId } = render(<Cartitems {...props} />)
    let cartDescTest = queryByTestId('cart-desc-test')
    expect(cartDescTest).toBeDefined();
  })

  test('testing to see if the price is rendering', () => {
    const { queryByTestId } = render(<Cartitems {...props} />)
    let cartPriceTest = queryByTestId('cart-price-test')
    expect(cartPriceTest).toBeDefined();
  })
})