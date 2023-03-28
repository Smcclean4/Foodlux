import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Checkout from './Checkout'
import { MemoryRouter } from 'react-router-dom';

describe('creating tests for checkout container', () => {
  test('making sure that checkout renders', () => {
    const { getByTestId } = render(<Checkout />, { wrapper: MemoryRouter })
    let checkoutTest = getByTestId('Checkout')
    expect(checkoutTest).toBeDefined();
  })
})