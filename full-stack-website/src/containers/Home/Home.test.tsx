import Home from "./Home";
import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'

describe('making sure that components are rendering within home component', () => {

  it('should make sure that the search bar component renders', () => {
    const { getByTestId } = render(<Home />)
    const searchBar = getByTestId('search-bar');
    expect(searchBar).toBeInTheDocument();
  })

  it('should make sure that tabs component renders', () => {
    const { getByLabelText } = render(<Home />)
    const tabs = getByLabelText('Foodlux tabs');
    expect(tabs).toBeInTheDocument();
  })

  it('should make sure that the Homeitems component renders', () => {
    const { getByTestId } = render(<Home />)
    const homeItems = getByTestId('Homeitems')
    expect(homeItems).toBeInTheDocument();
  })
})