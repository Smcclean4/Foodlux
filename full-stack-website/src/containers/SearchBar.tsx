import React, { useEffect, useState } from 'react'
import "../stylesheets/SearchBar.css"

export const SearchBar = () => {
  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  useEffect(() => {
    console.log(userInput)
  }, [userInput])

  return (
    <div className="searchbar-container">
      <input className="searchbar-input" value={userInput} onChange={handleChange}></input>
      <p className="searchbar-button">SEARCH</p>
    </div>
  )
}
