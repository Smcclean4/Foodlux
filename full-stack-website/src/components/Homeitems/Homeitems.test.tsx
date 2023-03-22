import Homeitems from "./Homeitems";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";

describe('creating tests for Homeitems component', () => {
  test('making sure that Homeitems component renders with all of its props', () => {
    const props = {
      menu: [
        {
          item: expect.any(String),
          price: expect.any(Number),
          desc: expect.any(String),
          image: expect.any(String),
          quantity: expect.any(Number),
          type: expect.any(String),
          company: expect.any(String),
          category: expect.any(String)
        }
      ],
      title: expect.any(String),
      addtocart: jest.fn(),
      searchinfo: { itemFromSearch: expect.any(String), companyFromSearch: expect.any(String) },
      render: true || false,
      setrender: jest.fn()
    }

    const { getByTestId } = render(<Homeitems {...props} />)

    expect(getByTestId('Homeitems')).toHaveAttribute('menu', props.menu)
    expect(getByTestId('Homeitems')).toHaveAttribute('title', props.title)
    expect(getByTestId('Homeitems')).toHaveAttribute('addtocart', props.addtocart)
    expect(getByTestId('Homeitems')).toHaveAttribute('searchinfo', props.searchinfo)
    expect(getByTestId('Homeitems')).toHaveAttribute('render', props.render)
    expect(getByTestId('Homeitems')).toHaveAttribute('setrender', props.setrender)
  })
})