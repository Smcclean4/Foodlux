import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Checkoutitems from './Checkoutitems'

describe('writing tests for checkout items component', () => {
  const props = {
    details: [
      { image: 'item1.png', item: 'Item 1', price: 10, quantity: 1 },
      { image: 'item2.png', item: 'Item 2', price: 20, quantity: 2 },
      { image: 'item3.png', item: 'Item 3', price: 30, quantity: 3 },
    ],
  }

  test('checkout to see if Checkoutitems component is defined and in document', () => {
    const { getByTestId } = render(<Checkoutitems {...props} />)
    const checkoutItems = getByTestId('Checkoutitems')
    expect(checkoutItems).toBeInTheDocument()
    expect(checkoutItems).toBeDefined()
  })

  test('testing to see if image, item, price, and quantity are all defined', () => {
    const { getByTestId } = render(<Checkoutitems  {...props} />)
    const itemTest = getByTestId('item-test-0')
    const imageTest = getByTestId('image-test-0')
    const priceTest = getByTestId('price-test-0')
    const quantityTest = getByTestId('quantity-test-0')

    expect(itemTest).toBeDefined()
    expect(itemTest).toBeInTheDocument()
    expect(imageTest).toBeDefined()
    expect(imageTest).toBeInTheDocument()
    expect(priceTest).toBeDefined()
    expect(priceTest).toBeInTheDocument()
    expect(quantityTest).toBeDefined()
    expect(quantityTest).toBeInTheDocument()
  })
})