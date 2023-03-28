import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { DeleteForeverModal } from './DeleteForeverModal'
import '@testing-library/jest-dom'


describe('creating tests for delete forever modal', () => {
  const props = {
    isShowing: true || false,
    hide: jest.fn(),
    item: [],
    deleteitem: jest.fn(),
  }

  test('making sure that the delete forver modal renders correctly', () => {
    const { getByTestId } = render(<DeleteForeverModal {...props} />, { wrapper: MemoryRouter })
    let deleteForeverModal = getByTestId('deleteforvermodal-test')
    expect(deleteForeverModal).toBeInTheDocument();
    expect(deleteForeverModal).toBeDefined();
  })

  test('making sure that the delete forever modal close button closes', () => {
    const { getByTestId } = render(<DeleteForeverModal {...props} />, { wrapper: MemoryRouter })
    let closeButton = getByTestId('deleteforevermodal-close');
    fireEvent.click(closeButton)
    expect(props.hide).toHaveBeenCalledTimes(1)
  })

  test('making sure that when the proceed button is clicked it deletes the item', () => {
    const { getByTestId } = render(<DeleteForeverModal {...props} />, { wrapper: MemoryRouter })
    let proceedButton = getByTestId('deleteforevermodal-proceed')
    fireEvent.click(proceedButton)
    expect(props.deleteitem).toHaveBeenCalledTimes(1)
  })
})