import { render, fireEvent } from "@testing-library/react";
import { CartModal } from "./CartModal";
import React from 'react'

describe('making sure that cart modal props and functionality works ', () => {
  test('make sure that when modal is clicked it opens and closes', () => {
    const isShowing = true || false;
    const toggle = jest.fn();
    const cart = ''
    const { getByText, getByTestId } = render(<CartModal isShowing={isShowing} hide={toggle} state={cart} />)
    const toggleButton = getByTestId('cart-close');
    test('checking is isShowing is a boolean', () => {
      expect(typeof isShowing === 'boolean').toBe(true);
    })
    fireEvent.click(toggleButton);
    test('', () => {
      expect(toggle).toHaveBeenCalledTimes(1);
    })
  })
})