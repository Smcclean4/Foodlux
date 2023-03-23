import Homeitems from "./Homeitems";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";

describe('creating tests for Homeitems component', () => {
  const props = {
    menu: [{ item: 'items1', company: 'company1', type: 'type1' }],
    title: 'title1',
    addtocart: jest.fn(),
    searchinfo: { itemFromSearch: 'item1', companyFromSearch: 'company1' },
    render: true || false,
    setrender: jest.fn()
  }

  test('making sure that Homeitems component renders with all of its props', () => {
    const { getByTestId } = render(<Homeitems {...props} />)
    const homeItems = getByTestId('Homeitems')
    expect(homeItems).toBeDefined();
  })

  test('make sure that add to cart functionality works properly', () => {
    const { getByTestId } = render(<Homeitems {...props} />)
    const firstAddCart = getByTestId('addcart-test-0')
    expect(firstAddCart).toBeInTheDocument();
  })
})