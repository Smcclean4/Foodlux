import Homeitems from "./Homeitems";
import { fireEvent, render } from "@testing-library/react";
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

  test('add cart is defined within the homeitems component', () => {
    const { queryByTestId } = render(<Homeitems {...props} />)
    const firstAddCart = queryByTestId('addcart-test-0')
    expect(firstAddCart).toBeDefined();
  })

  test('add cart when fired stores item within the cart if it doesnt already exist', () => {
    const { queryAllByTestId } = render(<Homeitems {...props} />)
    const firstAddCart = queryAllByTestId('addcart-test-0')
  })
})