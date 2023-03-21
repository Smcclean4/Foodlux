import Home from "./Home";
import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'

describe('making sure that components are rendering within home component', () => {
  const { getByTestId, getByTitle } = render(<Home />)

  it('should make sure that the search bar component renders', () => {
    const searchBar = getByTestId('search-bar');
    expect(searchBar).toBeInTheDocument();
  })

  it('should make sure that the cart modal component renders', () => {
    const cartModal = getByTitle('cart-modal');
    expect(cartModal).toBeInTheDocument();
  })
})