import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Checkoutitems from './Checkoutitems'

describe('writing tests for checkout items component', () => {
  const props = {
    details: ['item1', 'item2', 'item3']
  }

  test('checkout to see if Checkoutitems component is defined and in document', () => {
    const { getByTestId } = render(<Checkoutitems {...props} />)
    const checkoutItems = getByTestId('Checkoutitems')
    expect(checkoutItems).toBeInTheDocument()
    expect(checkoutItems).toBeDefined()
  })

  test('testing to see if image, item, price, and quantity are all defined', () => {
    const { getByTestId } = render(<Checkoutitems {...props} />)
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