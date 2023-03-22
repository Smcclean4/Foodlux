import { render, fireEvent } from "@testing-library/react"
import { UserInputInterface } from "./SearchBar"
import SearchBar from "./SearchBar"
import React from 'react'

describe('looking through searchbar and checking functionality', () => {
  const exampleUserInputInfo = {
    searchTermCompany: "Test Taco's",
    searchTermCategory: "food"
  }

  const exampleUserInputInfoInterface = {
    searchTermCompany: expect.any(String),
    searchTermCategory: expect.any(String)
  }

  test('checking if user input info follows the structure of user input interface', () => {
    expect(exampleUserInputInfo).toMatchObject<UserInputInterface>(exampleUserInputInfoInterface)
  })

  test('testing when the search button is clicked it stores values and makes the search happen', () => {
    const searchForItem = jest.fn();
    const data = '';
    const { getByText } = render(<SearchBar data={data} searchforitem={searchForItem} />)
    const button = getByText('Search')
    fireEvent.click(button)
    expect(searchForItem).toHaveBeenCalledTimes(1);
  })
})